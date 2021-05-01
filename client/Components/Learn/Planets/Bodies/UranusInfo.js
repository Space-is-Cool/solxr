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


class UranusInfo extends Component {
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
      <Text style={styles.header}>{bodies.uranus.name}</Text>
      <Text style={styles.headerTwo}>the Sideways Planet</Text>
      <Text/>
      <Text style={styles.basicFacts}>  Latin: {bodies.uranus.latin}    Diameter: {bodies.uranus.diameter}       Moons: {bodies.uranus.moons.length} </Text>
      <View style={styles.container}>
        <View style={styles.btnTextHolder}>
          <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={styles.Btn}>
            <Text style={styles.headerThree}>More Info...</Text>
          </TouchableOpacity>
          <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
            <Text></Text>
          <Text style={styles.headerThree}>Special Characteristics:</Text>
            <Text style={styles.textX}>
            It's turned over on its side!
            </Text>
          <Text></Text>
            <Text style={styles.headerThree}>Fun Facts:</Text>
            <Text style={styles.textX}>
            Coldest surface temperature
            </Text>
            <Text style={styles.textX}>
            Most dramatic axial tilt
            </Text>
            <Text style={styles.textX}>
            The only planet other than Earth not named after a Roman God
            </Text>
            <Text style={styles.textX}>
            Funniest name
            </Text>
            <Text></Text>
            <Text style={styles.headerThree}>Discovered By:</Text>
            <Text style={styles.text}>
              {bodies.uranus.discoveredBy}
            </Text>
            <Text style={styles.headerThree}>Name Origin:</Text>
            <Text style={styles.text}>
              {bodies.uranus.nameOrigin}
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

export default UranusInfo;

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
