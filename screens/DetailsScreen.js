import React, { useState } from "react";
import { View, Text } from "react-native";
import { Button } from "react-native-paper";

import { Picker } from "@react-native-picker/picker";
import { options } from "../assets/data/input-data";

const DetailsScreen = ({ navigation }) => {
  const [selectedAcademicYear, setSelectedAcademicYear] = useState("AY-23-24");
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [selectedFaculty, setSelectedFaculty] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);

  const handleAcademicYearChange = (itemValue) => {
    setSelectedAcademicYear(itemValue);
    setSelectedBranch(null);
    setSelectedYear(null);
    setSelectedSemester(null);
  };

  const handleBranchChange = (itemValue) => {
    setSelectedBranch(itemValue);
    setSelectedYear(null);
    setSelectedSemester(null);
  };

  const handleYearChange = (itemValue) => {
    setSelectedYear(itemValue);
    setSelectedSemester(null);
  };

  const handleSemesterChange = (itemValue) => {
    setSelectedSemester(itemValue);
  };
  const handleFacultyChange = (itemValue) => {
    setSelectedFaculty(itemValue);
  };

  const handleSubmit = () => {
    const data = {
      AcademicYear: selectedAcademicYear,
      Branch: selectedBranch,
      Year: selectedYear,
      Semester: selectedSemester,
      Faculty: selectedFaculty,
      Subject: selectedSubject,
    };
    navigation.navigate("Questions", { formData: data });
  };

  const branches =
    options.find((option) => Object.keys(option)[0] === selectedAcademicYear)?.[
      selectedAcademicYear
    ]?.Branch || {};

  const years = branches[selectedBranch]?.Year || {};

  const semesters = years[selectedYear]?.Semester || {};
  const faculties = semesters[selectedSemester]?.I || [];

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 20, marginBottom: 20 }}>
        Choose Academic Year:
      </Text>
      <Picker
        selectedValue={selectedAcademicYear}
        style={{ height: 50, width: 200 }}
        onValueChange={(itemValue) => handleAcademicYearChange(itemValue)}
      >
        {options.map((option, index) => (
          <Picker.Item
            key={index}
            label={Object.keys(option)[0]}
            value={Object.keys(option)[0]}
          />
        ))}
      </Picker>

      {selectedAcademicYear && (
        <>
          <Text style={{ fontSize: 20, marginTop: 20 }}>Choose Branch:</Text>
          <Picker
            selectedValue={selectedBranch}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue) => handleBranchChange(itemValue)}
          >
            <Picker.Item label="Select Branch" value={null} />
            {Object.keys(branches).map((branch, index) => (
              <Picker.Item key={index} label={branch} value={branch} />
            ))}
          </Picker>
        </>
      )}

      {selectedBranch && (
        <>
          <Text style={{ fontSize: 20, marginTop: 20 }}>Choose Year:</Text>
          <Picker
            selectedValue={selectedYear}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue) => handleYearChange(itemValue)}
          >
            <Picker.Item label="Select Year" value={null} />
            {Object.keys(years).map((year, index) => (
              <Picker.Item key={index} label={year} value={year} />
            ))}
          </Picker>
        </>
      )}

      {selectedYear && (
        <>
          <Text style={{ fontSize: 20, marginTop: 20 }}>Choose Semester:</Text>
          <Picker
            selectedValue={selectedSemester}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue) => handleSemesterChange(itemValue)}
          >
            <Picker.Item label="Select Semester" value={null} />
            {Object.keys(semesters)
              .filter((semester) => semester === "I" || semester === "II")
              .map((semester, index) => (
                <Picker.Item key={index} label={semester} value={semester} />
              ))}
          </Picker>
        </>
      )}

      {selectedSemester && (
        <>
          <Text style={{ fontSize: 20, marginTop: 20 }}>Choose Faculty:</Text>

          <Picker
            selectedValue={selectedFaculty}
            style={{ height: 50, width: 200 }}
            onValueChange={(itemValue) => handleFacultyChange(itemValue)}
          >
            <Picker.Item label="Select Faculty" value={null} />
            {semesters[selectedSemester].map((faculty, index) => (
              <Picker.Item
                key={index}
                label={faculty.label}
                value={faculty.value}
              />
            ))}
          </Picker>
          <Text style={{ fontSize: 20, marginTop: 20 }}>
            Faculty's Subject:
          </Text>
          <Text style={{ fontSize: 16, marginTop: 10 }}>
            {
              faculties.find((faculty) => faculty.value === selectedFaculty)
                ?.subject
            }
          </Text>
        </>
      )}

      <Text style={{ marginTop: 20 }}>
        Selected Academic Year: {selectedAcademicYear}
        {selectedBranch && `, Selected Branch: ${selectedBranch}`}
        {selectedYear && `, Selected Year: ${selectedYear}`}
        {selectedSemester && `, Selected Semester: ${selectedSemester}`}
        {selectedFaculty && `, Selected Faculty: ${selectedFaculty}`}
        {selectedSubject && `, Selected Subject: ${selectedSubject}`}
      </Text>
      {selectedAcademicYear && (
        <Button
          title="Submit"
          disabled={!selectedFaculty}
          mode="elevated"
          // ColorValue="green"
          onPress={handleSubmit}
        >
          <Text>Next</Text>
        </Button>
      )}
    </View>
  );
};

export default DetailsScreen;
