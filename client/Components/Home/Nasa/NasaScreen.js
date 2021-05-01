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
    backgroundColor: '#072852'
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
    backgroundColor: '#072852'
  },
  headerTwo: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 20,
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

const NasaScreen = ({navigation, route}) => {

  const [IoTD, setIoTD] = useState(null);
  const [title, setTitle] = useState(null);
  const [descript, setDescript] = useState(null);
  // const [expanded, setExpanded] = useState(false);




  useEffect(() => {
    getNasa();
  }, []);

  const getNasa = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=gZClpAd2dIP9dwXkbP5wMsqVMfT1ek5YMnEo7kep')
      .then(({data}) => {
        console.log(data.url);
        setIoTD(data.url);
        setTitle(data.title);
        setDescript(data.explanation);
      });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to solXR!</Text>
      {IoTD && 
      (<ImageBackground
        style={styles.image}
        source={{uri: IoTD}} 
      />)
      }
 
      <Swiper horizontal={false}>
        <View>
          <Text></Text>
          <Text style={styles.headerTwo}>{title}</Text>
          <Text></Text>
          <Text></Text>
          <Text style={styles.headerThree}>More Info Below...</Text>
        </View>
        <ScrollView>
          <Text></Text>
          <Text style={styles.textTwo}>
            {descript}
          </Text>
          <Text></Text>
        </ScrollView>
      </Swiper>
    </View>


  );
};

export default NasaScreen;


