import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Button

} from 'react-native';
import { WebView } from 'react-native-webview';
import data from '../data/techData.js';
import Timeline from 'react-native-timeline-flatlist';
import AwesomeButton from "react-native-really-awesome-button";


export default class TechTimeLine extends Component {
  constructor() {
    super();
    this.onEventPress = this.onEventPress.bind(this);
    this.renderSelected = this.renderSelected.bind(this);
    this.renderDetail = this.renderDetail.bind(this);

    this.data = data.filter(data => data.timeId >= 31);
    this.state = {selected: null};
  }

  onEventPress(data) {
    this.setState({selected: data});
  }


  renderSelected() {
    if (this.state.selected) {
      return <WebView mediaPlaybackRequiresUserAction={true}
        style={styles.containerVideo}
        source={{uri: this.state.selected.uri }} />;
    } else if (this.state.selected) {
      return <Text>hello</Text>;
    }

  }

  renderDetail(data) {
    const { imageUrl, description, title } = data
    const title2 = <Text style={[styles.title]}>{title}</Text>;
    let desc = null;
    if (data) {
      desc = (
        <View style={styles.descriptionContainer}>
          <Image source={{uri: imageUrl}} style={styles.image}/>
          <Text style={[styles.textDescription]}>{ description}</Text>
        </View>
      );
    }

    return (
      <View style={{flex: 1}}>
        {title2}
        {desc}
        <View style={styles.button}>
          <View style={styles.buttonContainer}>
            <AwesomeButton
        style={styles.buttonContainer}
        onPress={() => {this.setState({selected: data,})
            }}
            >
              Video
            </AwesomeButton>
            </View>
            <View style={styles.buttonContainer}>
            <AwesomeButton
                style={styles.buttonContainer}
              onPress={() => {this.setState({selected: false,})
              }}
            >
              Exit Video
            </AwesomeButton >
            </View>
          </View>
      </View>
    );
  }

  render() {
    const image = { uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnMn8OXLbXV-Bvi9fRvQhVVkH2VVzjctF7mw&usqp=CAU' };
    return (
      <ImageBackground style= { styles.backgroundImage } source={image} imageStyle=
      {{opacity: 0.6}}>
        <View style={styles.container}>
      <Text style={styles.header}>2000s</Text>
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
            // onEventPress={this.onEventPress}
            renderDetail={this.renderDetail}
          />
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  buttonContainer: {
    flex: 1,
  },
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
    color: "#FFFFFF",
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    color: '#9ee7ff',
    fontSize: 30,
    fontWeight: 'bold'
  },

});