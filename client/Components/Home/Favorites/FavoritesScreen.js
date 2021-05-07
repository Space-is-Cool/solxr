/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text, ImageBackground, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper/src';

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import favData from './favData.js';

const FavoritesScreen = ({navigation, route}) => {
const [realData, setRealData] = useState([]);

  useEffect(() => {
    dataFetch();
  }, []);

const dataFetch = async () => {
    const storedUser = await AsyncStorage.getItem('user');
    const user = JSON.parse(storedUser);
    axios.get(`http://localhost:3001/users/iotd/?user_id=3`)
    .then(({data}) => {
      setRealData(data)
    });
};

const list = () => {
  if(realData.length){
  return realData.map((fav) => {
    console.log('FAVE', fav);
    return (
      <View style={styles.container} key={fav.id}>
        {fav.url &&
      (<ImageBackground
        style={styles.image}
        source={{uri: fav.url}}
        />)
        }

        <Swiper horizontal={false}>
          <View>
            <Text></Text>
            <Text style={styles.headerTwo}>{fav.title}</Text>
            <Text></Text>
            <Text></Text>
            <Text style={styles.headerThree}>Swipe for more info</Text>
          </View>
          <ScrollView>
            <Text></Text>
            <Text style={styles.textTwo}>
              {fav.explanation}
            </Text>
            <Text></Text>
          </ScrollView>
        </Swiper>
      </View>
    );
  });
}
};

  return (
    <View>
    <Swiper>
      {realData.length && list()}
    </Swiper>
    </View>
  );
};

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#072852'
  },
  image: {
    flex: 3,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0'
  },
  header: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 20,
    fontWeight: 'bold',
    backgroundColor: '#072852'
  },
  headerTwo: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 25,
    fontStyle: 'italic',
    backgroundColor: '#072852'
  },
  headerThree: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 14,
    backgroundColor: '#072852'
  },
  textTwo: {
    fontSize: 17,
    color: 'white',
    padding: 10,
    backgroundColor: '#072852'
  },
});
