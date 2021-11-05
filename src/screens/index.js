import React from 'react';
import {View, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HeaderBackground} from '@react-navigation/elements';
import Icon from 'react-native-vector-icons/FontAwesome5';
//screen
import HomeScreen from './HomeScreen/HomeScreen';
import Profile from './ProfileScreen/ProfileScreen';
import CreatePost from './CreatePostScreen/CreatePostScreen';

const Tab = createBottomTabNavigator();

const index = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerTitleAlign: 'center',
        headerTintColor: 'white',
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: 'white',
          position: 'absolute',
          bottom: 20,
          marginHorizontal: 20,
          height: 70,
          borderRadius: 10,
          shadowColor: '#000',
          shadowOpacity: 0.06,
          shadowOffset: {
            width: '10',
            height: 10,
          },
        },
      }}>
      <Tab.Screen
        name="HomeMenu"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused, color, style}) => (
            <View
              style={
                focused
                  ? [styles.iconContainer, {backgroundColor: '#082032'}]
                  : [styles.iconContainer]
              }>
              <Icon
                name="home"
                size={20}
                color={focused ? '#FFF' : '#082032'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CreatePost"
        component={CreatePost}
        options={{
          tabBarStyle: {
            display: 'none',
          },
          tabBarIcon: ({focused, color, style}) => (
            <View
              style={
                focused
                  ? [styles.iconContainer, {backgroundColor: '#082032'}]
                  : [styles.iconContainer]
              }>
              <Icon
                name="plus-circle"
                size={20}
                color={focused ? '#FFF' : '#082032'}
              />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, style}) => (
            <View
              style={
                focused
                  ? [styles.iconContainer, {backgroundColor: '#082032'}]
                  : [styles.iconContainer]
              }>
              <Icon
                name="user-alt"
                size={20}
                color={focused ? '#FFF' : '#082032'}
              />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});

export default index;
