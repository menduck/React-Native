import React, {useContext} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import LogContext from '../context/LogContext';

function FeedsScreen() {
  const {text, setText} = useContext(LogContext);
  return (
    <View style={styles.block}>
      {/* Render Props */}
      {/* <Box>{value => <Text>{value}</Text>}</Box> */}
      {/* <LogContext.Consumer>{value => <Text>{value}</Text>}</LogContext.Consumer> */}
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder="텍스트를 입력하세요."
        style={styles.input}
      />
    </View>
  );
}
function Box({children}) {
  return <View style={styles.box}>{children('요로요로잇')}</View>;
}
const styles = StyleSheet.create({
  input: {
    padding: 16,
    backgroundColor: 'white',
  },

  block: {},
  // box: {
  //   borderWidth: 2,
  //   padding: 16,
  //   borderColor: 'red',
  //   marginBottom: 16,
  // },
});

export default FeedsScreen;
