import { Box, Tab, Tabs } from '@mui/material';

import useTabs, { TabConsumer } from '../hooks/useTabs';
import CompaniesContent from './CompaniesContent';
import MinesContent from './MinesContent';

const SubscriptionsTabs = () => {
  const { handleChangeTab, value } = useTabs();

  return (
    <>
      <Tabs
        aria-label="subscriptions-tabs"
        value={value}
        onChange={handleChangeTab}
      >
        <Tab label="Companies" />
        <Tab label="Mines" />
      </Tabs>
      <Box p={3}>
        <TabConsumer value={0}>
          <CompaniesContent />
        </TabConsumer>
        <TabConsumer value={1}>
          <MinesContent />
        </TabConsumer>
      </Box>
    </>
  );
};

export default SubscriptionsTabs;
