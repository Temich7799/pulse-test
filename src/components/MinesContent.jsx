import { Stack, Typography } from '@mui/material';

import MinesForm from './MinesForm';

const MinesContent = () => {
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
          Select Mines to Track
        </Typography>
        <Typography>To follow a Mine, select it in the left panel and click &rarr;.</Typography>
        <Typography>To unfollow a Mine, select it in the right panel and click +.</Typography>
        <Typography>Then click &quotSave&quot to apply your changes.</Typography>
        <Typography>Use search fields to easily find a required Mine.</Typography>
      </Stack>
      <MinesForm />
    </div>
  );
};

export default MinesContent;
