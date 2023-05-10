import React from 'react';
import {View, Text, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function HeaderlessScreen({navigation}) {
  return (
    // ios는 StatusBar 영역이 겹치기 때문에
    <SafeAreaView>
      <View>
        <Text>Header어디갔냐</Text>
        {/* ios는 헤더가 없으면 뒤로가기가 없으므로 뒤로가기 만듦 */}
        <Button onPress={() => navigation.pop()} title="뒤로가기" />
      </View>
    </SafeAreaView>
  );
}

export default HeaderlessScreen;
