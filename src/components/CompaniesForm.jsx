import { useCallback, useEffect, useRef, useState } from 'react';

import { Button, Stack } from '@mui/material';

import { getCompanies, getSubscribedCompanies } from '../api/companies';
import { subtractArrays } from '../utils';
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
    Promise.all([getCompanies(), getSubscribedCompanies()]).then(
      ([companies, subscribedCompanies]) => {
        const filteredCompanies = subtractArrays(companies, subscribedCompanies, 'id');
        setItems(filteredCompanies);
        setSelectedInitial(subscribedCompanies);
      }
    );
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
