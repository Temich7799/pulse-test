import { useCallback, useEffect, useRef, useState } from 'react';

import { Button, Stack } from '@mui/material';

import { getCompanies, getSubscribedCompanies } from '../api/companies';
import TransferList from './TransferList';

const CompaniesForm = () => {
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
    getCompanies().then(setItems);
    getSubscribedCompanies().then(setSelectedInitial);
  }, []);

  return (
    <form>
      <TransferList
        items={items}
        leftLabel="Available Companies"
        rightLabel="Selected Companies"
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

export default CompaniesForm;
