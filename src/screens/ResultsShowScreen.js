import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Image, StyleSheet } from "react-native";

import yelp from "../api/yelp";

// this navigation is passed when navigated from ResultList
const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null); // we normally initialize null for upcoming receiving onject
  const id = navigation.getParam("id");

  //helper function to retrieve data
  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };

  //call this exactly once
  useEffect(() => {
    getResult(id);
  }, []);

  //if the result is not yet retrieved then return null
  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image source={{ uri: item }} style={styles.image} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 200
  }
});

export default ResultsShowScreen;
