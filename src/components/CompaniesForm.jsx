import { useCallback, useState } from 'react';

import { Button, Stack } from '@mui/material';

import TransferList from './TransferList';

const mockedCompanies = [
  'Company1',
  'Company2',
  'Company3',
  'Company4',
  'Company5',
  'Company6',
  'Company7',
];

const CompaniesForm = () => {
  const [data, setData] = useState([]);

  const handleChange = useCallback((value) => {
    setData(value);
  }, []);

  return (
    <form>
      <TransferList
        items={mockedCompanies}
        leftLabel="Available Companies"
        rightLabel="Selected Companies"
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
