import { StyleSheet, Text, View } from "react-native";
import React from "react";

const FlatCard = () => {
  return (
    <View>
      <Text style={styles.headerText}>FlatCard</Text>

      <View style={styles.flatCardHolder}>
        <View style={[styles.card, styles.cardOne]}>
          <Text>Red</Text>
        </View>

        <View style={[styles.card, styles.cardTwo]}>
          <Text>Blue</Text>
        </View>

        <View style={[styles.card, styles.cardThree]}>
          <Text>Purple</Text>
        </View>
      </View>
    </View>
  );
};

export default FlatCard;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  flatCardHolder: {
    marginVertical: 10,
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    // borderColor: "green",
    // borderWidth: 2,
  },
  card: {
    width: 100,
    height: 100,
    margin: 10,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  cardOne: {
    backgroundColor: "#EC407A",
  },
  cardTwo: {
    backgroundColor: "#726ddf",
  },
  cardThree: {
    backgroundColor: "#AB47BC",
  },
});
