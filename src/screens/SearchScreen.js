import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
//importing the hooks we have created
import useResults from "../hooks/useResults";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  //extracting values from hooks
  const [searchAPI, results, errorMessage] = useResults();

  return (
    <View>
      {/* must provide both the term and onTermChange callback to change it */}
      <SearchBar
        term={term}
        onTermChange={newValue => setTerm(newValue)}
        onTermSubmit={() => searchAPI(term)} //term is from the state
      />
      {errorMessage ? <Text>Found :{results.length}</Text> : null}
      <Text>Results Found :{results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
