import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import GreetingImage from '../../../assets/images/greeting-image.png';
import Logo from '../../../assets/images/sumbangin-logo-smaller.png';

import CustomButton from '../../components/CustomButton';

const GreetingScreen = () => {
  const {height} = useWindowDimensions();

  const MasukFunc = () => {
    console.warn('Masuk Pencet');
  };
  const RegisterFunc = () => {
    console.warn('Register Pencet');
  };
  return (
    <View style={styles.root}>
      <Image
        source={Logo}
        resizeMode="contain"
        style={[styles.logo, {height: height * 0.3}]}
      />
      <Image
        source={GreetingImage}
        style={styles.greetImage}
        resizeMode="contain"
      />
      <Text style={styles.textGreeting}>
        Berbagi menjadi lebih mudah dan santai dari rumah
      </Text>
      <CustomButton
        text="Masuk"
        onPress={MasukFunc}
        bgColor="#FFFFFF"
        fgColor="#65BCBF"
      />
      <CustomButton
        text="Register"
        onPress={RegisterFunc}
        bgColor="#65BCBF"
        fgColor="#FFFFFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 35,
  },
  logo: {
    maxWidth: 250,
    maxHeight: 200,
  },
  greetImage: {
    maxWidth: 600,
    maxHeight: 300,
  },
  textGreeting: {
    fontSize: 16,
    width: '70%',
    textAlign: 'center',
    color: 'white',
    paddingVertical: 20,
    fontFamily: 'Varela-Regular',
  },
});

export default GreetingScreen;
