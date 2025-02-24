import {
  Image,
  ImageSourcePropType,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import React, { useEffect, useRef, useState } from "react";
import { Animated } from "react-native";
import * as Haptics from "expo-haptics";

import DiceOne from "../assets/images/dice-six-faces-one.png";
import DiceTwo from "../assets/images/dice-six-faces-two.png";
import DiceThree from "../assets/images/dice-six-faces-three.png";
import DiceFour from "../assets/images/dice-six-faces-four.png";
import DiceFive from "../assets/images/dice-six-faces-five.png";
import DiceSix from "../assets/images/dice-six-faces-six.png";

const diceFaces = [DiceOne, DiceTwo, DiceThree, DiceFour, DiceFive, DiceSix];

interface DiceProps extends React.ComponentProps<typeof Image> {
  imageSrc: ImageSourcePropType;
}
const Dice: React.FC<DiceProps> = ({ imageSrc, ...props }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.sequence([
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }),
    ]).start();
  }, [imageSrc]);

  return (
    <Animated.Image
      {...props}
      source={imageSrc}
      style={[props.style, { opacity: fadeAnim }]}
    />
  );
};

export default function Index() {
  const isDarkMode = useColorScheme() === "dark";
  const [upFace, setUpFace] = useState<ImageSourcePropType>(DiceSix);
  let prevIndex = 6;

  const rollDice = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);

    let randomIndex = Math.floor(Math.random() * 6);
    if (randomIndex === prevIndex) {
      randomIndex = (randomIndex + 1) % 6;
    }
    prevIndex = randomIndex;
    setUpFace(diceFaces[randomIndex]);
  };

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
        <Dice style={styles.diceFace} imageSrc={upFace} />
        <TouchableOpacity onPress={rollDice}>
          <Text style={styles.btn}>Roll Dice</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  darkContainer: {
    backgroundColor: "#333",
    color: "white",
  },
  lightContainer: {
    backgroundColor: "#f0f0f0",
    color: "black",
  },
  diceFace: {
    width: 300,
    height: 300,
  },
  btn: {
    width: 300,
    textAlign: "center",
    padding: 10,
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    backgroundColor: "#696963",
    borderRadius: 5,
  },
});
