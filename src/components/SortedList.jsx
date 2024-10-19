import { useCallback, useEffect, useRef, useState } from 'react';

import {
  List,
  ListItemButton,
  ListItemText,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@mui/material';

import { sortArray } from '../utils';

const SortedList = ({
  items = [],

  onClick,
  onDoubleClick,
  onMultipleClick,
  placeholder,
}) => {
  const [search, setSearch] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);

  const { current } = useRef({ isCtrlDown: false });

  const onClickHandler = useCallback(
    (e, item) => {
      if (onMultipleClick && current.isCtrlDown) {
        onMultipleClick(e, item);
        setSelectedItems((prev) => [...prev, item]);
      } else if (onClick) {
        onClick(e, item);
        setSelectedItems([item]);
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
        sx={{
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              border: 'none',
            },
          },
          border: '2px solid #000',
          borderRadius: 0,
        }}
        placeholder={placeholder}
        value={search}
        variant="outlined"
        onChange={handleSearch}
      />
      <List sx={{ border: '2px solid #000', height: '150px', overflowY: 'scroll', padding: 0 }}>
        {filteredItems.map((item) => (
          <ListItemButton
            sx={{
              '&:hover': {
                backgroundColor: '#f0f0f0',
              },
              backgroundColor: selectedItems.includes(item) ? '#d1eaff' : 'inherit',
              border: 'none',
              borderBottom: '1px solid #000',
              borderRadius: 0,
              padding: '10px 16px',
            }}
            key={item.id}
            onClick={(e) => onClickHandler(e, item)}
            onDoubleClick={(e) => onDoubleClickHandler(e, item)}
          >
            <ListItemText
              primary={item.name}
              sx={{ textAlign: 'center' }}
            />
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
        <Paper sx={{ border: '2px solid #000', padding: 2 }}>
          <Stack spacing={2}>
            <Typography
              component="h3"
              sx={{ borderBottom: '2px solid #000', fontWeight: 'bold' }}
              variant="h6"
            >
              {label}
            </Typography>
            <SortedList
              items={items}
              label={label}
              placeholder={placeholder}
              onClick={onClick}
              onDoubleClick={onDoubleClick}
              onMultipleClick={onMultipleClick}
            />
          </Stack>
        </Paper>
      </Stack>
    </Paper>
  );
};

export default WrappedSortedList;
