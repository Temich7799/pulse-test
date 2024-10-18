import { useCallback, useEffect, useState } from 'react';

const excludeItem = (items, value) => {
  return items.filter((item) => item !== value);
};

const excludeItems = (items, values) => {
  return values.reduce((acc, value) => excludeItem(acc, value), items);
};

const useTransfer = ({ itemsLeft: leftItemsInitial, itemsRight: rightItemsInitial }) => {
  const [leftItems, setLeftItems] = useState([]);
  const [rightItems, setRightItems] = useState([]);

  const handleTransfer = useCallback((leftItems, rightItems) => {
    setLeftItems(leftItems);
    setRightItems(rightItems);
  }, []);

  const moveLeft = useCallback(
    (values) => {
      const itemsRight = excludeItems(rightItems, values);
      const itemsLeft = [...leftItems, ...values];
      handleTransfer(itemsLeft, itemsRight);
    },
    [handleTransfer, leftItems, rightItems]
  );

  const moveRight = useCallback(
    (values) => {
      const itemsLeft = excludeItems(leftItems, values);
      const itemsRight = [...rightItems, ...values];
      handleTransfer(itemsLeft, itemsRight);
    },
    [handleTransfer, rightItems, leftItems]
  );

  useEffect(() => {
    leftItemsInitial && setLeftItems(leftItemsInitial);
  }, [leftItemsInitial]);

  useEffect(() => {
    rightItemsInitial && setRightItems(rightItemsInitial);
  }, [rightItemsInitial]);

  return {
    leftItems,
    moveLeft,
    moveRight,
    rightItems,
  };
};

export default useTransfer;
