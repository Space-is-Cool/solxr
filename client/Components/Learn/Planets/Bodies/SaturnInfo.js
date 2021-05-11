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
import { FontContext } from '../../../Root/Context';


class SaturnInfo extends Component {
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
      <FontContext.Consumer>
      {({ Font }) => (
      <ScrollView>
      {/* <View style={styles.line}/> */}
      <View style={styles.main}>
      <View style={styles.hud}>
      <Text style={{...Font, ...styles.header}}>{bodies.saturn.name}</Text>
      <Text style={{...Font, ...styles.headerTwo}}>{bodies.saturn.AKA}</Text>
      <Text/>
      <Text style={{...Font, ...styles.basicFacts}}>  Latin: {bodies.saturn.latin}    Diameter: {bodies.saturn.diameter}     Moons:{bodies.saturn.moons.length} </Text>
      <View style={styles.container}>
        <View style={styles.btnTextHolder}>
          <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={styles.Btn}>
            <Text style={{...Font, ...styles.headerThree}}>More Info...</Text>
          </TouchableOpacity>
          <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
          <Text></Text>
          <Text style={{...Font, ...styles.headerThree}}>Special Characteristics:</Text>
            <Text style={{...Font, ...styles.textX}}>
            Look at those rings!   
            </Text>
            <Text style={{...Font, ...styles.textX}}>
            Large Hexagonal storm at north pole, we still don't know for sure what causes it  
            </Text>
          <Text></Text>
            <Text style={{...Font, ...styles.headerThree}}>Fun Facts:</Text>
            <Text style={{...Font, ...styles.textX}}>
            Four spacecraft visiters: Pioneer 11, Voyager 1 and 2, and the Cassini-Huygens
            </Text>
            <Text style={{...Font,...styles.textX}}>
            The most distant planet that can be seen with the naked eye
            </Text>
            <Text style={{...Font, ...styles.textX}}>
            Most Moons
            </Text>
            <Text></Text>
            <Text style={{...Font, ...styles.headerThree}}>Discovered By:</Text>
            <Text style={{...Font, ...styles.text}}>
              {bodies.saturn.discoveredBy}
            </Text>
            <Text style={{...Font, ...styles.headerThree}}>Name Origin:</Text>
            <Text style={{...Font, ...styles.text}}>
              {bodies.saturn.nameOrigin}
            </Text>
          </View>
        </View>
      </View>
      </View>
      </View>
      
      </ScrollView>
        )}
        </FontContext.Consumer>
    )
  }
}

export default SaturnInfo;

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
    fontSize: 14
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
