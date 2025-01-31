import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const ContactList = () => {
  return (
    <View>
      <Text style={styles.headerText}>ContactList</Text>

      <ScrollView style={styles.container}>
        {contacts.map((contact) => (
          <View key={contact.uid} style={styles.userCard}>
            <Image
              source={{
                uri: contact.imageUrl,
              }}
              style={styles.userImage}
            />
            <View>
              <Text style={styles.userName}>{contact.name}</Text>
              <Text style={styles.userStatus}>{contact.status}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

export default ContactList;

interface IContact {
  uid: number;
  name: string;
  status: string;
  imageUrl: string;
}
const contacts: IContact[] = [
  {
    uid: 1,
    name: "Hitesh Choudhary",
    status: "Just an extra ordinary teacher",
    imageUrl: "https://avatars.githubusercontent.com/u/11613311?v=4",
  },
  {
    uid: 2,
    name: "Anurag Tiwari",
    status: "I ❤️ To Code and Teach!",
    imageUrl: "https://avatars.githubusercontent.com/u/94738352?v=4",
  },
  {
    uid: 3,
    name: "Sanket Singh",
    status: "Making your GPay smooth",
    imageUrl: "https://avatars.githubusercontent.com/u/29747452?v=4",
  },
  {
    uid: 4,
    name: "Anirudh Jwala",
    status: "Building secure Digital banks",
    imageUrl: "https://avatars.githubusercontent.com/u/25549847?v=4",
  },
];

const styles = StyleSheet.create({
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
  },
  container: {
    marginTop: 10,
    marginBottom: 40,
  },
  userCard: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 5,
    backgroundColor: "#5CB338",
    padding: 8,
    borderRadius: 10,
  },
  userImage: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 14,
  },
  userName: {
    fontSize: 16,
    fontWeight: "600",
    color: "#FFF",
  },
  userStatus: {
    fontSize: 12,
  },
});
