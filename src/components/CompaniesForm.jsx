import { Button, Stack } from '@mui/material';

import { getCompanies, getSubscribedCompanies, updateCompanySubscriptions } from '../api/companies';
import useForm from '../hooks/useForm';
import TransferList from './TransferList';

const CompaniesForm = () => {
  const { handleSubmit, items, setSubscribedItems, subscribedItems } = useForm(
    getCompanies,
    getSubscribedCompanies,
    updateCompanySubscriptions
  );

  return (
    <form>
      <TransferList
        items={items}
        leftLabel="Available Companies"
        rightLabel="Selected Companies"
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

export default CompaniesForm;
