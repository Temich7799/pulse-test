import { useCallback, useEffect, useRef, useState } from 'react';

import { Button, Stack } from '@mui/material';

import { getMines, getSubscribedMines } from '../api/mines';
import TransferList from './TransferList';

const MinesForm = () => {
  const { current } = useRef({});

  const [items, setItems] = useState([]);
  const [selectedInitial, setSelectedInitial] = useState([]);

  const handleChange = useCallback(
    (values) => {
      current.values = values;
    },
    [current]
  );

  useEffect(() => {
    getMines().then(setItems);
    getSubscribedMines().then(setSelectedInitial);
  }, []);

  return (
    <form>
      <TransferList
        items={items}
        leftLabel="Available Mines"
        rightLabel="Selected Mines"
        selectedInitial={selectedInitial}
        onRightChange={handleChange}
      />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="end"
        py={2}
      >
        <Button variant="contained">Save</Button>
      </Stack>
    </form>
  );
};

export default MinesForm;
