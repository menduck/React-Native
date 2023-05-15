import React, {useContext, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import WriteHeader from '../compontents/WriteHeader';
import {StyleSheet} from 'react-native';
import WriteEditor from '../compontents/WriteEditor';
import {useNavigation} from '@react-navigation/native';
import LogContext from '../context/LogContext';

function WriteScreen() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const navigation = useNavigation();

  const {onCreate} = useContext(LogContext);
  const onSave = () => {
    onCreate({
      title,
      body,
      date: new Date().toISOString(),
    });
    // 저장 후 이전 화면 되돌아가기
    navigation.pop();
  };
  return (
    <SafeAreaView style={styles.block}>
      <WriteHeader onSave={onSave} />
      <WriteEditor
        title={title}
        body={body}
        onChangeTitle={setTitle}
        onChangeBody={setBody}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default WriteScreen;
