import React, {useContext, useEffect, useRef, useState} from 'react';
import {Animated, Button, StyleSheet, Text, View} from 'react-native';
import LogContext from '../context/LogContext';

function FadeInAndOut() {
  const animation = useRef(new Animated.Value(1)).current;
  // 상태 값에 따라 에니메이션 적용
  const [hidden, setHidden] = useState(false);
  useEffect(() => {
    Animated.timing(animation, {
      toValue: hidden ? 0 : 1,
      useNativeDriver: true,
    }).start();
  }, [hidden, animation]);

  return (
    <View>
      <Animated.View style={[styles.rectangle, {opacity: animation}]} />
      {/* 버튼 두 개로 적용하기 */}
      {/* <Button
        title="FadeIn"
        onPress={() => {
          Animated.timing(animation, {
            toValue: 1,
            useNativeDriver: true,
          }).start();
        }}
      />
      <Button
        title="FadeOut"
        onPress={() => {
          Animated.timing(animation, {
            toValue: 0,
            useNativeDriver: true,
          }).start();
        }}
      /> */}
      <Button
        title="Toggle"
        onPress={() => {
          setHidden(!hidden);
        }}
      />
    </View>
  );
}
function CalendarScreen() {
  const {text} = useContext(LogContext);
  return (
    <View style={styles.block}>
      {/* <Text style={styles.text}>Text: {text}</Text> */}
      <FadeInAndOut />
    </View>
  );
}

const styles = StyleSheet.create({
  block: {},
  text: {
    padding: 16,
    fontSize: 24,
  },
  rectangle: {width: 100, height: 100, backgroundColor: 'black'},
});

export default CalendarScreen;
