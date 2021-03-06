import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';

import useCachedResources from './hooks/useCachedResources';
import LinkingConfiguration from './navigation/LinkingConfiguration';

import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Register from './screens/Register';
import Address from './screens/Register/Address';

const Stack = createStackNavigator();

export default function App(props) {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <View style={styles.container}>
        {Platform.OS === 'android' && (
          <StatusBar backgroundColor='#12e2eb' barStyle='dark-content' />
        )}
        <NavigationContainer linking={LinkingConfiguration}>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
            initialRouteName='Login'
          >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Dashboard' component={Dashboard} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Address' component={Address} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
