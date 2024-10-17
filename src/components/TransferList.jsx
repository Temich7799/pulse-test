import { useCallback, useEffect } from 'react';

import { Grid2 as Grid } from '@mui/material';

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

  const handleMoveRight = useCallback(
    (e, item) => {
      moveRight(item);
    },
    [moveRight]
  );

  const handleMoveLeft = useCallback(
    (e, item) => {
      moveLeft(item);
    },
    [moveLeft]
  );

  useEffect(() => {
    leftItems.length && onLeftChange && onLeftChange(leftItems);
    rightItems.length && onRightChange && onRightChange(rightItems);
  }, [leftItems, onLeftChange, onRightChange, rightItems]);

  return (
    <Grid
      container
      spacing={5}
    >
      <Grid size={4}>
        <SortedList
          items={leftItems}
          label={leftLabel}
          placeholder="Type Name"
          onClick={handleMoveRight}
        />
      </Grid>
      <Grid size={4}>
        <SortedList
          items={rightItems}
          label={rightLabel}
          placeholder="Type Name"
          onClick={handleMoveLeft}
        />
      </Grid>
    </Grid>
  );
};

export default TransferList;
