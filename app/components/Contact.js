import React, { useState, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import AppAvatar from "./AppAvatar";
import AppText from "./AppText";

export default function Contact({ item, navigation }) {
  // function initialName(name) {
  //   // const getInitial = name.split(" ");
  //   // console.log("firstInitial", getInitial[0].toString());
  //   // return `${getInitial[0].charAt(0)} ${getInitial[1].charAt(0)}`;
  // }

  return (
    <TouchableOpacity
      style={styles.contact}
      onPress={() => navigation.navigate("contactdetail", { item })}
    >
      <AppAvatar initial={item.name && item.name[0].charAt(0)} />
      <View>
        <AppText size={18} fontWeight="bold">
          {item.name}
        </AppText>
        <AppText>
          {item.phoneNumbers ? item.phoneNumbers[0].digits : ""}
        </AppText>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  contact: {
    flexDirection: "row",
    alignItems: "center",
    padding: 2,
    margin: 2,
    backgroundColor: "white",
    borderRadius: 7,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 3,
  },
});
