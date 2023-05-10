import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import DetailScreen from './screens/DetailScreen';
import {Text, View, TouchableOpacity} from 'react-native';
import HeaderlessScreen from './screens/HeaderScreen';

// 기본 네비게이션
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      {/* initialRouteName 초기 화면의 이름 */}
      <Stack.Navigator initialRouteName="Home">
        {/* 헤더 없는 화면 */}
        <Stack.Screen
          name="Headerless"
          component={HeaderlessScreen}
          options={{headerShown: false}}
        />
        {/* name의 값은 어떤 화면인지 조회할 때 사용 */}
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          // 타이틀 텍스트 변경 방법1.
          options={{
            title: '홈',
            headerStyle: {backgroundColor: '#29b6f6'},
            headerTintColor: '#ffffff',
            headerTitleStyle: {fontWeight: 'bold', fontSize: 20},
          }}
        />
        <Stack.Screen
          name="Detail"
          component={DetailScreen}
          // 라우터 파라미터 받아온 id 값 타이틀 텍스트 변경
          // options={({route}) => ({title: `상세 정보 - ${route.params.id}`})}
          options={{
            // 이전 버튼인 좌측 화살표 아이콘 숨김
            headerBackVisible: false,
            headerLeft: ({onPress}) => (
              <TouchableOpacity onPress={onPress}>
                <Text>Left</Text>
              </TouchableOpacity>
            ),
            headerTitle: ({children}) => (
              <View>
                {/* TODO: 6장 */}
                <Text>{children}</Text>
              </View>
            ),
            headerRight: () => (
              <View>
                <Text>Right</Text>
              </View>
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
