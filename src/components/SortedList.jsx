import { useCallback, useState } from 'react';

import { List, ListItemButton, Paper, Stack, TextField, Typography } from '@mui/material';

import { sortArray } from '../utils';

const SortedList = ({ items = [], onClick, placeholder }) => {
  const [search, setSearch] = useState('');

  const onClickHandler = useCallback(
    (e, item) => {
      if (onClick) {
        onClick(e, item);
      }
    },
    [onClick]
  );

  const sortedItems = sortArray(items, 'id');

  const regex = new RegExp(search, 'i');
  const filteredItems = sortedItems.filter(({ name }) => regex.test(name));

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  return (
    <>
      <TextField
        fullWidth
        label={placeholder}
        value={search}
        variant="outlined"
        onChange={handleSearch}
      />
      <List sx={{ height: '150px', overflowY: 'scroll' }}>
        {filteredItems.map((item) => (
          <ListItemButton
            key={item.id}
            onClick={(e) => onClickHandler(e, item)}
          >
            {item.name}
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

const WrappedSortedList = ({ items = [], label, onClick, placeholder }) => {
  return (
    <Paper>
      <Stack spacing={1}>
        <Typography
          component="h3"
          p={2}
          variant="h6"
        >
          {label}
        </Typography>
        <SortedList
          items={items}
          placeholder={placeholder}
          onClick={onClick}
        />
      </Stack>
    </Paper>
  );
};

export default WrappedSortedList;
