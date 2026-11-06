import React from 'react';
import { View, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { MenuProvider } from './context/MenuContext';
import SplashScreen from './components/SplashScreen';
import HomeScreen from './screens/HomeScreen';
import ManageMenuScreen from './screens/ManageMenuScreen';
import FilterScreen from './screens/FilterScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <MenuProvider>
      <NavigationContainer>
        <Stack.Navigator 
        screenOptions={{
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                source={require('./img/logo.png')}
                style={{ width: 35, height: 35, marginRight: 8 }}
              />
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#333' }}>
                Christoffel Restaurant
              </Text>
            </View>
          ),
          headerStyle: { backgroundColor: '#f8f8f8' },
          headerTintColor: '#333',
        }}>
        <Stack.Screen //Splash screen to load first before getting directed to Home screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />

          <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Menu Manager" component={ManageMenuScreen} />
        <Stack.Screen name="Dish List" component={FilterScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </MenuProvider>
  );
}
