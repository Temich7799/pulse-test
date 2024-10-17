import { List, ListItem, TextField } from '@mui/material';

const SortedList = ({ items = [], label }) => {
  return (
    <>
      <TextField
        fullWidth
        label={label}
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
