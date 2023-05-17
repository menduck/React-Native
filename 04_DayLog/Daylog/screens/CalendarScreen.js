import React, {useContext, useMemo, useState} from 'react';
import {format} from 'date-fns';
import CalendarView from '../compontents/CalendarView';
import LogContext from '../context/LogContext';
import FeedList from '../compontents/FeedList';

function CalendarScreen() {
  const {logs} = useContext(LogContext);
  const [selectedDate, setSelectedDate] = useState(
    format(new Date(), 'yyyy-MM-dd'),
  );
  // const markedDates = logs.reduce((acc, current) => {
  //   const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
  //   acc[formattedDate] = {marked: true};
  //   return acc;
  // }, {});
  // 리렌더링될 때마다 markdedDates를 생성하기 때문에 날짜가 바뀌어도 변하지 않는 값이므로 매번 생성할 필요가 없음

  // -> useMemo hook 최적화하기
  // logs 배열이 바뀔 때만 logs.reduce 함수 실행

  const markedDates = useMemo(
    () =>
      logs.reduce((acc, current) => {
        const formattedDate = format(new Date(current.date), 'yyyy-MM-dd');
        acc[formattedDate] = {marked: true};
        return acc;
      }, {}),
    [logs],
  );
  const filteredLogs = logs.filter(
    log => format(new Date(log.date), 'yyyy-MM-dd') === selectedDate,
  );
  return (
    <FeedList
      logs={filteredLogs}
      ListHeaderComponent={
        <CalendarView
          markedDates={markedDates}
          selectedDate={selectedDate}
          onSelectDate={setSelectedDate}
        />
      }
    />
  );
}

export default CalendarScreen;
