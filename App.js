import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "./Home";
import Grid from "./Grid";
import List from "./List";
import Item from "./Item";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Back' component={Home} options={{ headerShown: false }} />
        <Stack.Screen name='Item Example' component={Item} options={{ headerShown: false }} />
        <Stack.Screen name='List Example' component={List} options={{ headerShown: false }} />
        <Stack.Screen name='Grid Example' component={Grid} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
