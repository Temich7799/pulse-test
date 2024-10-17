import { useCallback } from 'react';

import { List, ListItemButton, Paper, Stack, TextField, Typography } from '@mui/material';

const SortedList = ({ items = [], label, onClick, placeholder }) => {
  const onClickHandler = useCallback(
    (e, value) => {
      if (onClick) {
        onClick(e, value);
      }
    },
    [onClick]
  );

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
          variant="outlined"
        />
        <List sx={{ height: '150px', overflowY: 'scroll' }}>
          {items.map((item) => (
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
