import { View, Text } from "react-native";
import React from "react";
import ThankYouImage from "../assets/images/thankyou.png";
import { Image } from "react-native";

export default function ThankYou() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Image source={ThankYouImage} style={{ width: 200, height: 200 }} />
    </View>
  );
}
