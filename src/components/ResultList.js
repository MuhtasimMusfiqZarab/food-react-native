import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

import ResultDetail from "./ResultDetail";

const ResultList = ({ title, results }) => {
  return (
    <View>
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
  titleStyle: {
    fontSize: 18,
    fontWeight: "bold"
  }
});

export default ResultList;
