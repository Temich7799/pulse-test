import { useCallback, useEffect, useRef, useState } from 'react';

import { subtractArrays } from '../utils';

const useForm = (getItems, getSubscribedItems) => {
  const [items, setItems] = useState([]);
  const [subscribedItems, setSubscribedItems] = useState([]);

  const { current } = useRef({});

  const handleChange = useCallback(
    (values) => {
      current.values = values;
    },
    [current]
  );

  const updateData = useCallback(
    async () =>
      Promise.all([getItems(), getSubscribedItems()]).then(([items, subscribedItems]) => {
        const filteredItems = subtractArrays(items, subscribedItems, 'id');
        setItems(filteredItems);
        setSubscribedItems(subscribedItems);
      }),
    [getItems, getSubscribedItems]
  );

  useEffect(() => {
    updateData();
  }, [updateData]);

  return { items, setSubscribedItems: handleChange, subscribedItems, updateData };
};

export default useForm;
