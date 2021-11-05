import React, {useState} from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

import {Input, Text, SocialIcon} from 'react-native-elements';

const SignUpScreen = ({navigation}) => {
  const [firstName, setfirstName] = useState('');

  const Register = () => {
    console.warn('Register');
  };
  const SignInGoogle = () => {
    console.warn('Google');
  };
  const onPressAble = () => {
    navigation.navigate('SignIn');
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <Text style={styles.textCreate}>Create Account</Text>
        <Input placeholder="Nama pertama" containerStyle={{width: '90%'}} />
        <Input placeholder="Nama terakhir" containerStyle={{width: '90%'}} />
        <Input placeholder="No Handphone" containerStyle={{width: '90%'}} />
        <Input placeholder="Email" containerStyle={{width: '90%'}} />
        <Input placeholder="Password" containerStyle={{width: '90%'}} />
        <CustomButton
          text="Daftar"
          onPress={Register}
          bgColor="#082032"
          fgColor="white"
          style={styles.custBut}
        />
        <SocialIcon
          title="Google Sign In"
          button
          type="google"
          style={styles.googleButton}
        />
        <Text onPress={onPressAble} style={styles.text}>
          Punya Akun? Login
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    backgroundColor: '#F9FBFC',
    paddingTop: 60,
    paddingBottom: 20,
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
  text: {
    fontWeight: 'bold',
    color: '#082032',
    fontSize: 18,
    marginVertical: 5,
    padding: 15,
  },
  registerButton: {
    padding: 20,
  },
  googleButton: {
    width: '85%',
  },
});

export default SignUpScreen;
