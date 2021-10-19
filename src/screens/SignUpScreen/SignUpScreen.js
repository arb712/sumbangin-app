import React, {useState} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const SignUpScreen = () => {
  const [firstName, setfirstName] = useState('');

  const Register = () => {
    console.warn('Register');
  };
  const SignInGoogle = () => {
    console.warn('Register');
  };
  const onPressAble = () => {
    console.warn('Pressable');
  };
  return (
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
      <CustomButton text="Register" onPress={Register} style={styles.custBut} />
      <CustomButton
        text="Sign In With Google"
        onPress={SignInGoogle}
        bgColor="#FAE9EA"
        fgColor="#DD4D44"
      />
      <CustomButton
        text="Have an account? Sign In"
        onPress={SignInGoogle}
        bdColor="#65BCBF"
        type="TERTIARY"
      />
      <Pressable onPress={onPressAble} style={styles.pressable}>
        <Text>Pressable</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  custBut: {
    marginTop: 50,
  },
  textCreate: {
    color: 'white',
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
