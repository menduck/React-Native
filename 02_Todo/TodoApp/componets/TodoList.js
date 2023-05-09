import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import TodoItem from './TodoItem';

function TodoList({todos, onToggle, onRemove}) {
  return (
    <FlatList
      // 컴포넌트 사이에 구분선
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      style={styles.list}
      // 만들고자 하는 리스트의 source를 담는 prop
      data={todos}
      // data로 받은 source의 각각 item들 render시켜주는 callback함수
      renderItem={({item}) => (
        <View>
          <TodoItem
            id={item.id}
            text={item.text}
            done={item.done}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        </View>
      )}
      // 각 item에게 고유한 키를 줌(고유 값은 문자열 타입)
      keyExtractor={item => item.id.toString()}
    />
  );
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  separator: {
    backgroundColor: '#e0e0e0',
    height: 1,
  },
});

export default TodoList;
