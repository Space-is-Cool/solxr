/* eslint-disable no-unused-vars */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import bodies from '../data/bodiesData.js';

class SunInfo extends Component {


  render() {
    return ( 
      <ScrollView>
        <View style={styles.container}>
          <Text style={styles.text}>{bodies.sun.name}</Text>
        </View>
      </ScrollView>
    );
  }
}

export default SunInfo;

const styles = StyleSheet.create({
  contentContainerStyle: {
    paddingTop: 30,
    paddingBottom: 20,
    backgroundColor: '#115268'
  },
  container: {
    flex: 1,
    // backgroundColor: 'blue',
    // opacity: 0.5
  },
  firstHeaderContainer: {
    backgroundColor: '#115268',
  },
  firstHeader: {
    marginHorizontal: 10,
    backgroundColor: '#bcb5ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 15,
    height: 50,
  },
  customContent: {
    backgroundColor: '#8ac7db',
    height: 30
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'Titillium Web',
  
  },
  textTwo: {
  }
});


// class SunInfo extends Component {
//   renderFirstHeader() {
//     return (
//       <View style={styles.firstHeader}>
//         <Text>{bodies.sun.name}</Text>
//       </View>
//     );
//   }
//   renderSecondHeader() {
//     return (
//       <View style={styles.customContent}>
//         <Text>Fun Facts!</Text>
//       </View>
//     );
//   }
//   render() {
//     return (
//       <ScrollView
//         style={styles.container}
//         contentContainerStyle={styles.contentContainerStyle}
//       >
//         <Panel
//           style={styles.firstHeaderContainer}
//           header={this.renderFirstHeader}
//         >
//           <Text style={styles.text}>
//           AKA: {bodies.sun.AKA}       Gravity: {bodies.sun.gravity}     Latin: {bodies.sun.latin}      Diamter: {bodies.sun.diameter}
//           </Text>
//         </Panel>
//         <Panel
//           backgroundColor="#8ac7db"
//           header="General"
//           onPress={() => console.log('hi from on press')}
//         >
//           Composition: {bodies.sun.composition}      
//           Surface Temperature: {bodies.sun.surfaceTemp}
//           Special Characteristics: {bodies.sun.specialChars.map((char)=>{
//             return char;
//           })}
//         </Panel>
//         <Panel
//           header="Fun Facts!"
//           onPress={() => console.log('hi from on press')}
//         >
//           {bodies.sun.funFacts.map((fact)=>{
//             return fact;
//           })}
//         </Panel>
//         <Panel header="Name Origin">
//           <View>
//             {bodies.sun.nameOrigin}
//           </View>
//         </Panel>
//       </ScrollView>
//     );
//   }
// }
// export default SunInfo;
