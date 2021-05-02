import React from 'react';
import { View, Text, Button } from 'react-native';
import { WebView } from 'react-native-webview';


const EventsScreen = ({navigation, route}) => {
  return (
    <View  >
       <Button
            title="Back to Learn"
            onPress={() => onPress('')}
          />
      <Text>LOGIN WITH GOOGLE</Text>
    </View>
  );
};

export default EventsScreen;
