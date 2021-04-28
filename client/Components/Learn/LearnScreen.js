import React, {useState, useEffect} from 'react';
import { View, Text, Button } from 'react-native';
import PlanetsScreen from './Planets/PlanetsScreen.js';

const LearnScreen = ({navigation, route}) => {
  //need to create a selective render of either the planet screen or tech screen based on what user clicks
  //need to add onClick property to an image??? 
  //how do we css the text w/ the image? should we just make an image w/ text baked in?

  const [view, setView] = useState('');
  const onPress = (name) => {
    setView(name);
  };

  const viewSwitcher = (view) => {
    { if (view === '') {
      return (<>
        <Button
          title="Select Planets"
          value={'wow'}
          onPress={() => onPress('planets')}
        />
        <Text>...</Text>
        <Button
          title="Select Tech"
          onPress={() => onPress('tech')}
        />
      </>);
    } else if (view === 'planets') {
      return (
        <>
          <Button
            title="Back to Learn"
            onPress={() => onPress('')}
          />
          <PlanetsScreen/>
        </>
      );

    } else {
      return (
        <>
          <Button
            title="Back to Learn"
            onPress={() => onPress('')}
          />
          <Text>tech screen</Text>
        </>
      ); 
    }
    }
  };

  return (
    <View>
      {viewSwitcher(view)}
    </View>
  );
};

export default LearnScreen;
