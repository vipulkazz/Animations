import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import DropDown from '../Components/DropDown/DropDown';
import Routes from '../Components/Routes/Routes';
const Stack = createStackNavigator();

export default () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={'Routes'}>
          <>
            <Stack.Screen name="Routes" component={Routes} />
            <Stack.Screen name="DropDown" component={DropDown} />
          </>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};
