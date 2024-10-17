import { useCallback, useState } from 'react';

import { Button, Stack } from '@mui/material';

import TransferList from './TransferList';

const mockedMines = ['Mine1', 'Mine2', 'Mine3', 'Mine4', 'Mine5', 'Mine6', 'Mine7'];

const MinesForm = () => {
  const [data, setData] = useState([]);

  const handleChange = useCallback((value) => {
    setData(value);
  }, []);

  return (
    <form>
      <TransferList
        items={mockedMines}
        leftLabel="Available Mines"
        rightLabel="Selected Mines"
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
