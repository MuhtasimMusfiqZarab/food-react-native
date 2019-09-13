import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import ResultDetail from "./ResultDetail";

const ResultList = ({ title, results }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>{title}</Text>
      {/* showing products using ResultList */}
      <FlatList
        horizontal
        data={results}
        keyExtractor={result => result.id}
        //renderItem has {item,index}
        renderItem={({ item }) => {
          return <ResultDetail result={item} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5
  }
});

export default ResultList;
