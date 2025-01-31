import { ScrollView, StyleSheet } from "react-native";
import {
  FlatCards,
  ElevatedCards,
  FancyCard,
  ActionCard,
  ContactList,
} from "@/components";

export default function Index() {
  return (
    <ScrollView style={styles.appContainer}>
      <FlatCards />
      <ElevatedCards />

      <FancyCard />
      <FancyCard />

      <ActionCard />

      <ContactList />
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
