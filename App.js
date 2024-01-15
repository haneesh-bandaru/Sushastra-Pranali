import React from "react";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailsScreen from "./screens/DetailsScreen";
import QuestionsScreen from "./screens/QuestionsScreen";
import HomeScreen from "./screens/HomeScreen";
import ThankYou from "./screens/ThankYou";

const Stack = createStackNavigator();


export default function App() {
  const theme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "#3498db",
      accent: "#f1c40f",
      text:"#cfbcff",
      background:"#381E72",
    },
  };

  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Questions">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Details" component={DetailsScreen} />
          <Stack.Screen name="Questions" component={QuestionsScreen} />
          <Stack.Screen name="ThankYou" component={ThankYou} />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}