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

// const funFacts = bodies.moon.discoveredBy.map((fact)=>{
//   <Text>{fact}</Text>
// })


class MoonInfo extends Component {
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
      <Text style={{...Font, ...styles.header}}>The Moon</Text>
      <Text style={{...Font, ...styles.headerTwo}}>Luna</Text>
      <Text/>
      <Text style={{...Font, ...styles.basicFacts}}>  Latin: {bodies.moon.latin}    Diameter: {bodies.moon.diameter}       Moon: Yes  </Text>
      <View style={styles.container}>
        <View style={styles.btnTextHolder}>
          <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout} style={styles.Btn}>
            <Text style={{...Font, ...styles.headerThree}}>More Info...</Text>
          </TouchableOpacity>
          <View style={{ height: this.state.expanded ? null : 0, overflow: 'hidden' }}>
          <Text></Text>
            <Text style={{...Font, ...styles.headerThree}}>Special Characteristics:</Text>
            <Text style={{...Font, ...styles.textX}}>
            Moonquakes: A phenomonon that is exactly what it sounds like, caused by the Earth's gravitational pull
            </Text>
          <Text></Text>
            <Text style={{...Font, ...styles.headerThree}}>Fun Facts:</Text>
            <Text style={{...Font, ...styles.textX}}>
            Always faces Earth from the same direction
            </Text>
            <Text style={{...Font, ...styles.textX}}>
            Controls the tides on Earth
            </Text>
            <Text style={{...Font, ...styles.textX}}>
            Slowly drifting away from Earth
            </Text>
            <Text></Text>
            <Text style={{...Font, ...styles.headerThree}}>Discovered By:</Text>
            <Text style={{...Font, ...styles.text}}>
              {bodies.moon.discoveredBy}
            </Text>
            <Text style={{...Font, ...styles.headerThree}}>Name Origin:</Text>
            <Text style={{...Font, ...styles.text}}>
              {bodies.moon.nameOrigin}
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

export default MoonInfo;

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
