import { Button, Stack } from '@mui/material';

import { getMines, getSubscribedMines, updateMineSubscriptions } from '../api/mines';
import useForm from '../hooks/useForm';
import TransferList from './TransferList';

const MinesForm = () => {
  const { handleSubmit, items, setSubscribedItems, subscribedItems } = useForm(
    getMines,
    getSubscribedMines,
    updateMineSubscriptions
  );

  return (
    <form>
      <TransferList
        items={items}
        leftLabel="Available Mines"
        rightLabel="Selected Mines"
        selectedInitial={subscribedItems}
        onRightChange={setSubscribedItems}
      />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="end"
        py={2}
      >
        <Button
          variant="contained"
          onClick={handleSubmit}
        >
          Save
        </Button>
      </Stack>
    </form>
  );
};

export default MinesForm;
