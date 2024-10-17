import { createContext, useCallback, useContext, useState } from 'react';

const TabsContext = createContext(null);

export const TabsProvider = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleChangeTab = useCallback((event, newValue) => {
    setSelectedTab(newValue);
  }, []);

  return (
    <TabsContext.Provider value={{ handleChangeTab, value: selectedTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export const TabConsumer = ({ children, value, ...other }) => {
  const { value: selectedTab } = useTabs();

  return (
    <div
      aria-labelledby={`tab-${selectedTab}`}
      hidden={value !== selectedTab}
      id={`tabpanel-${selectedTab}`}
      role="tabpanel"
      {...other}
    >
      {value === selectedTab && children}
    </div>
  );
};

const useTabs = () => useContext(TabsContext);

export default useTabs;
