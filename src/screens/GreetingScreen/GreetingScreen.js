import React from 'react';
import {View, Text, StyleSheet, Image, useWindowDimensions} from 'react-native';
import GreetingImage from '../../../assets/images/greeting-image.png';
import Logo from '../../../assets/images/sumbangin-logo-darksmaller.png';

import CustomButton from '../../components/CustomButton';
import {Button} from 'react-native-elements';
const GreetingScreen = ({navigation}) => {
  const {height} = useWindowDimensions();

  const MasukFunc = () => {
    navigation.navigate('SignIn');
  };
  const RegisterFunc = () => {
    navigation.navigate('SignUp');
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
        fgColor="#082032"
      />
      <CustomButton
        text="Daftar"
        onPress={RegisterFunc}
        bgColor="#082032"
        fgColor="#FFFFFF"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#082032',
    paddingTop: 40,
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
