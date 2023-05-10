import React, {useEffect} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

function DetailScreen({route, navigation}) {
  // 라우터 파라미터 받아온 id 값 타이틀 텍스트 변경
  useEffect(() => {
    navigation.setOptions({title: `상세 정보 - ${route.params.id}`});
  }, [navigation, route.params.id]);
  return (
    <View style={styles.block}>
      <Text style={styles.text}>id: {route.params.id}</Text>
      <View style={styles.buttons}>
        <Button
          title="다음"
          // navigate는 이동할 화면이 현재 화면과 같으면 화면 전환X, 파라미터만 변경
          // push는 새로운 화면이 스택에 쌓이면서 화면이 전환, 뒤로가기 버튼 누르면 이전 detail화면,
          onPress={() => navigation.push('Detail', {id: route.params.id + 1})}
        />
        <Button title="뒤로가기" onPress={() => navigation.pop()} />
        <Button title="처음으로" onPress={() => navigation.popToTop()} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 48,
  },
  buttons: {
    flexDirection: 'row',
  },
});

export default DetailScreen;
