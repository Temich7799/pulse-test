import { useCallback, useEffect, useRef, useState } from 'react';

import { List, ListItemButton, Paper, Stack, TextField, Typography } from '@mui/material';

import { sortArray } from '../utils';

const SortedList = ({ items = [], onClick, onDoubleClick, onMultipleClick, placeholder }) => {
  const [search, setSearch] = useState('');

  const { current } = useRef({ isCtrlDown: false });

  const onClickHandler = useCallback(
    (e, item) => {
      if (onMultipleClick && current.isCtrlDown) {
        onMultipleClick(e, item);
      } else if (onClick) {
        onClick(e, item);
      }
    },
    [onClick, onMultipleClick, current.isCtrlDown]
  );

  const onDoubleClickHandler = useCallback(
    (e, item) => {
      if (onDoubleClick) {
        onDoubleClick(e, item);
      }
    },
    [onDoubleClick]
  );

  const sortedItems = sortArray(items, 'id');

  const regex = new RegExp(search, 'i');
  const filteredItems = sortedItems.filter(({ name }) => regex.test(name));

  const handleSearch = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  useEffect(() => {
    if (onMultipleClick) {
      const handleKeyDown = (event) => {
        if (event.metaKey || event.ctrlKey) {
          current.isCtrlDown = true;
        }
      };

      const handleKeyUp = () => {
        current.isCtrlDown = false;
      };

      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('keyup', handleKeyUp);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener('keyup', handleKeyUp);
      };
    }
  }, [onMultipleClick, current]);

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
            onDoubleClick={(e) => onDoubleClickHandler(e, item)}
          >
            {item.name}
          </ListItemButton>
        ))}
      </List>
    </>
  );
};

const WrappedSortedList = ({
  items = [],
  label,
  onClick,
  onDoubleClick,
  onMultipleClick,
  placeholder,
}) => {
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
          onDoubleClick={onDoubleClick}
          onMultipleClick={onMultipleClick}
        />
      </Stack>
    </Paper>
  );
};

export default WrappedSortedList;
