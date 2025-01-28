import ElevatedCards from "@/components/ElevatedCards";
import FancyCard from "@/components/FancyCard";
import FlatCards from "@/components/FlatCards";
import { ScrollView, StyleSheet } from "react-native";

export default function Index() {
  return (
    <ScrollView style={styles.appContainer}>
      <FlatCards />
      <ElevatedCards />

      <FancyCard />
      <FancyCard />
      <FancyCard />

      <FlatCards />
      <ElevatedCards />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
    // borderColor: "red",
    // borderWidth: 5,
  },
});
