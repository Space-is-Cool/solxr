import React, {useState} from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, ScrollView } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center'
  },
  text: {
    color: 'white',
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000a0'
  }
});

const SunScreen = ({navigation, route}) => {

  //launches a single planet on render
  //

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Text!!!!</Text>
      <ImageBackground
        style={styles.image}
        source={require('../assets/sun.png')}
      />
    </View>
  );
};

export default SunScreen;

// /* eslint-disable no-unused-vars */
// /* eslint-disable react/prop-types */
// import React, {useState} from 'react';
// import { View, Text, ImageBackground, Image, StyleSheet} from 'react-native';
// import bodies from '../data/bodiesData.js';
// import SunInfo from './sunInfo';
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     flexDirection: 'column', 
//     backgroundColor: 'black'
//   },
//   image: {
//     flex: 1,
//     justifyContent: 'center',
//   },
//   text: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     backgroundColor: '#000000a0'
//   }
// });
// const SunScreen = ({navigation, route}) => {
//   //launches a single planet on render
//   //
//   return (
//     <>
//       <View style={styles.container}>
//         <ImageBackground
//           style={styles.image}
//           source={require('../assets/sun.png')} />
//       </View>
//       <SunInfo/>
//     </>
//   );
// };
// export default SunScreen;
