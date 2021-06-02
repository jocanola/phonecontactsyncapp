import { MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import AppAvatar from "./AppAvatar";
import SearchBar from "./SearchBar";

export default function UserAvatarBar({
  onInputTextChange,
  value,
  toggleBottomNavigationView,
}) {
  const [search, setSearch] = useState(false);
  return (
    <>
      {search ? (
        <SearchBar
          cancelSearch={() => setSearch(false)}
          value={value}
          onInputTextChange={onInputTextChange}
        />
      ) : (
        <View style={styles.userAvatarBar}>
          <TouchableOpacity onPress={toggleBottomNavigationView}>
            <AppAvatar avatarSize={40} iconName="supervised-user-circle" />
          </TouchableOpacity>

          <MaterialIcons
            name="search"
            color="black"
            size={30}
            onPress={() => setSearch(true)}
          />
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  userAvatarBar: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: 10,
    marginRight: 10,
    height: 45,
  },
});
