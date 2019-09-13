import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View>
      {/* must provide both the term and callback to change it */}
      <SearchBar term={term} onTermChange={newValue => setTerm(newValue)} />
      <Text> Search Screen</Text>
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
