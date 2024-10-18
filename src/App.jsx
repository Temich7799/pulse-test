import { ThemeProvider } from '@mui/material';

import SubscriptionsPage from './pages/SubscriptionsPage';
import theme from './theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SubscriptionsPage />
    </ThemeProvider>
  );
};

export default App;
