import React from "react";
import { StyleSheet, Alert, TouchableOpacity, View } from "react-native";
import AppAvatar from "../components/AppAvatar";
import AppText from "../components/AppText";
import Communications from "react-native-communications";

export default function ContactDetailScreen({ route }) {
  const { item } = route.params;
  return (
    <View style={styles.contactDetailScreen}>
      <View style={styles.avatarSection}>
        <AppAvatar
          initial={item.name && item.name[0].charAt(0)}
          avatarSize={100}
        />
        <AppText size={26} fontWeight="bold">
          {item.name}
        </AppText>
      </View>
      <View style={styles.callSection}>
        <TouchableOpacity
          onPress={() =>
            Communications.phonecall(item.phoneNumbers[0].digits, true)
          }
        >
          <AppAvatar iconName="local-phone" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => Communications.text(item.phoneNumbers[0].digits)}
        >
          <AppAvatar iconName="message" />
        </TouchableOpacity>
        <TouchableOpacity>
          <AppAvatar iconName="email" />
        </TouchableOpacity>
      </View>
      <View style={styles.phoneNumber}>
        <AppText size={18}>Mobile no</AppText>
        <AppText size={24} fontWeight="bold">
          {item.phoneNumbers[0].digits}
        </AppText>
      </View>
      <View style={styles.phoneNumber}>
        <AppText size={18}>Country code</AppText>
        <AppText size={24} fontWeight="bold">
          {item.phoneNumbers[0].countryCode}
        </AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactDetailScreen: {
    flex: 0.8,
    justifyContent: "center",
  },
  avatarSection: {
    alignItems: "center",
  },
  callSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderBottomWidth: 2,
    borderBottomColor: "black",
    borderTopWidth: 2,
    borderTopColor: "black",
    marginTop: 30,
  },
  phoneNumber: {
    flex: 1,
    justifyContent: "space-evenly",
    marginLeft: 20,
    padding: 5,
  },
});
