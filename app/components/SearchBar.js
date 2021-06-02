import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default function SearchBar({ cancelSearch, onInputTextChange, value }) {
  return (
    <View style={styles.searchBar}>
      <View style={styles.searchinput}>
        <MaterialIcons name="search" color="white" size={30} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="white"
          onBlur={cancelSearch}
          onChangeText={(value) => onInputTextChange(value)}
          defaultValue={value}
        />
      </View>
      <MaterialIcons
        name="search"
        color="black"
        size={25}
        onPress={cancelSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    height: 45,
  },
  searchinput: {
    width: "85%",
    flexDirection: "row",
    backgroundColor: "black",
    height: 35,
    padding: 5,
    borderRadius: 999,
    color: "white",
    margin: 5,
  },
});
