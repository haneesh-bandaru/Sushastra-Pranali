import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { DefaultTheme, RadioButton } from "react-native-paper";
import { Button, Card, Snackbar } from "react-native-paper";

const QuestionsScreen = ({ navigation, route }) => {
  const [snackbarVisible, setSnackbarVisible] = useState(false);
  const onDismissSnackBar = () => {
    setSnackbarVisible(false);
  };

  const formData = route.params?.formData || {};
  const questions = [
    "Knowledge of the Subject",
    "Coming well prepared for the Class",
    "Giving Clear Explanations",
    "Command of Language",
    "Clear and Audible Voice",
    "Holding the attention of students through the Class",
    "Providing more matter than in the Text Book",
    "Capability to clear the doubts of Students",
    "Encouraging students to ask questions and participate in Discussion",
    "Appreciating students as and when deserving",
    "Willingness to help students even out of Class",
    "Return of valued Test Papers / Records in Time",
    "Punctuality and following Time Table Schedule",
    "Coverage of Syllabus",
    "Impartial (Treating all students alike)",
  ];

  const options = ["Very Good", "Good", "Average", "Below Average", "Poor"];

  const [questionsState, setQuestionsState] = useState(
    Array(questions.length).fill("")
  );
  const allQuestionsAnswered = questionsState.every((state) => state !== "");
  const generateQuestion = (questionNumber) => {
    const state = questionsState[questionNumber - 1];

    return (
      <Card
        key={questionNumber}
        style={{
          marginHorizontal: 20,
          paddingLeft: 15,
          paddingTop: 15,
          marginBottom: 5,
          marginTop: 7,
        }}
      >
        <Text>
          {questionNumber}. {questions[questionNumber - 1]}
        </Text>
        {options.map((option, index) => (
          <View
            key={index}
            style={{ flexDirection: "row", alignItems: "center" }}
          >
            <RadioButton
              value={option}
              status={state === option ? "checked" : "unchecked"}
              onPress={() => {
                const newQuestionsState = [...questionsState];
                newQuestionsState[questionNumber - 1] = option;
                setQuestionsState(newQuestionsState);
              }}
            />
            <Text>{option}</Text>
          </View>
        ))}
        <Text>{state}</Text>
      </Card>
    );
  };

  const printSelectedOptions = () => {
    const selectedOptions = questionsState.map((option, index) => ({
      [`q${index + 1}`]: `${option}`,
    }));
    return selectedOptions;
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#cfbcff" }}>
      {questions.map((_, index) => generateQuestion(index + 1))}
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 5,
          marginBottom: 10,
        }}
      >
        <Button
          mode="contained-tonal"
          style={{
            flex: 1,
            width: 60,
            marginHorizontal: 15,
          }}
          contentStyle={{ flexDirection: "row", alignItems: "center" }}
          onPress={() => {
            navigation.navigate("Details");
          }}
        >
          <Text style={{ color: "#381E72" }}>Back</Text>
        </Button>

        <Button
          mode="contained"
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            width: 80,
            alignContent: "center",
            marginHorizontal: 15,
            backgroundColor: "#381E72",
          }}
          title="Submit"
          onPress={() => {
            if (allQuestionsAnswered) {
              navigation.navigate("ThankYou", printSelectedOptions());
            } else {
              // Handle the case where not all questions are answered
              console.log("Please answer all questions before submitting.");
              setSnackbarVisible(true);
            }
          }}
          disabled={!allQuestionsAnswered}
        >
          <Text>Submit</Text>
        </Button>
      </View>

      {/* Snackbar for displaying error message */}
      <Snackbar
        visible={snackbarVisible}
        onDismiss={onDismissSnackBar}
        duration={3000} // Adjust the duration as needed
      >
        Please answer all questions before submitting.
      </Snackbar>
    </ScrollView>
  );
};

export default QuestionsScreen;
