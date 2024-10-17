import { Stack, Typography } from '@mui/material';

import CompaniesForm from './CompaniesForm';

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
      <CompaniesForm />
    </div>
  );
};

export default CompaniesContent;
