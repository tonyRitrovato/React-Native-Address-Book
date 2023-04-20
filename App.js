
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import List from './screens/List';
import Add from './screens/Add';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name = "Rubrica" component={List}/>
                <Stack.Screen name = "Aggiungi" component = {Add}/>
            </Stack.Navigator>
        </NavigationContainer>
  );
}