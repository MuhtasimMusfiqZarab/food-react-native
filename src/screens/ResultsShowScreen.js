import React, { Component } from "react";
import { View, Text } from "react-native";

// this navigation is passed when navigated from ResultList
const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default ResultsShowScreen;
