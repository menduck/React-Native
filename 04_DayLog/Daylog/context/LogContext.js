import React from 'react';
import {createContext, useState} from 'react';

const LogContext = createContext();

// Provider를 사용하는 컴포넌트에서 Context의 상태를 관리하는 것보다는 Provider 전용 컴포넌트를 따로 만드는 것이 유지보수성이 높음.
export function LogContextProvider({children}) {
  const [text, setText] = useState('');
  return (
    <LogContext.Provider value={{text, setText}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
