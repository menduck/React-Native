import React, {useEffect, useRef} from 'react';
import {createContext, useState} from 'react';

import {v4 as uuidv4} from 'uuid';
import logsStorage from '../storages/logsStorage';
const LogContext = createContext();

export function LogContextProvider({children}) {
  const initialLogsRef = useRef(null);
  const [logs, setLogs] = useState([]);

  const onCreate = ({title, body, date}) => {
    const log = {
      id: uuidv4(),
      title,
      body,
      date,
    };
    setLogs([log, ...logs]);
  };

  useEffect(() => {
    // useEffect 내에서 async 함수를 만들고 바로 호출
    // IIFE 패턴
    (async () => {
      const savedLogs = await logsStorage.get();
      if (savedLogs) {
        initialLogsRef.current = savedLogs;
        setLogs(savedLogs);
      }
    })();
  }, []);

  // 데이터 변경이 없을때 한 번 더 저장되는 것을 방지하기 위해 초기 데이터를 useRef로 기억하게 함.
  useEffect(() => {
    if (logs === initialLogsRef.current) {
      return;
    }
    logsStorage.set(logs);
  }, [logs]);

  const onModify = modified => {
    //  logs 배열 순회, id가 일치하면 log교체, 아니면 유지
    const nextLogs = logs.map(log => (log.id === modified.id ? modified : log));
    // 교체된 새로운 배열 생성, 상태 업데이트
    setLogs(nextLogs);
  };

  const onRemove = id => {
    const nextLogs = logs.filter(log => log.id !== id);
    setLogs(nextLogs);
  };
  return (
    <LogContext.Provider value={{logs, onCreate, onModify, onRemove}}>
      {children}
    </LogContext.Provider>
  );
}

export default LogContext;
