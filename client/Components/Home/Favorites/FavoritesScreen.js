/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { View, ScrollView, Text, ImageBackground, StyleSheet } from 'react-native';
import Swiper from 'react-native-swiper/src';

import favData from './favData.js';

// const [realData, setRealData] = useState([]);

const list = () => {
  // axios.post('http://ec2-3-134-108-148.us-east-2.compute.amazonaws.com:3001/users/login',
  // {username, password})
  // .then(({data}) => {
  //     setFavData(data);
  //   }
  // })
  // .catch();
  const data = favData || realData;
  return data.map((fav) => {
    
    return (
      <View style={styles.container} key={fav.id}>
        {fav.image &&
      (<ImageBackground
        style={styles.image}
        source={{uri: fav.image}}
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
              {fav.description}
            </Text>
            <Text></Text>
          </ScrollView>
        </Swiper>
      </View>
    );
  });
};

const FavoritesScreen = ({navigation, route}) => {
  return (
    <Swiper>
      {list()}
    </Swiper>
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
