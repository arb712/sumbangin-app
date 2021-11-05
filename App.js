import * as React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import SignInScreen from './src/screens/SignInScreen/SignInScreen';
import GreetingScreen from './src/screens/GreetingScreen/GreetingScreen';
import SignUpScreen from './src/screens/SignUpScreen/SignUpScreen';
import BottomNav from './src/screens';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <>
      <SafeAreaView style={styles.root}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name={'Greeting'}
              component={GreetingScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={'SignIn'}
              component={SignInScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={'SignUp'}
              component={SignUpScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen
              name={'BottomNav'}
              component={BottomNav}
              options={{headerShown: false}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default App;
