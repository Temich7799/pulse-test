import { Button, Stack } from '@mui/material';

import { getMines, getSubscribedMines } from '../api/mines';
import useForm from '../hooks/useForm';
import TransferList from './TransferList';

const MinesForm = () => {
  const { handleChange, items, subscribedItems } = useForm(getMines, getSubscribedMines);

  return (
    <form>
      <TransferList
        items={items}
        leftLabel="Available Mines"
        rightLabel="Selected Mines"
        selectedInitial={subscribedItems}
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
