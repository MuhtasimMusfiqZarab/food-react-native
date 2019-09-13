import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ResultDetail = ({ result }) => {
  return (
    <View>
      {/* source receives an object with uri(react native trying to get image from prop  ** need to put fixed height & width to it to show it (as image wants to collups itself)*/}
      <Image source={{ uri: result.image_url }} style={styles.imageStyle} />
      <Text style={styles.nameStyle}> {result.name}</Text>
      <Text>
        {result.rating} Stars, {result.review_count} Reviews
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  imageStyle: {
    width: 250,
    height: 120,
    borderRadius: 4
  },
  nameStyle: {
    fontWeight: "bold"
  }
});

export default ResultDetail;
