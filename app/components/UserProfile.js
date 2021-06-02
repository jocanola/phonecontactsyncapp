import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppAvatar from "./AppAvatar";
import { auth, db } from "../firebase/firebase";

export default function UserProfile({navigation}) {

    //Logout of the app and navigation to home screen
    const Logout =()=> {
        auth.signOut().then((response)=> {

            navigation.navigate("registration")
        }).catch(error => console.log(error))
    }

  return (
    <View style={styles.container}>
      <View style={styles.userImage}>
        <Image style={styles.image} source={require("../media/my-image.jpg")} />
        <Text style={styles.username}>Jokanola Yusuff Olatunji</Text>
      </View>
      <TouchableOpacity onPress={Logout}>
        <View style={styles.action}>
          <AppAvatar iconName="logout" />
          <Text style={styles.actionText}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  userImage: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    // borderBottomWidth: 3,
    // borderBottomColor: "gray",
  },
  image: {
    width: 140,
    height: 100,
    borderRadius: 50,
    margin: 5,
  },
  username: {
    fontSize: 25,
    fontWeight: "800",
    textAlign: "center",
  },
  action: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginTop: 7,
  },
  actionText: {
    fontSize: 24,
    fontWeight: "700",
  },
});
