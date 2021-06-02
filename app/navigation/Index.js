import React, { useEffect, useState } from "react";
// import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "../screens/LoginScreen";
import ContactScreen from "../screens/ContactScreen";
import ContactDetailScreen from "../screens/ContactDetailScreen";
import RegisterScreen from "../screens/RegisterScreen";
import { auth, db } from "../firebase/firebase";
import { store } from "../redux/Reduxindex";
const Stack = createStackNavigator();

export default function Index() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(null);
  useEffect(() => {
    const usersRef = db.collection("users");
    auth.onAuthStateChanged((user) => {
      if (user) {
        usersRef
          .doc(user.uid)
          .get()
          .then((document) => {
            const userData = document.data();
            setLoading(false);
            setUser(userData);
          })
          .catch((error) => {
            setLoading(false);
          });
      } else {
        setLoading(false);
      }
    });
  }, [user]);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user ? (
          <>
            <Stack.Screen
              name="registration"
              component={RegisterScreen}
              options={{ title: "" }}
            />
            {/* <Stack.Screen
            name="login"
            component={LoginScreen}
            options={{ title: "" }}
          /> */}
          </>
        ) : (
          <>
            <Stack.Screen
              name="contactlist"
              component={ContactScreen}
              options={{ title: "" }}
            />
            <Stack.Screen
              name="contactdetail"
              component={ContactDetailScreen}
              options={{ title: "Contact" }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
