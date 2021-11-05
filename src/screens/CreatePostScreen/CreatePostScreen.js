import React, {useState} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {Input, Text} from 'react-native-elements';
import {CommonActions} from '@react-navigation/native';
import SelectBox from 'react-native-multi-selectbox';
import {xorBy} from 'lodash';
//Icon
import Icon from 'react-native-vector-icons/MaterialIcons';
import IconFA from 'react-native-vector-icons/FontAwesome5';

const CreatePostScreen = ({navigation}) => {
  const [selectedTeams, setSelectedTeams] = useState([]);
  const K_OPTIONS = [
    {
      item: 'Juventus',
      id: 'JUVE',
    },
    {
      item: 'Real Madrid',
      id: 'RM',
    },
    {
      item: 'Barcelona',
      id: 'BR',
    },
    {
      item: 'PSG',
      id: 'PSG',
    },
    {
      item: 'FC Bayern Munich',
      id: 'FBM',
    },
    {
      item: 'Manchester United FC',
      id: 'MUN',
    },
    {
      item: 'Manchester City FC',
      id: 'MCI',
    },
    {
      item: 'Everton FC',
      id: 'EVE',
    },
    {
      item: 'Tottenham Hotspur FC',
      id: 'TOT',
    },
    {
      item: 'Chelsea FC',
      id: 'CHE',
    },
    {
      item: 'Liverpool FC',
      id: 'LIV',
    },
    {
      item: 'Arsenal FC',
      id: 'ARS',
    },

    {
      item: 'Leicester City FC',
      id: 'LEI',
    },
  ];
  return (
    <View>
      <View style={styles.root}>
        <View
          style={{
            marginVertical: 5,
            flexDirection: 'row',
          }}>
          <Pressable
            style={{marginVertical: 20}}
            onPress={() => {
              navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{name: 'HomeMenu'}],
                }),
              );
            }}>
            <IconFA name="chevron-left" size={30} color={'#082032'} />
          </Pressable>
        </View>
        <Text style={styles.title}>Rincian Post</Text>
        <Text style={styles.subTitle}>
          Rincian informasi post yang dapat diberikan.
        </Text>
      </View>
      <View style={{marginHorizontal: 20, marginTop: 25}}>
        <Input
          placeholder="Title Post"
          containerStyle={{width: '95%'}}
          leftIcon={<Icon name="edit" size={20} color="black" />}
        />
        <Input
          placeholder="Deskripsi"
          containerStyle={{width: '95%'}}
          multiline={true}
          leftIcon={<Icon name="email" size={20} color="black" />}
        />
        <SelectBox
          label="Pilih Kategori"
          inputPlaceholder="Kategori"
          options={K_OPTIONS}
          selectedValues={selectedTeams}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
          containerStyle={{
            width: '90%',
            marginHorizontal: 10,
            borderColor: '#082032',
            marginBottom: 20,
          }}
          toggleIconColor="#082032"
          searchIconColor="#082032"
          arrowIconColor="#082032"
          labelStyle={{
            color: '#082032',
            fontWeight: 'bold',
            width: '90%',
            marginHorizontal: 10,
          }}
          inputFilterContainerStyle={{
            width: '90%',
            marginHorizontal: 10,
          }}
          optionContainerStyle={{
            width: '90%',
            marginHorizontal: 10,
          }}
          multiOptionContainerStyle={{backgroundColor: '#082032'}}
        />
        <SelectBox
          label="Pilih Lokasi"
          inputPlaceholder="Lokasi"
          options={K_OPTIONS}
          selectedValues={selectedTeams}
          onMultiSelect={onMultiChange()}
          onTapClose={onMultiChange()}
          isMulti
          containerStyle={{
            width: '90%',
            marginHorizontal: 10,
            borderColor: '#082032',
            marginBottom: 20,
          }}
          toggleIconColor="#082032"
          searchIconColor="#082032"
          arrowIconColor="#082032"
          labelStyle={{
            color: '#082032',
            fontWeight: 'bold',
            width: '90%',
            marginHorizontal: 10,
          }}
          inputFilterContainerStyle={{
            width: '90%',
            marginHorizontal: 10,
          }}
          optionContainerStyle={{
            width: '90%',
            marginHorizontal: 10,
          }}
          multiOptionContainerStyle={{backgroundColor: '#082032'}}
        />
      </View>
      <View style={styles.root2}>
        <Text style={styles.subTitle}>Upload foto disini</Text>
      </View>
    </View>
  );
  function onMultiChange() {
    return item => setSelectedTeams(xorBy(selectedTeams, [item], 'id'));
  }
};

const styles = StyleSheet.create({
  root: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  root2: {
    marginHorizontal: 30,
    marginTop: 10,
  },
  title: {
    fontFamily: 'Varela-Regular',
    fontSize: 25,
    fontWeight: 'bold',
  },
  subTitle: {
    fontFamily: 'Varela-Regular',
    fontSize: 15,
    fontWeight: '300',
    textTransform: 'capitalize',
  },
});

export default CreatePostScreen;
