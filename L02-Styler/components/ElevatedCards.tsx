import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const ElevatedCards = () => {
  return (
    <View>
      <Text style={styles.headerText}>ElevatedCards</Text>

      <ScrollView
        horizontal
        style={styles.elevatedCardHolder}
        showsHorizontalScrollIndicator={false}
      >
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Tap</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Me</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>To</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>Scroll</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>More...</Text>
        </View>
        <View style={[styles.card, styles.elevatedCard]}>
          <Text>😛</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default ElevatedCards;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  elevatedCardHolder: {
    marginVertical: 10,
    // borderColor: "green",
    // borderWidth: 2,
  },
  card: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    width: 100,
    height: 100,
    margin: 10,
  },
  elevatedCard: {
    backgroundColor: "#cad5e2",
    elevation: 5,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "#464838",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
});
