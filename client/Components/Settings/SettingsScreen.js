/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MusicContext, SoundOneContext } from '../Root/Context';
import axios from 'axios';
import Sound from 'react-native-sound';
import LoginModal from '../Root/Login.js';
import {sound1} from '../Root/soundOne.js';

import { Switch } from 'react-native-switch';

const SettingsScreen = ({navigation, route}) => {
  const [toggle, setToggle] = useState({
    accessibility: false,
    music: true,
    theme: false
  });

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      const {accessibility, music, theme} = JSON.parse(storedUser);
      setToggle({accessibility, music, theme});
    } catch (e) {
      console.log('error', e);
    }
  };
  // // TODO: Implement music fully based on music boolean
  const musicToggle = () => {
    if (toggle.music === true) {
      sound1.stop();
    } else {
      sound1.play();
    }
  
  };


  const modUser = async (prop) => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      const user = JSON.parse(storedUser);
      user[prop] = !user[prop];
      await AsyncStorage.setItem('user', JSON.stringify(user));
      setToggle(() => {
        const copy = Object.assign({}, toggle);
        copy[prop] = !copy[prop];
        return copy;
      });
    } catch (e) {
      console.log('there was an error', e);
    }
  };

  const clearStorage = async () => {
    try {
      await AsyncStorage.removeItem('user');
    } catch (e) {
      console.log(e);
    }
    console.log('Done.');
  };

  const saveToServer = async () => {
    const storedUser = await AsyncStorage.getItem('user');
    const user = JSON.parse(storedUser);
    axios.put('http://ec2-3-134-108-148.us-east-2.compute.amazonaws.com:3001/users/update', user)
      .then(() => console.log('success!!!'))
      .catch(err => console.log('fail', err));
  };

  return (
    <MusicContext.Consumer>{ ({ music, setMusic }) => (
      <View style={styles.container}>
        <Text style={styles.value}>Settings</Text>
        <Text style={styles.value}>Readable Font</Text>
        <Switch
          style={styles.switch}
          circleActiveColor={'#9ee7ff'}
          circleInActiveColor={'#f4f3f4'}
          backgroundActive={'rgb(7, 40, 82)'}
          backgroundInactive={'rgb(7, 40, 82)'}
          switchLeftPx={5}
          switchRightPx={5} 
          onValueChange={() => modUser('accessibility')}
          value={toggle.accessibility}
        />
        <Text style={styles.value}>Music</Text>
        <Switch
          style={styles.switch}
          circleActiveColor={'#9ee7ff'}
          circleInActiveColor={'#f4f3f4'}
          backgroundActive={'rgb(7, 40, 82)'}
          backgroundInactive={'rgb(7, 40, 82)'}
          switchLeftPx={5}
          switchRightPx={5} 
          onValueChange={() => { setMusic(!music); musicToggle(music); modUser('music'); }}
          value={toggle.music}
        />
        <Text style={styles.value}>NASA Theme</Text>
        <Switch
          style={styles.switch}
          circleActiveColor={'#9ee7ff'}
          circleInActiveColor={'#f4f3f4'}
          backgroundActive={'rgb(7, 40, 82)'}
          backgroundInactive={'rgb(7, 40, 82)'}
          switchLeftPx={5}
          switchRightPx={5} 
          onValueChange={() => modUser('theme')}
          value={toggle.theme}
        />
        <AwesomeButton
          style={styles.button}
          // progress
          onPress={saveToServer}
        >
      Save Settings
        </AwesomeButton>
        <AwesomeButton
          style={styles.button}
          progress
          onPress={() => {
            clearStorage();
            navigation.navigate('login');
          }}
        >
      Log Out
        </AwesomeButton>
      </View>
    )
    }</MusicContext.Consumer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  value: {
    fontSize: 24,
    marginVertical: 12
  },
  button: {
    marginTop: '20%'
  }
});

export default SettingsScreen;
