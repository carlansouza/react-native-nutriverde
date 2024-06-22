// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import LoginScreen from './src/components/LoginScreen';
import { RootStackParamList } from './src/screens/types';
import ProductSearchScreen from './src/components/ProductSearchScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer >
      <Stack.Navigator initialRouteName="Home"
                       screenOptions={{
                       headerShown: false}}
      >
        <Stack.Screen 
                       name="Home" 
                       component={HomeScreen}  
        />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ProductSearchScreen" component={ProductSearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
