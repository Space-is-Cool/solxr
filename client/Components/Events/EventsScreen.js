import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import eventsData from './eventsData.js';
import moment from 'moment';

const list = () => {
  return eventsData.map((event) => {
    return (
      <View key={event.uid} style={{margin: 10}}>
        <Text>{event.summary}</Text>
        <Text>{event.dtstamp}</Text>
      </View>
    );
  });
};
const ExpScreen = ({navigation, route}) => {
  return (
    <View>
      <Text>Upcoming Astral Events!</Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <Text></Text>
      <ScrollView>
        <Text></Text>
        {list()}
      </ScrollView>
    </View>
  );
};

export default ExpScreen;
