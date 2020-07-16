import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

const Wow = (prop) => {
  const { text } = prop;
  return (
    <>
      <View style={styles.header}></View>
      <Text>
        {text}
      </Text>
    </>
  )
};

const styles = StyleSheet.create({
  header: {
    height: 30,
    backgroundColor: 'rgb(255,20,255)'
  }
})


export default Wow;
