import { Button, Stack } from '@mui/material';

import { getCompanies, getSubscribedCompanies } from '../api/companies';
import useForm from '../hooks/useForm';
import TransferList from './TransferList';

const CompaniesForm = () => {
  const { handleChange, items, subscribedItems } = useForm(getCompanies, getSubscribedCompanies);

  return (
    <form>
      <TransferList
        items={items}
        leftLabel="Available Companies"
        rightLabel="Selected Companies"
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

export default CompaniesForm;
