import { createContext, useCallback, useContext, useState } from 'react';

const TabsContext = createContext(null);

export const TabsProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChangeTab = useCallback((event, newValue) => {
    setSelectedTab(newValue);
  }, []);

  return (
    <TabsContext.Provider value={{ value: selectedTab, handleChangeTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export const TabConsumer = ({ value, children, ...other }) => {
  const { value: selectedTab } = useTabs();

  return (
    <div
      role="tabpanel"
      hidden={value !== selectedTab}
      id={`tabpanel-${selectedTab}`}
      aria-labelledby={`tab-${selectedTab}`}
      {...other}
    >
      {value === selectedTab && children}
    </div>
  );
};

const useTabs = () => useContext(TabsContext);

export default useTabs;
