/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState} from 'react';
import { View, ScrollView, Text, ImageBackground, Image, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
import axios from 'axios';
import Swiper from 'react-native-swiper/src';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'rgb(7, 40, 82)'
  },
  image: {
    flex: 5,
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
    padding: '2%',
    backgroundColor: 'rgba(7, 40, 82, 0.4)'

  },
  headerTwo: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 20,
    fontStyle: 'italic',
    paddingTop: '2%',
    backgroundColor: 'rgba(7, 40, 82, 0.4)'
  },
  headerThree: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 14,
    backgroundColor: 'rgba(7, 40, 82, 0.4)',
    paddingBottom: '2%',

  },
  textTwo: {
    fontSize: 17,
    color: 'white',
    padding: 10,
    backgroundColor: 'rgba(7, 40, 82, 0.6)'
  },
});

const NasaScreen = ({navigation, route}) => {

  const [IoTD, setIoTD] = useState(null);
  const [title, setTitle] = useState(null);
  const [descript, setDescript] = useState(null);
  const [infoCard, setInfoCard] = useState(false);
  // const [expanded, setExpanded] = useState(false);




  useEffect(() => {
    getNasa();
  }, []);

  const getNasa = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=gZClpAd2dIP9dwXkbP5wMsqVMfT1ek5YMnEo7kep')
      .then(({data}) => {
        setIoTD(data.url);
        setTitle(data.title);
        setDescript(data.explanation);
      });
  };


  
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{uri: IoTD}}>
        <Text style={styles.header}>Welcome to solXR!</Text>
        <Swiper
          horizontal={false}
          loop={false}
          showsPagination={false}
        >
          <View>
            <Text style={styles.headerTwo}>{title}</Text>
            <Text style={styles.headerThree}>Swipe up for more info</Text>
          </View>
          <ScrollView>
            <Text></Text>
            <Text style={styles.textTwo}>
              {descript}
            </Text>
            <Text></Text>
          </ScrollView>
        </Swiper>
      </ImageBackground>
    </View>


  );
};

export default NasaScreen;


