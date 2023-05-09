import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback,
  Keyboard,
} from 'react-native';

function AddTodo({onInsert}) {
  const [text, setText] = useState('');

  // 버튼이 눌렀을 때
  const onPress = () => {
    onInsert(text);
    // 텍스트비우기
    setText('');
    // 현재 나타만 키보드 닫기
    Keyboard.dismiss();
  };

  const button = (
    <View style={styles.bottonStyle}>
      <Image source={require('../assets/images/add_white.png')} />
    </View>
  );

  return (
    <View style={styles.block}>
      <TextInput
        placeholder="오늘의 할일?"
        style={styles.input}
        value={text}
        onChangeText={setText}
        // enter를 눌렀을때 호출되는 함수
        onSubmitEditing={onPress}
        // ios에서 키보드의 Enter부분이 done으로 바뀜
        // android는 체크 아이콘
        returnKeyType="done"
      />
      {/* 반복으로 작성된 부분 리팩토링 */}
      {Platform.select({
        ios: (
          <TouchableOpacity activeOpacity={0.5} onPress={onPress}>
            {button}
          </TouchableOpacity>
        ),
        android: (
          <View style={styles.circleWrapper}>
            <TouchableNativeFeedback onPress={onPress}>
              {button}
            </TouchableNativeFeedback>
          </View>
        ),
      })}

      {/* TouchableNativeFeedback(물결)은 안드로이드에서만 가능하기 때문에, 조건부렌더링 해야 함. */}
      {/* {Platform.OS === 'ios' ? (
        // plus버튼을 눌렀을 때 투명도를 조정함
        <TouchableOpacity activeOpacity={0.5}>
          <View style={styles.bottonStyle}>
            <Image source={require('../assets/images/add_white.png')} />
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.circleWrapper}>
          <TouchableNativeFeedback>
            <View style={styles.bottonStyle}>
              <Image source={require('../assets/images/add_white.png')} />
            </View>
          </TouchableNativeFeedback>
        </View>
      )} */}
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    backgroundColor: 'white',
    height: 64,
    // padding 왼쪽 오른쪽 패딩값을 줌
    // => 터치 영역을 늘리기 위해/ 설정하지 않는다면, 영역을 정확히 터치해야 입력할 수 있음.
    paddingHorizontal: 16,

    borderColor: '#bdbdbd',
    borderTopWidth: 1,
    borderbottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    flex: 1,
    fontSize: 16,
    paddingVertical: 8,
  },
  bottonStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    backgroundColor: '#ddc0f2',
    borderRadius: 24,
  },
  circleWrapper: {
    overflow: 'hidden',
    borderRadius: 24,
  },
});

export default AddTodo;
