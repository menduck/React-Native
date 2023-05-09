import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

function Empty() {
  return (
    <View style={styles.block}>
      <Image source={require('../assets/images/dd.jpg')} style={styles.image} />
      <Text style={styles.description}>이제 나랑 놀자</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontSize: 24,
    color: '#9e9e9e',
  },
  image: {
    width: 240,
    height: 240,
    marginBottom: 16,
    borderRadius: 120,
  },
});

export default Empty;
