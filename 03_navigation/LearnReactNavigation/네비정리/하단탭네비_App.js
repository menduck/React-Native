import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainScreen from '../screens/MainScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Main"
          component={MainScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// screens/MainScreen.js
// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {Button, Text, View} from 'react-native';
// import Icon from 'react-native-vector-icons/MaterialIcons';

// const Tab = createBottomTabNavigator();

// function HomeScreen({navigation}) {
//   return (
//     <View>
//       <Text>Home</Text>
//       <Button
//         title="Detail 1 열기"
//         onPress={() => navigation.push('Detail', {id: 1})}
//       />
//     </View>
//   );
// }

// function SearchScreen() {
//   return <Text>Search</Text>;
// }
// function NotificationScreen() {
//   return <Text>Notification</Text>;
// }
// function MessageScreen() {
//   return <Text>Message</Text>;
// }
// function MainScreen() {
//   return (
//     <Tab.Navigator initialRouteName="Home">
//       <Tab.Screen
//         name="Home"
//         component={HomeScreen}
//         options={{
//           title: '홈',
//           tabBarIcon: ({color, size}) => (
//             <Icon name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Search"
//         component={SearchScreen}
//         options={{
//           title: '검색',
//           tabBarIcon: ({color, size}) => (
//             <Icon name="search" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Notification"
//         component={NotificationScreen}
//         options={{
//           title: '알림',
//           tabBarIcon: ({color, size}) => (
//             <Icon name="notifications" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Message"
//         component={MessageScreen}
//         options={{
//           title: '메시지',
//           tabBarIcon: ({color, size}) => (
//             <Icon name="message" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// }

// export default MainScreen;
