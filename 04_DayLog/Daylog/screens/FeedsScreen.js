import React, {useContext, useState} from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import LogContext from '../context/LogContext';
import FloatingWriteButton from '../compontents/FloatingWriteButton';
import FeedList from '../compontents/FeedList';

function FeedsScreen() {
  const {text, setText} = useContext(LogContext);
  const {logs} = useContext(LogContext);
  const [hidden, setHidden] = useState(false);

  const onScrolledToBottom = isBottom => {
    if (hidden != isBottom) {
      setHidden(isBottom);
    }
  };
  console.log(JSON.stringify(logs, null, 2));
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
      <FeedList logs={logs} onScrolledToBottom={onScrolledToBottom} />
      <FloatingWriteButton hidden={hidden} />
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

  block: {
    flex: 1,
  },
  // box: {
  //   borderWidth: 2,
  //   padding: 16,
  //   borderColor: 'red',
  //   marginBottom: 16,
  // },
});

export default FeedsScreen;
