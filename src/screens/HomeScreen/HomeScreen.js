import React, {useState} from 'react';
import {View, Text, StyleSheet, SectionList} from 'react-native';
import CustomInput from '../../components/CustomInput';
import CustomButton from '../../components/CustomButton';

const HomeScreen = () => {
  const [search, setSearch] = useState('');

  const Start = () => {
    console.warn('start');
  };

  return (
    <View style={styles.root}>
      <View>
        <Text style={styles.home}>Home</Text>
      </View>
      <View style={styles.search}>
        <CustomInput
          placeholder="Search"
          value={search}
          setValue={setSearch}
          type="SEARCH"
        />
      </View>
      <View style={styles.sectionBanner}>
        <Text style={{color: 'white'}}>Start New Sumbangin</Text>
        <CustomButton
          text="Start Now"
          onPress={Start}
          bgColor="#FFF"
          fgColor="#082032"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
  },
  home: {
    fontSize: 20,
    fontFamily: 'Varela-Regular',
    color: '#082032',
    marginTop: 50,
    lineHeight: 26,
  },
  search: {
    marginTop: 50,
    alignItems: 'center',
    width: '85%',
  },
  sectionBanner: {
    flex: 2,
    backgroundColor: '#082032',
    width: '85%',
    height: 400,
  },
});

export default HomeScreen;
