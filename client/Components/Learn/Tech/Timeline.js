import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { WebView } from "react-native-webview";
import data from './data/techData.js';
import Doge from './assets/doge.png';
import Timeline from 'react-native-timeline-flatlist';
///cahnged
export default class TechTimeLine extends Component {
  constructor() {
    super();
    this.onEventPress = this.onEventPress.bind(this);
    this.renderSelected = this.renderSelected.bind(this);
    this.renderDetail = this.renderDetail.bind(this);

    this.data = [
      {
        time: data[1957].year,
        title: data[1957].tech,
        description: data[1957].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'data:image/jpeg;base64,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',
        uri: 'https://www.youtube.com/embed/g2WaJdflqT0'
      },
      {
        time: data[1958].year,
        title: data[1958].tech,
        description: data[1958].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hbainFFVbJSS3_bCD1eLrDpEn8hyqRiM_w&usqp=CAU',
        uri: 'https://www.youtube.com/embed/5iNMa8HyCnw'
      },
      {
        time: data[1959].year,
        title: data[1959].tech,
        description: data[1959].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5eLNtL3B9Qbzz2LqB01596Zx_ZqcJoawLDQ&usqp=CAU',
        uri: 'https://www.youtube.com/embed/7zR26e504uI'
      },
      {
        time: data[1960].year,
        title: data[1960].tech,
        description: data[1960].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYpDjEEqUd_jjE-kgoAxqLZFXKW_wK4fjP-g&usqp=CAU',
        uri: 'https://www.youtube.com/embed/gF-y4HDRO5s'
      },
      {
        time: data[1961].year,
        title: data[1961].tech,
        description: data[1961].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'https://www.edn.com/wp-content/uploads/media-1178521-venera-1-spacecraft.jpg',
        uri: 'https://www.youtube.com/embed/7tRmE-yfJn4'
      },
      {
        time: data[1962].year,
        title: data[1962].tech,
        description: data[1962].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'https://airandspace.si.edu/webimages/collections/full/A19751410000cp02.jpg',
        uri: 'https://www.youtube.com/embed/9LfJLLRcQP4'
      },
      {
        time: data[1963].year,
        title: data[1963].tech,
        description: data[1963].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/LiftingBodies.jpg/450px-LiftingBodies.jpg',
        uri: 'https://www.youtube.com/embed/_YOuGoNjLRw'
      },
      {
        time: data[1964].year,
        title: data[1964].tech,
        description: data[1964].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Vostok_6_capsule_on_display%2C_2016.jpg',
        uri: 'https://www.youtube.com/embed/CWECFrhBzBI'
      },
      {
        time: data[1965].year,
        title: data[1965].tech,
        description: data[1965].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'https://d3ecqbn6etsqar.cloudfront.net/bS145aAFnZt9vgPqsJJzTedhSxI=/0x720/smart/234252.jpg',
        uri: 'https://www.youtube.com/embed/tiiP6vMWrkw'
      },
      {
        time: data[1968].year,
        title: data[1968].tech,
        description: data[1968].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_Prod/84/932/History_Speeches_5023_Apollo_1_Tragedy_SF_still_624x352.jpg',
        uri: 'https://www.youtube.com/embed/phTNJro7tHw'
      },

    ];
    this.state = {selected: null};
  }

  onEventPress(data) {
    this.setState({selected: data});
  }
//this.state.selected.title
  renderSelected(rowData) {
    if (this.state.selected) { return  <WebView  mediaPlaybackRequiresUserAction={true}
    style={styles.containerVideo}
    source={{uri: this.state.selected.uri }} /> } else if (this.state.selected){
      return <Text></Text>;
    }

  }

  renderDetail(rowData, sectionID, rowID) {
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
