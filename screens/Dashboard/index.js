import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer, useNavigation } from '@react-navigation/native';

import HomeScreen from '../Home';
import ProfileScreen from '../Profile';

const Drawer = createDrawerNavigator();

export default function Dashboard() {
  const navigation = useNavigation();
  function logout(){
    navigation.navigate('Login');
  }
  return (
    <NavigationContainer independent>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={HomeScreen} />
        <Drawer.Screen name='Perfil' component={ProfileScreen} />
        <Drawer.Screen name='Logout' component={logout} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
