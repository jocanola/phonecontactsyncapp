import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppText from "./AppText";
import { MaterialIcons } from "@expo/vector-icons";

export default function AppAvatar({
  initial,
  avatarSize = 50,
  color = "cyan",
  iconName,
}) {
  return (
    <View
      style={{
        width: avatarSize,
        height: avatarSize,
        backgroundColor: color,
        borderRadius: 999,
        margin: 7,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {!iconName ? (
        <AppText size={40} tA="center" fontWeight="bold">
          {initial} 
        </AppText>
      ) : (
        <>
          {MaterialIcons && (
            <MaterialIcons name={iconName} size={30} color="black" />
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({});
