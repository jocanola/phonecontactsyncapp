import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import AppText from "./AppText";

export default function AppInputText({ placeholder,name, ...props }) {
  const [whenFocus, setWhenFocus] = useState(false);
  return (
    <View style={styles.appInputText}>
      {whenFocus ? (
        <AppText size={20} fontWeight="bold">
          {placeholder}
        </AppText>
      ) : null}
      <View style={styles.inputText}>
        <FontAwesome5 name={name} size={20} color="black" style={styles.icon} />
        <TextInput
          {...props}
          editable
          placeholder={placeholder}
          style={styles.textInput}
          onFocus={() => setWhenFocus(true)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appInputText: {
    marginBottom: 15,
    marginTop: 15,
  },
  inputText: {
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 2,
    borderBottomColor: "black",
    height: 40,
    marginBottom: 10,
    marginTop: 15,
  },
  icon: {
    marginLeft: 10,
    marginRight: 10,
    margin: 5,
  },
  textInput: {
    flex: 1,
    height: "100%",
    fontSize: 17,
  },
});
