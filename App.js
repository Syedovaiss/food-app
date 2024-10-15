
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import DetailsScreen from './src/screens/DetailsScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Search" component={SearchScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>

  );
}

export default App;