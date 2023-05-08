import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
// import LogContext from './context/LogContext';
import {LogContextProvider} from './context/LogContext';

function App() {
  return (
    <NavigationContainer>
      {/* <LogContext.Provider value="뭘까유">
        <RootStack />
      </LogContext.Provider> */}
      <LogContextProvider>
        <RootStack />
      </LogContextProvider>
    </NavigationContainer>
  );
}

export default App;
