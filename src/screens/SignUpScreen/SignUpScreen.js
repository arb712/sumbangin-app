import React, {useState} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignUpScreen = () => {
  const [firstName, setfirstName] = useState('');

  const Register = () => {
    console.warn('Register');
  };
  const SignInGoogle = () => {
    console.warn('Google');
  };
  const onPressAble = () => {
    console.warn('Pressable');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.textCreate}>Create Account</Text>
        <CustomInput
          placeholder="First Name"
          value={firstName}
          setValue={setfirstName}
        />
        <CustomInput
          placeholder="Last Name"
          value={firstName}
          setValue={setfirstName}
        />
        <CustomInput
          placeholder="No Handphone"
          value={firstName}
          setValue={setfirstName}
        />
        <CustomInput
          placeholder="Email"
          value={firstName}
          setValue={setfirstName}
        />
        <CustomInput
          placeholder="Password"
          value={firstName}
          setValue={setfirstName}
          secureTextEntry={true}
        />
        <CustomButton
          text="Register"
          onPress={Register}
          bgColor="#082032"
          fgColor="white"
          style={styles.custBut}
        />
        <CustomButton
          text="Sign In With Google"
          onPress={SignInGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <CustomButton
          text="Have an account? Sign In"
          onPress={SignInGoogle}
          fgColor="#082032"
          type="TERTIARY"
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#F9FBFC',
    marginTop: 60,
  },
  custBut: {
    marginTop: 50,
  },
  textCreate: {
    color: '#082032',
    fontFamily: 'Varela-Regular',
    fontWeight: 'bold',
    fontSize: 35,
    padding: 20,
  },
  registerButton: {
    padding: 20,
  },
});

export default SignUpScreen;
