import React from "react";
import { Image, Text, View } from "react-native";
import logo from "../assets/images/clgLogo.png";
import { Card, Button } from "react-native-paper";

export default function HomeScreen({ navigation }) {
  return (
    <Card
      mode="elevated"
      style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
    >
      <Card.Title
        title="Welcome to FeedBack Form"
      />
      <Card.Content>
        <Image source={logo} style={{ width: 200, height: 200 }} />
      </Card.Content>
      <Button
        mode="contained-tonal"
        onPress={() => navigation.navigate("Details")}
        style={{ marginTop: 20 }}
      >
        <Text>Fill Form</Text>
      </Button>
    </Card>
  );
}
