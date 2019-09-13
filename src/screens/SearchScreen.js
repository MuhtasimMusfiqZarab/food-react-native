import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";

const SearchScreen = () => {
  const [term, setTerm] = useState("");

  return (
    <View>
      {/* must provide both the term and onTermChange callback to change it */}
      <SearchBar
        term={term}
        onTermChange={newValue => setTerm(newValue)}
        onTermSubmit={() => console.log("Term is submitted")}
      />
      <Text> Search Screen</Text>
      <Text>{term}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
