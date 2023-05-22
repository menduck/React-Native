import React, {createContext, useContext, useState} from 'react';

const UserContext = createContext(null);

export function UserContextProvider({children}) {
  const [user, setUser] = useState(null);
  return <UserContext.Provider children={children} value={{user, setUser}} />;
}

// 사용자 정보를 조회
export function useUserContext() {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error('UserContext. Provider is no found');
  }
  return userContext;
}
