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

  const { current } = useRef({ selectedLeft: null, selectedRight: null });

  const selectRight = useCallback(
    (e, item) => {
      current.selectedRight = item;
    },
    [current]
  );

  const selectLeft = useCallback(
    (e, item) => {
      current.selectedLeft = item;
    },
    [current]
  );

  const handleMoveLeft = useCallback(() => {
    current.selectedRight && moveLeft(current.selectedRight);
    current.selectedRight = null;
  }, [moveLeft, current]);

  const handleMoveRight = useCallback(() => {
    current.selectedLeft && moveRight(current.selectedLeft);
    current.selectedLeft = null;
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
    leftItems.length && onLeftChange && onLeftChange(leftItems);
    rightItems.length && onRightChange && onRightChange(rightItems);
  }, [leftItems, onLeftChange, onRightChange, rightItems]);

  return (
    <Grid
      container
      spacing={3}
    >
      <Grid size={4}>
        <SortedList
          items={leftItems}
          label={leftLabel}
          placeholder="Type Name"
          onClick={selectLeft}
          onDoubleClick={onDoubleLeftClick}
        />
      </Grid>
      <Grid size={2}>
        <Stack
          justifyContent="center"
          sx={{ height: '100%' }}
        >
          <IconButton
            color="primary"
            onClick={handleMoveLeft}
          >
            <ArrowCircleLeftIcon fontSize="large" />
          </IconButton>
          <IconButton
            color="primary"
            onClick={handleMoveRight}
          >
            <ArrowCircleRightIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Grid>
      <Grid size={4}>
        <SortedList
          items={rightItems}
          label={rightLabel}
          placeholder="Type Name"
          onClick={selectRight}
          onDoubleClick={onDoubleRightClick}
        />
      </Grid>
    </Grid>
  );
};

export default TransferList;
