import React, {useEffect, useState} from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0'
  }
});

const NasaScreen = ({navigation, route}) => {

  const [IoTD, setIoTD] = useState(null);




  useEffect(() => {
    getNasa();
  }, []);

  const getNasa = () => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=gZClpAd2dIP9dwXkbP5wMsqVMfT1ek5YMnEo7kep')
    .then(({data}) => {
      console.log(data.url);
      setIoTD(data.url);

  });
  };

  return (
    <View style={styles.container}>
      {IoTD &&
      (<ImageBackground
        style={styles.image}
        source={{uri: IoTD}}
      />)
      }
    </View>
  );
};

export default NasaScreen;
