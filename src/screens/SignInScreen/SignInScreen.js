import React, {useState} from 'react';
import {
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/sumbangin-logo-smaller-dark.png';
import {CommonActions} from '@react-navigation/native';
import CustomButton from '../../components/CustomButton';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {Input, Text, SocialIcon} from 'react-native-elements';

const SignInScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'BottomNav'}],
      }),
    );
  };
  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
  };
  const onSignInWithGoogle = () => {
    console.warn('Google');
  };
  const onClickRegister = () => {
    navigation.navigate('SignUp');
  };

  const {height} = useWindowDimensions();
  return (
    <ScrollView showVerticalScrollIndicator={false}>
      <View style={styles.root}>
        <Image
          source={Logo}
          style={[styles.logo, {height: height * 0.3}]}
          resizeMode="contain"
        />
        <Input
          placeholder="Email"
          containerStyle={{width: '90%'}}
          leftIcon={<Icon name="email" size={20} color="black" />}
        />
        <Input
          placeholder="Password"
          containerStyle={{width: '90%'}}
          leftIcon={<Icon name="lock" size={20} color="black" />}
          secureTextEntry={true}
        />
        <Text onPress={onForgotPasswordPressed} style={styles.textLink}>
          Lupa Password?
        </Text>
        <CustomButton
          text="Masuk"
          onPress={onSignInPressed}
          bgColor="#082032"
          fgColor="white"
        />
        <SocialIcon
          title="Google Sign In"
          button
          type="google"
          style={styles.googleButton}
          onPress={onSignInWithGoogle}
        />
        <Text onPress={onClickRegister} style={styles.textLink}>
          Tidak punya akun? Daftar
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    marginTop: 60,
  },
  logo: {
    maxWidth: 250,
    maxHeight: 200,
  },
  textLink: {
    fontWeight: 'bold',
    color: '#082032',
    fontSize: 18,
    marginVertical: 5,
    padding: 15,
  },
  googleButton: {
    width: '85%',
  },
});

export default SignInScreen;
