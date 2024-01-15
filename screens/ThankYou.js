import { View, Text } from "react-native";
import React from "react";
import ThankYouImage from "../assets/images/thankyou.png";
import { Image } from "react-native";
import { Button, Card } from "react-native-paper";

export default function ThankYou({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image source={ThankYouImage} style={{ width: 200, height: 200 }} />
      <Button onPress={() => navigation.navigate("Home")} mode="contained">
        <Text>Exit</Text>
      </Button>
    </View>
  );
}
