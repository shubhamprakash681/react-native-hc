import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { StatusBar } from "react-native";

const index = () => {
  const [bgColors, setBgColors] = useState<string[]>([]);
  const isDarkMode = useColorScheme() === "dark";

  const generateRandomHexColor = (): string => {
    const hexCharacters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i += 1) {
      const randomIndex = Math.floor(Math.random() * 16);
      color += hexCharacters[randomIndex];
    }

    return color;
  };

  const changeBgColors = () => {
    const newBgColors = [];
    for (let i = 0; i < 7; i++) {
      newBgColors.push(generateRandomHexColor());
    }

    setBgColors(newBgColors);
  };

  useEffect(() => {
    changeBgColors();
  }, []);

  return (
    <>
      <StatusBar
        animated
        barStyle={isDarkMode ? "light-content" : "dark-content"}
        backgroundColor={isDarkMode ? "#333" : "#f0f0f0"}
      />

      <View
        style={[
          styles.appContainer,
          isDarkMode ? styles.darkContainer : styles.lightContainer,
        ]}
      >
        <ScrollView
          contentContainerStyle={[
            styles.shapeContainer,
            { backgroundColor: bgColors[0] },
          ]}
        >
          <View style={styles.shapeWrapper}>
            <View style={[styles.circle, { backgroundColor: bgColors[1] }]} />
            <View style={[styles.circle, { backgroundColor: bgColors[2] }]} />
            <View style={[styles.circle, { backgroundColor: bgColors[3] }]} />
          </View>
          <View style={styles.shapeWrapper}>
            <View style={[styles.square, { backgroundColor: bgColors[4] }]} />
            <View style={[styles.square, { backgroundColor: bgColors[5] }]} />
            <View style={[styles.square, { backgroundColor: bgColors[6] }]} />
          </View>
        </ScrollView>

        <View style={[styles.btnContainer]}>
          <TouchableOpacity style={styles.changeBgBtn} onPress={changeBgColors}>
            <Text style={styles.changeBgBtnText}>Change Background Color</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default index;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },
  darkContainer: {
    backgroundColor: "black",
    color: "white",
  },
  lightContainer: {
    backgroundColor: "white",
    color: "black",
  },
  shapeContainer: {
    flex: 1,
    justifyContent: "center",
  },
  shapeWrapper: {
    padding: 15,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: 1,
  },
  btnContainer: {
    padding: 15,
  },
  changeBgBtn: {
    width: "100%",
  },
  changeBgBtnText: {
    fontWeight: "bold",
    color: "white",
    padding: 15,
    width: "100%",
    backgroundColor: "#333",
    textAlign: "center",
  },

  circle: {
    width: "33%",
    maxWidth: 150,
    aspectRatio: 1,
    borderRadius: 75,
  },
  square: {
    width: "33%",
    maxWidth: 150,
    aspectRatio: 1,
    borderRadius: 4,
  },
});
