import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './Pages/Home';
import Check from './Pages/Check';
import Shop from './Pages/Shop';
import "@fontsource/poppins";


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Shop" component={Shop} />
        <Stack.Screen name="Check" component={Check} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
