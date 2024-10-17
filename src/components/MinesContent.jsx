import { Button, Grid2 as Grid, Stack, Typography } from '@mui/material';

import SortedList from './SortedList';

const mockedCompanies = [
  'Company1',
  'Company2',
  'Company3',
  'Company4',
  'Company5',
  'Company6',
  'Company7',
];

const mockedSelectedCompanies = ['BHP', 'Anglo American', 'Company2', 'Company6'];

const MinesContent = () => {
  return (
    <div>
      <Stack
        spacing={2}
        mb={3}
      >
        <Typography
          component="h2"
          variant="h4"
        >
          Select Mines to Track
        </Typography>
        <Typography>To follow a Mine, select it in the left panel and click &rarr;.</Typography>
        <Typography>To unfollow a Mine, select it in the right panel and click +.</Typography>
        <Typography>Then click &quotSave&quot to apply your changes.</Typography>
        <Typography>Use search fields to easily find a required Mine.</Typography>
      </Stack>
      <Grid
        container
        spacing={5}
      >
        <Grid size={5}>
          <SortedList
            label="Available Mines"
            items={mockedCompanies}
          />
        </Grid>
        <Grid size={5}>
          <SortedList
            label="Selected Mines"
            items={mockedSelectedCompanies}
          />
        </Grid>
      </Grid>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="end"
      >
        <Button variant="contained">Save</Button>
      </Stack>
    </div>
  );
};

export default MinesContent;
