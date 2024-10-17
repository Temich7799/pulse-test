import { Container } from '@mui/material';

import SubscriptionsTabs from '../components/SubscriptionsTabs';
import { TabsProvider } from '../hooks/useTabs';

const SubscriptionsPage = () => {
  return (
    <Container>
      <TabsProvider>
        <SubscriptionsTabs />
      </TabsProvider>
    </Container>
  );
};

export default SubscriptionsPage;
