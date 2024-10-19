import { useCallback, useEffect, useRef, useState } from 'react';

import { subtractArrays } from '../utils';

const formatRequest = (values) => {
  return values.map(({ id }) => id);
};

const useForm = (getItems, getSubscribedItems, updateSubscribedItems) => {
  const [items, setItems] = useState([]);
  const [subscribedItems, setSubscribedItems] = useState([]);

  const { current } = useRef({ values: [] });

  const handleChange = useCallback(
    (values) => {
      current.values = values;
    },
    [current]
  );

  const fetchItems = useCallback(
    async () =>
      Promise.all([getItems(), getSubscribedItems()]).then(([items, subscribedItems]) => {
        const filteredItems = subtractArrays(items, subscribedItems, 'id');
        setItems(filteredItems);
        setSubscribedItems(subscribedItems);
      }),
    [getItems, getSubscribedItems]
  );

  const handleSubmit = useCallback(async () => {
    if (current.values) {
      const body = formatRequest(current.values);
      updateSubscribedItems(body).then(fetchItems);
    }
  }, [updateSubscribedItems, current.values, fetchItems]);

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
