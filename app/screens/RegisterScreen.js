import React, { useState } from "react";
import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import AppInputText from "../components/AppInputText";
import AppText from "../components/AppText";
import { auth, db } from "../firebase/firebase";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const checkingInputValue =
    password === confirmPassword && email && password && confirmPassword !== "";
  const onRegisterPress = () => {
    // if (password !== confirmPassword) {
    //   alert("Passwords don't match.");
    //   return;
    // }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        const uid = response.user.uid;
        const user = {
          id: uid,
          email,
        };
        const usersRef = db.collection("users");
        usersRef
          .doc(uid)
          .set(user)
          .then(() => {
            navigation.navigate("contactlist", { user });
            dispatch({ type: "DO_LOGIN", payload: user });
          })
          .catch((error) => {
            alert(error);
          });
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <KeyboardAvoidingView
      style={styles.loginContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <AppText size={26} tA="center">
        Sign Up
      </AppText>
      <AppInputText
        placeholder="Email"
        defaultValue={email}
        onChangeText={(text) => setEmail(text)}
        name="user"
      />
      <AppInputText
        placeholder="Password"
        defaultValue={password}
        onChangeText={(text) => setPassword(text)}
        name="lock"
      />
      <AppInputText
        placeholder="Confirm Password"
        defaultValue={confirmPassword}
        onChangeText={(text) => setConfirmPassword(text)}
        name="lock"
      />
      <TouchableOpacity
        style={{
          backgroundColor: !checkingInputValue ? "gray" : "black",
          padding: 10,
          borderRadius: 17,
        }}
        onPress={onRegisterPress}
        disabled={!checkingInputValue}
      >
        <AppText color="white" tA="center" fontWeight="800" size={20}>
          Sign Up
        </AppText>
      </TouchableOpacity>
      <AppText
        tA="center"
        fontWeight="600"
        onPress={() => navigation.navigate("login")}
      >
        {" "}
        Already create an account? Sign in{" "}
      </AppText>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  loginScreen: {
    flex: 1,
  },

  loginContainer: {
    flex: 0.8,

    padding: 10,
  },
});
