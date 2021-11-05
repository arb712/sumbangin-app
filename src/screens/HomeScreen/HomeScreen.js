import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  useWindowDimensions,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import CustomInput from '../../components/CustomInput';

import {Icon, Button, SearchBar} from 'react-native-elements';
import IconFA from 'react-native-vector-icons/FontAwesome5';

import ExploreImg from '../../../assets/images/explore.jpg';

const HomeScreen = () => {
  const [search, setSearch] = useState('');
  const {height} = useWindowDimensions();

  const Start = () => {
    console.warn('start');
  };

  return (
    <>
      <ScrollView showVerticalScrollIndicator={false}>
        <View style={styles.root}>
          <View>
            <Text style={styles.home}>Home</Text>
          </View>
          <View style={styles.search}>
            {/* <CustomInput
              placeholder="Search"
              value={search}
              setValue={setSearch}
              type="SEARCH"
            /> */}
            <SearchBar
              placeholder="Cari sesuatu..."
              onChangeText={setSearch}
              value={search}
              containerStyle={styles.searchBar}
              inputStyle={{
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              inputContainerStyle={{
                backgroundColor: 'white',
              }}
              searchIcon={{color: '#082032', size: 30}}
            />
          </View>
          <View style={styles.sectionBanner}>
            <Text style={styles.textBanner}>Start New Sumbangin</Text>
            <TouchableOpacity onPress={Start}>
              <View style={styles.button}>
                <Text style={styles.buttonText}>Start Now</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonList}>
            <View>
              <Button
                icon={
                  <Icon
                    name="socks"
                    type="font-awesome-5"
                    size={35}
                    color="#FFF"
                  />
                }
                buttonStyle={{
                  backgroundColor: '#082032',
                  padding: 15,
                  marginHorizontal: 5,
                  marginVertical: 10,
                  borderRadius: 10,
                }}
              />
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                Clothes
              </Text>
            </View>
            <View>
              <Button
                icon={
                  <Icon
                    name="heartbeat"
                    type="font-awesome-5"
                    size={35}
                    color="#FFF"
                  />
                }
                buttonStyle={{
                  backgroundColor: '#082032',
                  padding: 15,
                  marginHorizontal: 5,
                  marginVertical: 10,
                  borderRadius: 10,
                }}
              />
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                Medical
              </Text>
            </View>
            <View>
              <Button
                icon={
                  <Icon
                    name="book-open"
                    type="font-awesome-5"
                    size={35}
                    color="#FFF"
                  />
                }
                buttonStyle={{
                  backgroundColor: '#082032',
                  padding: 15,
                  marginHorizontal: 5,
                  marginVertical: 10,
                  borderRadius: 10,
                }}
              />
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                Education
              </Text>
            </View>
            <View style={{}}>
              <Button
                icon={
                  <Icon
                    name="microsoft"
                    type="font-awesome-5"
                    size={35}
                    color="#FFF"
                  />
                }
                buttonStyle={{
                  backgroundColor: '#082032',
                  padding: 15,
                  marginHorizontal: 5,
                  marginVertical: 10,
                  borderRadius: 10,
                }}
              />
              <Text style={{textAlign: 'center', fontWeight: 'bold'}}>
                Lainnya
              </Text>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                width: '70%',
                marginTop: 10,
              }}>
              <Text
                style={{
                  marginRight: 'auto',
                  fontWeight: '400',
                  fontSize: 18,
                  fontFamily: 'Varela-Regular',
                  color: '#082032',
                }}>
                Explore
              </Text>
              <Pressable
                onPress={() => {
                  console.warn('Explore pressed');
                }}>
                <IconFA
                  name="ellipsis-h"
                  size={20}
                  color={'#082032'}
                  style={{marginLeft: 'auto'}}
                />
              </Pressable>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Image
                source={ExploreImg}
                resizeMode="cover"
                style={{
                  height: height * 0.3,
                  width: '100%',
                  height: 150,
                  borderRadius: 10,
                }}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
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
    fontWeight: '400',
  },
  search: {
    marginTop: 40,
    alignItems: 'center',
    width: '85%',
  },
  searchBar: {
    backgroundColor: 'white',
    width: '85%',
    borderColor: '#082032',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionBanner: {
    backgroundColor: '#082032',
    flexDirection: 'row',
    width: '70%',
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 15,
  },
  textBanner: {
    color: 'white',
    fontSize: 20,
    width: '50%',
  },
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 10,
    backgroundColor: '#FFF',
  },
  buttonText: {
    color: '#082032',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },
  buttonList: {
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    width: '85%',
  },
  exploreImg: {
    borderRadius: 10,
  },
});

export default HomeScreen;
