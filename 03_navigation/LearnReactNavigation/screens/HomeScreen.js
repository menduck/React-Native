import React, {useEffect} from 'react';
import {Button, View} from 'react-native';

function HomeScreen({navigation}) {
  // 타이틀 텍스트 변경 방법2.
  useEffect(() => {
    navigation.setOptions({title: '홈'});
  }, [navigation]);

  return (
    <View>
      <Button
        title="detail 열기"
        onPress={() => navigation.push('Detail', {id: 1})}
      />
      <Button
        title="detail 열기"
        onPress={() => navigation.push('Detail', {id: 2})}
      />
      <Button
        title="detail 열기"
        onPress={() => navigation.push('Detail', {id: 3})}
      />
      <Button
        title="Headerless  열기"
        onPress={() => navigation.push('Headerless')}
      />
    </View>
  );
}

export default HomeScreen;
