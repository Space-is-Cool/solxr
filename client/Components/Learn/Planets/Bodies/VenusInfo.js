/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  LayoutAnimation, Platform, UIManager, TouchableOpacity
} from 'react-native';
import bodies from '../data/bodiesData.js';

class VenusInfo extends Component {
  constructor() {
    super();

    this.state = { expanded: false }
  }

  changeLayout = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded: !this.state.expanded });
  }

  render() {
    return ( 
      <ScrollView>
      {/* <View style={styles.line}/> */}
      <View style={styles.main}>
      <View style={styles.hud}>
      <Text style={styles.header}>{bodies.venus.name}</Text>
      <Text style={styles.headerTwo}>{bodies.venus.AKA}</Text>
      <Text/>
      <Text style={styles.basicFacts}>  Latin: {bodies.venus.latin}    Diameter: {bodies.venus.diameter}       Moons: 0  </Text>
      <View style={styles.container}>
        <View style={styles.btnTextHolder}>
          <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={styles.Btn}>
            <Text style={styles.headerThree}>More Info...</Text>
          </TouchableOpacity>
          <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
          <Text></Text>
          <Text></Text>
            <Text style={styles.headerThree}>Special Characteristics:</Text>
            <Text style={styles.textX}>
            Extremely high pressure atmosphere (92 times that of Earth!)
            </Text>
            <Text style={styles.textX}>
            Maat Mons: A massive shield volcano. It is the second-highest mountain and the highest volcano on the planet
            </Text>
          <Text></Text>
            <Text style={styles.headerThree}>Fun Facts:</Text>
            <Text style={styles.textX}>
            Second most spherical object in the solar system, just after the Sun
            </Text>
            <Text style={styles.textX}>
            Only planet that rotates clockwise
            </Text>
            <Text style={styles.textX}>
            Orbital path is almost a perfect circle
            </Text>
            <Text></Text>
            <Text style={styles.headerThree}>Discovered By:</Text>
            <Text style={styles.text}>
              {bodies.venus.discoveredBy}
            </Text>
            <Text style={styles.headerThree}>Name Origin:</Text>
            <Text style={styles.text}>
              {bodies.venus.nameOrigin}
            </Text>
          </View>
        </View>
      </View>
      </View>
      </View>
      
      </ScrollView>
    )
  }
}

export default VenusInfo;

const styles = StyleSheet.create({
  main:{
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopWidth: 3,
    borderBottomWidth: 3,
    borderColor: "#0047ba",
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
    fontWeight: 'bold'
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
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
  },

  text: {
    fontSize: 17,
    color: 'white',
    padding: 10
  },
  textX: {
    fontSize: 17,
    color: 'white',
    padding: 10,
    textAlign: 'center',
    
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
