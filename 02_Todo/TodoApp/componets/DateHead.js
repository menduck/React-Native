import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

function DateHead({date}) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  const formattend = `${year}년 ${month}월 ${day}일`;

  return (
    <>
      <StatusBar backgroundColor="#ddc0f2" />
      <View style={styles.block}>
        <Text style={styles.dateText}>{formattend}</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  block: {
    padding: 16,
    backgroundColor: '#ddc0f2',
  },
  dateText: {
    fontSize: 24,
    color: 'white',
  },
});

export default DateHead;
