import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import GreetingScreen from './src/screens/GreetingScreen/GreetingScreen';
import SignnUpScreen from './src/screens/SignUpScreen/SignUpScreen';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <SignnUpScreen />
      {/* <GreetingScreen /> */}
      {/* <SignInScreen /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#65BCBF',
  },
});

export default App;
