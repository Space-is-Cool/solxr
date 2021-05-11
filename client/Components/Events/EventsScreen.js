/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, ScrollView, StyleSheet, ImageBackground, Image } from 'react-native';
import moment from 'moment';
import { IotdContext, FontContext } from '../Root/Context';

import eventsData from './eventsData.js';

const list = () => {
  return eventsData.map((event) => {
    const date = moment(event.dtstamp);
    const now = moment();
    if (date > now) {
      return (
        <FontContext.Consumer>
          {({ Font }) => (
            <View key={event.uid} style={styles.mainTwo}>
              <Text></Text>
              <Text style={{...Font, ...styles.headerThree}}>{event.summary}</Text>
              <Text style={{...Font, ...styles.textX}}>{event.description.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '')}</Text>
              <Text style={{...Font, ...styles.text}}>{moment(event.dtstamp).format('LLLL')}</Text>
              <Text></Text>
            </View>
          )}
        </FontContext.Consumer>
      );
    }
  });
};
const ExpScreen = ({navigation, route}) => {
  return (
    <FontContext.Consumer>
      {({ Font }) => (
        <IotdContext.Consumer>
          {({url}) => {
            return <View style={styles.container}>
              <ImageBackground
                style={styles.image}
                source={{uri: url}}>
                <Text style={{...Font, ...styles.header}}>Upcoming Astral Events!</Text>
                <ScrollView
                  style={styles.scrollview}
                >
                  {list()}
                  <Text></Text>
                </ScrollView>
              </ImageBackground>
            </View>;
          }
          }
        </IotdContext.Consumer>
      )}
    </FontContext.Consumer>
  );
};

export default ExpScreen;

const styles = StyleSheet.create({
  mainTwo: {
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  header: {
    textAlign: 'center',
    paddingTop: '10%',
    paddingBottom: '2%',
    color: '#9ee7ff',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: 'rgba(0, 0, 0, 0.7)'
  },
  headerTwo: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 15,
    fontStyle: 'italic'
  },
  headerThree: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 15,
    fontWeight: 'bold'
  },
  basicFacts: {
    color: '#9ee7ff',
  },
  container: {
    flex: 1,
    fontFamily: 'Baskerville'
  },
  text: {
    fontSize: 14,
    color: 'white',
    padding: 10,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textX: {
    fontSize: 17,
    color: 'white',
    padding: 10,
    textAlign: 'center',
    fontStyle: 'italic'
  },
  image: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  scrollview: {
    textAlign: 'center',
    alignContent: 'center',

  }
});
