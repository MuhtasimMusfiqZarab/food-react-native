import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  //save api reasults here
  const [results, setResults] = useState([]);

  //API search
  const searchAPI = async () => {
    const response = await yelp.get("/search", {
      //parameters to customize the search we make
      params: {
        //appending to the requested url
        limit: 50,
        term,
        location: "san jose"
      }
    });
    //saving to results array
    setResults(response.data.businesses);
  };

  return (
    <View>
      {/* must provide both the term and onTermChange callback to change it */}
      <SearchBar
        term={term}
        onTermChange={newValue => setTerm(newValue)}
        onTermSubmit={searchAPI}
      />
      <Text> Search Screen</Text>
      <Text>Found :{results.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
