/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import Lottie from "lottie-react-native"
import macaco from "./macaco.json";
import money from "./money.json";

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
      {/* <Lottie autosize source={macaco} autoPlay loop resizeMode={"contain"} /> */}
      <Lottie autosize source={money} autoPlay loop resizeMode={"contain"} />

    </SafeAreaView>
    );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
    borderWidth: 1,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
