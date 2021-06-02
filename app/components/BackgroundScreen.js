import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function BackgroundScreen({ children }) {
  return (
    <View style={styles.backgroundScreen}>
      <View style={styles.top}></View>
      <View style={styles.childView}>{children}</View>
      <View style={styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundScreen: {
    flex: 0.8,
    position: "relative"

  },
  childView: {
    flex: 1,
  },
 
  top: {
    position: "absolute",
    backgroundColor: "green",
    bottom: -150,
    width: "100%",
    height: 300,
    borderRadius: 150,
  },
});
