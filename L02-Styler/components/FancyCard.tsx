import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const FancyCard = () => {
  return (
    <View>
      <Text style={styles.headerText}>Trending Places</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={require("../assets/images/red-fort.png")}
          alt="Red Fort"
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Red Fort</Text>
          <Text style={styles.cardLabel}>
            Historic Mughal fort in Delhi, India
          </Text>
          <Text style={styles.cardDescription}>
            Renowned monument by Shah Jahan, Red Fort, was constructed when the
            Mughal emperor decided to move his capital from Agra to Delhi. It is
            the perfect example of the military might of the Mughals. The
            imposing, red sandstone walls of the fortress also played an
            important role in modern India. Every year, the Prime Minister of
            India addresses the nation from this historical monument.
          </Text>
          <Text style={styles.cardFooter}>Read More</Text>
        </View>
      </View>
    </View>
  );
};

export default FancyCard;

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  card: {
    margin: 10,
    borderRadius: 10,
  },
  cardElevated: {
    backgroundColor: "#cad5e2",
    elevation: 2,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "#464838",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  cardImage: {
    height: 200,
    maxWidth: "100%",
    objectFit: "cover",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardBody: {
    marginTop: 8,
    padding: 10,
  },
  cardTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 2,
  },
  cardLabel: {
    fontSize: 14,
    marginBottom: 6,
  },
  cardDescription: {
    color: "#353b48",
    fontSize: 12,
    marginBottom: 12,
  },
  cardFooter: {
    color: "#273c75",
    fontWeight: "bold",
  },
});
