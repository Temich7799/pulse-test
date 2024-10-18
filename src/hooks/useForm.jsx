import { useCallback, useEffect, useRef, useState } from 'react';

import { subtractArrays } from '../utils';

const formatRequest = (values) => {
  return values.map(({ id }) => id);
};

const useForm = (getItems, getSubscribedItems, updateSubscribedItems) => {
  const [items, setItems] = useState([]);
  const [subscribedItems, setSubscribedItems] = useState([]);

  const { current } = useRef({});

  const handleChange = useCallback(
    (values) => {
      current.values = values;
    },
    [current]
  );

  const handleSubmit = useCallback(async () => {
    if (current.values) {
      const body = formatRequest(current.values);
      await updateSubscribedItems(body);
    }
  }, [updateSubscribedItems, current.values]);

  const fetchItems = useCallback(
    async () =>
      Promise.all([getItems(), getSubscribedItems()]).then(([items, subscribedItems]) => {
        const filteredItems = subtractArrays(items, subscribedItems, 'id');
        setItems(filteredItems);
        setSubscribedItems(subscribedItems);
      }),
    [getItems, getSubscribedItems]
  );

  useEffect(() => {
    fetchItems();
  }, [fetchItems]);

  return {
    fetchItems,
    handleSubmit,
    items,
    setSubscribedItems: handleChange,
    subscribedItems,
  };
};

export default useForm;
