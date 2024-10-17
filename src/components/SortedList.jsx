import { useCallback, useState } from 'react';

import { List, ListItemButton, Paper, Stack, TextField, Typography } from '@mui/material';

const SortedList = ({ items = [], label, onClick, placeholder }) => {
  const [search, setSearch] = useState('');

  const onClickHandler = useCallback(
    (e, item) => {
      if (onClick) {
        onClick(e, item);
      }
    },
    [onClick]
  );

  const regex = new RegExp(search, 'i');
  const filteredItems = items.filter(({ name }) => regex.test(name));

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

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
      </Stack>
    </Paper>
  );
};

export default SortedList;
