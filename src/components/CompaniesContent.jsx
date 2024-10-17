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

const CompaniesContent = () => {
  return (
    <div>
      <Stack
        mb={3}
        spacing={2}
      >
        <Typography
          component="h2"
          variant="h4"
        >
          Select Companies to Track
        </Typography>
        <Typography>To follow a Company, select it in the left panel and click &rarr;.</Typography>
        <Typography>To unfollow a Company, select it in the right panel and click +.</Typography>
        <Typography>Then click &quotSave&quot to apply your changes.</Typography>
        <Typography>Use search fields to easily find a required Company.</Typography>
      </Stack>
      <Grid
        container
        spacing={5}
      >
        <Grid size={5}>
          <SortedList
            items={mockedCompanies}
            label="Available Companies"
          />
        </Grid>
        <Grid size={5}>
          <SortedList
            items={mockedSelectedCompanies}
            label="Selected Companies"
          />
        </Grid>
      </Grid>
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="end"
      >
        <Button variant="contained">Save</Button>
      </Stack>
    </div>
  );
};

export default CompaniesContent;
