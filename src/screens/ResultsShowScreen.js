import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import yelp from "../api/yelp";

// this navigation is passed when navigated from ResultList
const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null); // we normally initialize null for upcoming receiving onject
  const id = navigation.getParam("id");
  console.log(result);

  //helper function to retrieve data
  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  //call this exactly once
  useEffect(() => {
    getResult(id);
  }, []);

  return (
    <View>
      <Text>{id}</Text>
    </View>
  );
};

export default ResultsShowScreen;
