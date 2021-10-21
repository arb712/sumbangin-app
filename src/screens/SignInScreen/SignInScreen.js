import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import Logo from '../../../assets/images/sumbangin-logo-smaller-dark.png';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignInScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = () => {
    console.warn('Sign In');
  };
  const onForgotPasswordPressed = () => {
    console.warn('Forgot Password');
  };
  const onSignInWithGoogle = () => {
    console.warn('Google');
  };
  const onClickRegister = () => {
    console.warn('Go to Register');
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
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />
        <CustomButton
          text="Forgot Password?"
          onPress={onForgotPasswordPressed}
          type="TERTIARY"
          fgColor="#082032"
        />
        <CustomButton
          text="Masuk"
          onPress={onSignInPressed}
          bgColor="#082032"
          fgColor="white"
        />
        <CustomButton
          text="Sign In With Google"
          onPress={onSignInWithGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Don't have an account? Create One"
          onPress={onClickRegister}
          type="TERTIARY"
          fgColor="#082032"
        />
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
});

export default SignInScreen;
