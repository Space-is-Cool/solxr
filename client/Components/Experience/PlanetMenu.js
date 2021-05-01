import DropDownPicker from 'react-native-dropdown-picker';
import React from 'react';


const PlanetMenu = ({changeMaterial}) => (
  <DropDownPicker
    items={[
      {label: 'USA', value: 'sun'},
      {label: 'UK', value: 'sun'},
      {label: 'France', value: 'mercury'}
    ]}
    defaultValue={'sun'}
    containerStyle={{height: 40}}
    style={{backgroundColor: '#fafafa'}}
    itemStyle={{
      justifyContent: 'flex-start'
    }}
    dropDownStyle={{backgroundColor: '#fafafa'}}
    onChangeItem={changeMaterial}
  />
);

export default PlanetMenu;
