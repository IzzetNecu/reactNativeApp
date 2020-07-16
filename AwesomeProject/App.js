/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';

import LifeCounter from './Components/LifeCounter.js';
import Wow from './Components/Wow.js';
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <>
      <Wow></Wow>
      <View style={styles.flexBetween}>
        <LifeCounter />
        <LifeCounter />
      </View>

    </>
  );
};

const styles = StyleSheet.create({
  flexBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  }
});

export default App;
