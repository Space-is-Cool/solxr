/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import moment from 'moment';

import eventsData from './eventsData.js';

const list = () => {
  return eventsData.map((event) => {
    const date = moment(event.dtstamp);
    const now = moment();
    if (date > now) {
      return (
        <View key={event.uid} style={styles.mainTwo}>
          <Text></Text>
          <Text style={styles.headerThree}>{event.summary}</Text>
          <Text style={styles.textX}>{event.description.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '')}</Text>
          <Text style={styles.text}>{moment(event.dtstamp).format('LLLL')}</Text>
          <Text></Text>
        </View>
      );
    }
  });
};
const ExpScreen = ({navigation, route}) => {
  return (
    <View style={styles.main}>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <View>
        <Text style={styles.header}>Upcoming Astral Events!</Text>
      </View>
      <Text></Text>
      <ScrollView>
        <Text></Text>
        {list()}
        <Text></Text>
      </ScrollView>
    </View>
  );
};

export default ExpScreen;

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#072852',
  },
  mainTwo: {
    width: 325,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: .5,
    borderBottomWidth: 1,
    borderColor: '#0047ba',
    backgroundColor: '#00374a',
  },
  mainThree: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#072852',
  },
  hud: {
    paddingTop: 30,
    paddingBottom: 35,
    backgroundColor: '#00374a'

  },
  header: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 30,
    fontWeight: 'bold',
    backgroundColor: '#072852',
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
  image: {
    width: 35,
    height: 35
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    justifyContent: 'center',
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

  btnText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20
  },

  btnTextHolder: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.5)'
  },

  Btn: {
    padding: 10,
    backgroundColor: 'rgba(0,0,0,0.5)'
  }
});
