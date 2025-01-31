import {
  Alert,
  Linking,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";

export default function ActionCard() {
  const handlePress = async (url: string) => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      Alert.alert(`Don't know how to open this URL: ${url}`);
    }
  };

  return (
    <View>
      <Text style={styles.headerText}>ActionCard</Text>

      <View style={[styles.card, styles.cardElevated]}>
        <Text style={styles.cardLabel}>
          Section to showcase APP Linking and TouchableOpacity
        </Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={() => handlePress("https://google.com")}
            style={[styles.touchableButton, styles.primaryBtn]}
          >
            <Text style={styles.buttonText}>Click Me</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => handlePress("slack://open?team=123456")}
            style={[styles.touchableButton, styles.destructiveBtn]}
          >
            <Text style={styles.buttonText}>Don't Click Me</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  card: {
    margin: 10,
    borderRadius: 10,
    height: 100,
    padding: 10,
    justifyContent: "space-between",
  },
  cardElevated: {
    backgroundColor: "#cad5e2",
    elevation: 2,
    shadowOffset: { width: 5, height: 5 },
    shadowColor: "#464838",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  cardLabel: {
    fontSize: 14,
    marginBottom: 6,
  },
  buttonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  touchableButton: {
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
  },
  primaryBtn: {
    backgroundColor: "#9B4444",
  },
  destructiveBtn: {
    backgroundColor: "#FB4141",
  },
});
