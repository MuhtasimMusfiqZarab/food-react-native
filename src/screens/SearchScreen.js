import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from "react-native";
import SearchBar from "../components/SearchBar";
import yelp from "../api/yelp";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  //save api reasults here
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  //API search
  const searchAPI = async searchTerm => {
    try {
      const response = await yelp.get("/search", {
        //parameters to customize the search we make
        params: {
          //appending to the requested url
          limit: 50,
          term: searchTerm,
          location: "san jose"
        }
      });
      //saving to results array
      setResults(response.data.businesses);
    } catch (error) {
      setErrorMessage(error);
    }
  };

  //run once when the component is rendedred the first time (componentDidMount)
  useEffect(() => {
    searchAPI("pasta");
  }, []);

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
