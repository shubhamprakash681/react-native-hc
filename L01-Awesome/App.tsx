import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from "react-native";

const App = () => {
  const isDarkMode = useColorScheme() === "dark";

  return (
    <SafeAreaView
      style={[
        styles.container,
        isDarkMode ? styles.darkContainer : styles.lightContainer,
      ]}
    >
      <View>
        <Text>Hello World!</Text>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    borderColor: "green",
    borderWidth: 20,
  },

  darkContainer: {
    backgroundColor: "black",
    color: "white",
  },
  lightContainer: {
    backgroundColor: "white",
    color: "black",
  },
});
