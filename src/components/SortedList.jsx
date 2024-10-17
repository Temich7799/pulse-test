import { List, ListItem, TextField } from '@mui/material';

const SortedList = ({ label, items = [] }) => {
  return (
    <>
      <TextField
        label={label}
        fullWidth
        variant="outlined"
      />
      <List>
        {items.map((item) => (
          <ListItem key={item}>{item}</ListItem>
        ))}
      </List>
    </>
  );
};

export default SortedList;
