/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Switch } from 'react-native';
import AwesomeButton from 'react-native-really-awesome-button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {FontContext} from '../Root/Context.js';


const SettingsScreen = ({navigation, route}) => {
  const [toggle, setToggle] = useState({
    accessibility: false,
    music: false,
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
  // const sound1 = new Sound(require('./assets/SolXRloop.wav'),
  //   (error, sound) => {
  //     if (error) {
  //       alert('error' + error.message);
  //       return;
  //     }
  //     if (toggle.music === true) {
  //       sound1.play(() => {
  //         sound1.release();
  //       });
  //       sound1.setNumberOfLoops(-1);
  //       sound1.setVolume(0.5);
  //     } else if (toggle.music === false) {
  //       sound1.stop();
  //     }
  //   });


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
    <View style={styles.container}>
      <Text style={styles.value}>Settings</Text>
      <Text style={styles.value}>Readable Font</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={toggle.accessibility
          ? '#f5dd4b'
          : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => modUser('accessibility')}
        value={toggle.accessibility}
      />
      <Text style={styles.value}>Music</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={toggle.music
          ? '#f5dd4b'
          : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={() => modUser('music')}
        value={toggle.music}
      />
      <Text style={styles.value}>NASA Theme</Text>
      <Switch
        trackColor={{ false: '#767577', true: '#81b0ff' }}
        thumbColor={toggle.theme
          ? '#f5dd4b'
          : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
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
