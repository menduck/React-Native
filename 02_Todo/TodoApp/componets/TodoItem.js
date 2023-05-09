import React from 'react';
import {
  Alert,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

function TodoItem({id, text, done, onToggle, onRemove}) {
  const remove = () => {
    // 제목, 내용, 버튼배열, 옵션 객체 순서
    Alert.alert(
      '삭제',
      '정말로 삭제하시겠어요?',
      [
        {text: '취소', onPress: () => {}, style: 'cancel'},
        {
          text: '삭제',
          onPress: () => {
            onRemove(id);
          },
          style: 'destructive',
        },
      ],
      // Alert 바깥 영역을 터치하거나 Back 버튼을 눌렀을 때 Alert가 닫힘
      {cancelable: true, onDismiss: () => {}},
    );
  };
  return (
    <View style={styles.item}>
      <TouchableOpacity onPress={() => onToggle(id)}>
        <View style={[styles.circle, done && styles.filled]}>
          {done && (
            <Image source={require('../assets/images/check_white.png')} />
          )}
        </View>
      </TouchableOpacity>
      <Text style={[styles.text, done && styles.lineThrough]}>{text}</Text>
      {done ? (
        // <TouchableOpacity onPress={() => onRemove(id)}> 한번 더 묻지 않고 삭제
        <TouchableOpacity onPress={remove}>
          <Icon name="x-circle" size={25} color="#ebe8ed" />
        </TouchableOpacity>
      ) : (
        // 삭제 아이콘이 보이지 않을 때도 영역을 차지해야 텍스트가 길어져도 보이는 영역이 같음
        <View style={styles.removePlaceHolder} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  circle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderColor: '#ddc0f2',
    borderWidth: 1,
    marginRight: 16,
  },
  text: {
    flex: 1,
    fontSize: 16,
    color: '#212121',
  },
  filled: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#af6fdc',
  },
  lineThrough: {
    color: '#9e9e9e',
    textDecorationLine: 'line-through',
  },
  removePlaceHolder: {
    width: 32,
    height: 32,
  },
});

export default TodoItem;
