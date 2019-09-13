import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchScreen = ({ term, onTermChange }) => {
  return (
    <View style={styles.backgroundStyle}>
      <FontAwesome name="search" style={styles.iconStyle} />
      {/* we are always going to track the input using state (must be in the parent) */}
      <TextInput
        style={styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={newTerm => onTermChange(newTerm)}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 15,
    backgroundColor: "#F0EEEE",
    height: 50,
    marginHorizontal: 15,
    borderRadius: 5,
    flexDirection: "row"
  },
  inputStyle: {
    flex: 1,
    fontSize: 18
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15
  }
});

export default SearchScreen;
