import React, {useState, useEffect} from 'react';
import {KeyboardAvoidingView, Platform, StyleSheet} from 'react-native';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-community/async-storage';

import DateHead from './componets/DateHead';
import AddTodo from './componets/AddTodo';
import Empty from './componets/Empty';
import TodoList from './componets/TodoList';
import todosStorage from './storages/todosStorages';

function App() {
  const today = new Date();

  const [todos, setTodos] = useState([]);

  useEffect(() => {
    todosStorage.get().then(setTodos).catch(console.error);
  }, []);

  useEffect(() => {
    todosStorage.set(todos).catch(console.error);
  }, [todos]);

  // // 저장
  // useEffect(() => {
  //   async function save() {
  //     try {
  //       await AsyncStorage.setItem('todos', JSON.stringify(todos));
  //     } catch (e) {
  //       console.log('실패다임마');
  //     }
  //   }
  //   save();
  // }, [todos]);

  // // 불러오기
  // useEffect(() => {
  //   async function load() {
  //     try {
  //       const rawTodos = await AsyncStorage.getItem('todos');
  //       const savedTodos = JSON.parse(rawTodos);
  //       setTodos(savedTodos);
  //     } catch (e) {
  //       console.log('실패다임마');
  //     }
  //   }
  //   load();
  // }, [todos]);

  // 새로운 todo 넣음
  const onInsert = text => {
    // 새로운 todo의 id는 todos가 있으면 최댓값 id +1, 없으면 1를 저장
    const nextId =
      todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) + 1 : 1;
    const todo = {
      id: nextId,
      text,
      done: false,
    };
    // 객체 불변성
    setTodos(todos.concat(todo));
  };

  // 토글할때 done이 바뀜
  const onToggle = id => {
    const nextTodos = todos.map(todo =>
      todo.id === id ? {...todo, done: !todo.done} : todo,
    );
    setTodos(nextTodos);
  };

  // 항목 삭제
  const onRemove = id => {
    const nextTodos = todos.filter(todo => todo.id !== id);
    setTodos(nextTodos);
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView edges={['top']} style={styles.block}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : undefined}
          style={styles.avoid}>
          <DateHead date={today} />
          {todos.length === 0 ? (
            <Empty />
          ) : (
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove} />
          )}
          <AddTodo onInsert={onInsert} />
        </KeyboardAvoidingView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
  avoid: {
    flex: 1,
  },
});

export default App;
