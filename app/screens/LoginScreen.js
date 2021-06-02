import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";
import AppInputText from "../components/AppInputText";
import AppText from "../components/AppText";
import BackgroundScreen from "../components/BackgroundScreen";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <KeyboardAvoidingView
      style={styles.loginScreen}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View style={styles.loginContainer}>
        <AppInputText
          placeholder="Email"
          onChangeText={(text) => setEmail(text)}
          defaultValue={email}
        />
        <AppInputText placeholder="Password" />
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("contactlist")}
        >
          <AppText color="white" tA="center" fontWeight="800" size={20}>
            Sign In {email}
          </AppText>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
  },
  button: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 17,
  },
  loginContainer: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
});
