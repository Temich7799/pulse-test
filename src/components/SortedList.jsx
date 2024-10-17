import { useCallback, useState } from 'react';

import { List, ListItemButton, Paper, Stack, TextField, Typography } from '@mui/material';

const SortedList = ({ items = [], label, onClick, placeholder }) => {
  const [search, setSearch] = useState('');

  const onClickHandler = useCallback(
    (e, value) => {
      if (onClick) {
        onClick(e, value);
      }
    },
    [onClick]
  );

  const regex = new RegExp(search, 'i');
  const filteredItems = items.filter((item) => regex.test(item));

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
              key={item}
              onClick={(e) => onClickHandler(e, item)}
            >
              {item}
            </ListItemButton>
          ))}
        </List>
      </Stack>
    </Paper>
  );
};

export default SortedList;
