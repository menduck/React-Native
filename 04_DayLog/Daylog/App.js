import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
// import LogContext from './context/LogContext';
import {LogContextProvider} from './context/LogContext';
import {SearchContextProvider} from './context/SearchContext';

function App() {
  return (
    <NavigationContainer>
      {/* <LogContext.Provider value="뭘까유">
        <RootStack />
      </LogContext.Provider> */}
      <SearchContextProvider>
        <LogContextProvider>
          <RootStack />
        </LogContextProvider>
      </SearchContextProvider>
    </NavigationContainer>
  );
}

export default App;
