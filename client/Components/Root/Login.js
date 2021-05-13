/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {useState, useEffect} from 'react';
import {Text, Button, View, TextInput, StyleSheet} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as AppleAuthentication from 'expo-apple-authentication';
import axios from 'axios';
import { useIsFocused } from '@react-navigation/native';
import Sound from 'react-native-sound';
import {sound1} from './soundOne.js';
import { MusicContext } from '../Root/Context';


const LoginModal = ({ navigation }) => {

  const [prompt, setPrompt] = useState('Please Sign In or Create an Account');
  const [username, onChangeUsername] = useState('');
  const [password, onChangePassword] = useState('');
  const [user, setUser] = useState(null);
  const [signedIn, setSignedIn] = useState(false);

  const onSignIn = () => {
    axios.post('http://ec2-3-134-108-148.us-east-2.compute.amazonaws.com:3001/users/login',
      {username, password})
      .then(({data}) => {
        if (data === 'invalid password') {
          setPrompt(data);
        } else {
          setSignedIn(true);
          setUser(data);
          storeUser(data);
          onChangeUsername('');
          onChangePassword('');
        }
      })
      .catch(() => {
        setPrompt('Invalid username');
      });
  };

  const onSignUp = () => {
    axios.post('http://ec2-3-134-108-148.us-east-2.compute.amazonaws.com:3001/users/create',
      {username, password})
      .then(onSignIn)
      .catch(err => console.warn(err));
  };

  const getUser = async () => {
    try {
      const storedUser = await AsyncStorage.getItem('user');
      if (storedUser) {
        setSignedIn(true);
        const user = JSON.parse(storedUser);
        setUser(user);
      }
    } catch (e) {
      console.log('there was an error', e);
    }
  };

  const storeUser = async (user) => {
    try {
      await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
      console.log('there was an error', e);
    }
  };

  // const sound1 = new Sound(require('./assets/SolXRloop.wav'),
  //   (error, sound) => {
  //     if (error) {
  //       alert('error' + error.message);
  //       return;
  //     }
  //   });
    
  const playMusic = async () => {
    const storedUser = await AsyncStorage.getItem('user');
    const { music } = JSON.parse(storedUser);
    if (music === true) {
      sound1.play(() => {
        sound1.release();
      });
      sound1.setNumberOfLoops(-1);
      sound1.setVolume(0.5);
    }
  };

  const isFocused = useIsFocused();

  useEffect(() => {
    setSignedIn(false);
    setUser(null);
    getUser();
  }, [isFocused]);

  return (
    <MusicContext.Consumer>{ ({ music }) => (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {signedIn
          ? 
          <>
            <Text style={{ fontSize: 30 }}>Hello {user && user.username}</Text>
            <Text></Text>
            <Text style={{ fontSize: 30 }}>Welcome to solxr</Text>
            <Text></Text>
            <Button onPress={() => { navigation.navigate('index'); playMusic(music); }} title="Enter" />
            <Text></Text>
            <AppleAuthentication.AppleAuthenticationButton
              buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
              buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
              cornerRadius={5}
              style={{ width: 200, height: 44 }}
              onPress={async () => {
                try {
                  const credential = await AppleAuthentication.signInAsync({
                    requestedScopes: [
                      AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                      AppleAuthentication.AppleAuthenticationScope.EMAIL,
                    ],
                  });
                  console.log('whats the value of credneitallll', credential);
                  // signed in
                } catch (e) {
                  if (e.code === 'ERR_CANCELED') {
                    console.log('whats e here', e);
                    // handle that the user canceled the sign-in flow
                  } else {
                    console.log('was there an other error?', e);
                    // handle other errors
                  }
                }
              }}
            />

          </>
          : 
          <>
            <Text>{prompt}</Text>
            <TextInput
              style={styles.input}
              onChangeText={onChangeUsername}
              value={username}
              defaultValue="password"
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangePassword}
              value={password}
              secureTextEntry={true}
              defaultValue="password"
            />
            <Button
              onPress={onSignIn}
              title="Sign In"
            />
            <Text></Text>
            <Button
              onPress={onSignUp}
              title="Sign Up"
            />
          </>
        }
      </View>
    )
    }</MusicContext.Consumer>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    width: '50%',
    margin: 12,
    borderWidth: 1,
  },
});

export default LoginModal;
