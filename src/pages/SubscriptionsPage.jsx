import { Container, Typography } from '@mui/material';

import SubscriptionsTabs from '../components/SubscriptionsTabs';
import { TabsProvider } from '../hooks/useTabs';

const SubscriptionsPage = () => {
  return (
    <Container>
      <Typography
        component="h1"
        variant="h3"
        my={3}
      >
        Your Subscriptions
      </Typography>
      <TabsProvider>
        <SubscriptionsTabs />
      </TabsProvider>
    </Container>
  );
};

export default SubscriptionsPage;
