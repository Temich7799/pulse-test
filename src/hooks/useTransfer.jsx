import { useCallback, useState } from 'react';

const excludeItem = (items, value) => {
  return items.filter((item) => item !== value);
};

const useTransfer = ({ itemsLeft: leftItemsInitial = [], itemsRight: rightItemsInitial = [] }) => {
  const [leftItems, setLeftItems] = useState(leftItemsInitial);
  const [rightItems, setRightItems] = useState(rightItemsInitial);

  const handleTransfer = useCallback((leftItems, rightItems) => {
    setLeftItems(leftItems);
    setRightItems(rightItems);
  }, []);

  const moveLeft = useCallback(
    (value) => {
      const itemsRight = excludeItem(rightItems, value);
      const itemsLeft = [...leftItems, value];
      handleTransfer(itemsLeft, itemsRight);
    },
    [handleTransfer, leftItems, rightItems]
  );

  const moveRight = useCallback(
    (value) => {
      const itemsLeft = excludeItem(leftItems, value);
      const itemsRight = [...rightItems, value];
      handleTransfer(itemsLeft, itemsRight);
    },
    [handleTransfer, rightItems, leftItems]
  );

  return {
    leftItems,
    moveLeft,
    moveRight,
    rightItems,
  };
};

export default useTransfer;
