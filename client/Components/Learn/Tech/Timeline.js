/* eslint-disable no-dupe-else-if */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,

} from 'react-native';
import { WebView } from 'react-native-webview';
import data from './data/techData.js';
import Timeline from 'react-native-timeline-flatlist';
///cahnged
export default class TechTimeLine extends Component {
  constructor() {
    super();
    this.onEventPress = this.onEventPress.bind(this);
    this.renderSelected = this.renderSelected.bind(this);
    this.renderDetail = this.renderDetail.bind(this);

    this.data = data;
    this.state = {selected: null};
  }

  onEventPress(data) {
    this.setState({selected: data});
  }
  //this.state.selected.title
  renderSelected() {
    if (this.state.selected) {
      return <WebView mediaPlaybackRequiresUserAction={true}
        style={styles.containerVideo}
        source={{uri: this.state.selected.uri }} />; 
    } else if (this.state.selected) {
      return <Text>hello</Text>;
    }

  }

  renderDetail(rowData) {
    const title = <Text style={[styles.title]}>{rowData.title}</Text>;
    let desc = null;
    if (rowData.description && rowData.imageUrl) {
      desc = (
        <View style={styles.descriptionContainer}>
          <Image source={{uri: rowData.imageUrl}} style={styles.image}/>
          <Text style={[styles.textDescription]}>{rowData.description}</Text>
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        {title}
        {desc}
      </View>
    );
  }

  render() {
    const image = { uri: 'https://i.pinimg.com/originals/0b/06/39/0b06397a3199bee4a5922ee4488ebf5a.jpg' };
    return (
      <ImageBackground style= { styles.backgroundImage } source={image}>
        {/* <SafeAreaView> */}
        {/* <ScrollView > */}
        <View style={styles.container}>
          {this.renderSelected()}
          <Timeline
            style={styles.list}
            data={this.data}
            circleSize={20}
            circleColor='rgba(0,0,0,0)'
            lineColor='rgb(45,156,219)'
            timeContainerStyle={{minWidth: 52, marginTop: -5}}
            timeStyle={{textAlign: 'center', backgroundColor: '#ff9797', color: 'white', padding: 5, borderRadius: 13}}
            descriptionStyle={{color: 'gray'}}
            options={{
              style: {paddingTop: 5}
            }}
            innerCircle={'icon'}
            onEventPress={this.onEventPress}
            renderDetail={this.renderDetail}
          />
        </View>
        {/* </ScrollView> */}
        {/* </SafeAreaView> */}
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 65,
  },
  containerVideo: {
    flex: 1,
    padding: 0,
    margin: 0
  },
  list: {
    flex: 1,
    marginTop: 90,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white'
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 50
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25
  },
  textDescription: {
    marginLeft: 10,
    color: 'white'
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    // alignItems: 'center',
  },
  // scrollView: {
  //   backgroundColor: 'pink',
  //   marginHorizontal: 20,
  // },

});
