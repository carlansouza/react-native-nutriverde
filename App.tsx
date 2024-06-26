// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from './src/screens/types';

import TabNavigator from './src/components/TabNavigator';
import LoginScreen from './src/components/LoginScreen';
import ProductSearchScreen from './src/components/ProductSearchScreen';
import HomeScreen from './src/components/HomeScreen2';

const Stack = createNativeStackNavigator<RootStackParamList>();


function App() {

  return (
    // <NavigationContainer >
    //   <Stack.Navigator initialRouteName="Home"
    //                    screenOptions={{
    //                    headerShown: false}}
    //   >
    //     <Stack.Screen 
    //                    name="Home" 
    //                    component={HomeScreen}  
    //     />
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //     <Stack.Screen name="ProductSearchScreen" component={ProductSearchScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <NavigationContainer>
    //   <Stack.Navigator  initialRouteName={loggedIn ? 'TabNavigator' : 'Home'}
    //                     screenOptions={{ headerShown: false }}>
    //     <Stack.Screen name="Home" component={HomeScreen} />
    //     <Stack.Screen name="Login" component={LoginScreen} />
    //     <Stack.Screen name="ProductSearchScreen" component={ProductSearchScreen} />
    //     <Stack.Screen name="TabNavigator" component={TabNavigator} />
    //   </Stack.Navigator>
    // </NavigationContainer>

    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default App;