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
        imageUrl: 'data:image/jpeg;base64,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'
      },
      {
        time: data[1958].year,
        title: data[1958].tech,
        description: data[1958].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-hbainFFVbJSS3_bCD1eLrDpEn8hyqRiM_w&usqp=CAU'
      },
      {
        time: data[1959].year,
        title: data[1959].tech,
        description: data[1959].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5eLNtL3B9Qbzz2LqB01596Zx_ZqcJoawLDQ&usqp=CAU'
      },
      {
        time: data[1960].year,
        title: data[1960].tech,
        description: data[1960].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYpDjEEqUd_jjE-kgoAxqLZFXKW_wK4fjP-g&usqp=CAU'
      },
      {
        time: data[1961].year,
        title: data[1961].tech,
        description: data[1961].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'data:image/jpeg;base64,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'
      },
      {
        time: data[1962].year,
        title: data[1962].tech,
        description: data[1962].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'https://airandspace.si.edu/webimages/collections/full/A19751410000cp02.jpg'
      },
      {
        time: data[1963].year,
        title: data[1963].tech,
        description: data[1963].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/LiftingBodies.jpg/450px-LiftingBodies.jpg'
      },
      {
        time: data[1964].year,
        title: data[1964].tech,
        description: data[1964].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/49/Vostok_6_capsule_on_display%2C_2016.jpg'
      },
      {
        time: data[1965].year,
        title: data[1965].tech,
        description: data[1965].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'https://d3ecqbn6etsqar.cloudfront.net/bS145aAFnZt9vgPqsJJzTedhSxI=/0x720/smart/234252.jpg'
      },
      {
        time: data[1968].year,
        title: data[1968].tech,
        description: data[1968].funFacts,
        icon: require('./assets/doge.png'),
        imageUrl: 'https://cropper.watch.aetnd.com/public-content-aetn.video.aetnd.com/video-thumbnails/AETN-History_Prod/84/932/History_Speeches_5023_Apollo_1_Tragedy_SF_still_624x352.jpg'
      },

    ];
    this.state = {selected: null};
  }

  onEventPress(data) {
    this.setState({selected: data});
  }

  renderSelected() {
    if (this.state.selected) { return <Text style={styles.textDescription}>Selected year: {this.state.selected.title} at {this.state.selected.description}</Text>; }
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
        <SafeAreaView>
          <ScrollView >
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
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 65,
    //backgroundColor: 'white'
    //imageBackground: 'https://wallpaperaccess.com/full/39608.jpg'
  },
  list: {
    flex: 1,
    marginTop: 20,
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
    alignItems: 'center',
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },

});
