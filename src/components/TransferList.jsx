import { useCallback, useEffect, useRef } from 'react';

import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Grid2 as Grid, IconButton, Stack } from '@mui/material';

import useTransfer from '../hooks/useTransfer';
import SortedList from './SortedList';

const TransferList = ({
  items,
  leftLabel,
  onLeftChange,
  onRightChange,
  rightLabel,
  selectedInitial,
}) => {
  const { leftItems, moveLeft, moveRight, rightItems } = useTransfer({
    itemsLeft: items,
    itemsRight: selectedInitial,
  });

  const { current } = useRef({ selectedLeft: [], selectedRight: [] });

  const selectLeft = useCallback(
    (e, item) => {
      current.selectedLeft = [item];
    },
    [current]
  );

  const selectRight = useCallback(
    (e, item) => {
      current.selectedRight = [item];
    },
    [current]
  );

  const multipleSelectLeft = useCallback(
    (e, item) => {
      if (!current.selectedLeft.includes(item)) {
        current.selectedLeft.push(item);
      }
    },
    [current]
  );

  const multipleSelectRight = useCallback(
    (e, item) => {
      if (!current.selectedRight.includes(item)) {
        current.selectedRight.push(item);
      }
    },
    [current]
  );

  const handleMoveLeft = useCallback(() => {
    current.selectedRight.length && moveLeft(current.selectedRight);
    current.selectedRight = [];
  }, [moveLeft, current]);

  const handleMoveRight = useCallback(() => {
    current.selectedLeft.length && moveRight(current.selectedLeft);
    current.selectedLeft = [];
  }, [moveRight, current]);

  const onDoubleLeftClick = useCallback(
    (e, item) => {
      selectLeft(e, item);
      handleMoveRight();
    },
    [handleMoveRight, selectLeft]
  );

  const onDoubleRightClick = useCallback(
    (e, item) => {
      selectRight(e, item);
      handleMoveLeft();
    },
    [handleMoveLeft, selectRight]
  );

  useEffect(() => {
    onLeftChange && onLeftChange(leftItems);
    onRightChange && onRightChange(rightItems);
  }, [leftItems, onLeftChange, onRightChange, rightItems]);

  return (
    <Grid
      container
      spacing={2}
    >
      <Grid size={{ md: 4, sm: 5, xs: 12 }}>
        <SortedList
          items={leftItems}
          label={leftLabel}
          placeholder="Type Name"
          onClick={selectLeft}
          onDoubleClick={onDoubleLeftClick}
          onMultipleClick={multipleSelectLeft}
        />
      </Grid>
      <Grid size={{ sm: 1.5, xs: 12 }}>
        <Stack
          direction={{ sm: 'column', xs: 'row' }}
          justifyContent="center"
          sx={{ height: '100%' }}
        >
          <IconButton
            color="primary"
            onClick={handleMoveLeft}
          >
            <ArrowCircleLeftIcon
              fontSize="large"
              sx={{ transform: { sm: 'none', xs: 'rotate(90deg)' } }}
            />
          </IconButton>
          <IconButton
            color="primary"
            onClick={handleMoveRight}
          >
            <ArrowCircleRightIcon
              fontSize="large"
              sx={{ transform: { sm: 'none', xs: 'rotate(90deg)' } }}
            />
          </IconButton>
        </Stack>
      </Grid>
      <Grid size={{ md: 4, sm: 5, xs: 12 }}>
        <SortedList
          items={rightItems}
          label={rightLabel}
          placeholder="Type Name"
          onClick={selectRight}
          onDoubleClick={onDoubleRightClick}
          onMultipleClick={multipleSelectRight}
        />
      </Grid>
    </Grid>
  );
};

export default TransferList;
