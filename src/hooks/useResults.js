// using hooks is for separting business logic
import React, { useState, useEffect } from "react";
import yelp from "../api/yelp";

export default () => {
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

  // returning what we need inside component(searchAPI func, values of results & errorMessages)
  return [searchAPI, results, errorMessage];
};
