import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import AppText from "../components/AppText";
import Contact from "../components/Contact";
import SearchBar from "../components/SearchBar";
import * as Contacts from "expo-contacts";
import UserAvatarBar from "../components/UserAvatarBar";
import { BottomSheet } from "react-native-btr";
import UserProfile from "../components/UserProfile";

export default function ContactScreen({ navigation }) {
  const [contacts, setContacts] = useState([]);
  const [inputText, setInputText] = useState("");

  //Updating input text when user is typing it
  const onInputTextChange = (event) => {
    setInputText(event);
  };

  //Requesting permission, loading contacts if permission is granted
  const loadContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === "granted") {
      const { data } = await Contacts.getContactsAsync({
        fields: [Contacts.Fields.PhoneNumbers, Contacts.Fields.Emails],
      });

      //Arranging the contacts alphabetically
      const sortAlp = data?.sort(function (a, b) {
        const userA = a.name;
        const userB = b.name;
        if (userA < userB) {
          return -1;
        }
        if (userA > userB) {
          return 1;
        }
        return 0;
      });

      setContacts(sortAlp);
    }
  };

  useEffect(() => {
    loadContacts();
    // console.log(contacts);
  }, []);

  //Search for the contacts and according to what type in inpute
  const filteredContact = contacts.filter((contact) => {
    return contact?.name?.includes(inputText);
  });

  //Displaying and hide bottomsheet
  const [visible, setVisible] = useState(false);

  const state = useSelector(state => state.user)
  const toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    setVisible(!visible);
  };
  return (
    <View style={styles.container}>
      {/* Search box with Avatar */}

      <UserAvatarBar
        onInputTextChange={onInputTextChange}
        value={inputText}
        toggleBottomNavigationView={toggleBottomNavigationView}
      />

      {/* List of contacts */}
      <FlatList
        data={filteredContact}
        keyExtractor={filteredContact.id}
        renderItem={({ item }) => (
          <Contact item={item} navigation={navigation} />
        )}
      />
      {/* Bottom sheet display */}
      <BottomSheet
        visible={visible}
        //setting the visibility state of the bottom shee
        onBackButtonPress={toggleBottomNavigationView}
        //Toggling the visibility state
        onBackdropPress={toggleBottomNavigationView}
        //Toggling the visibility state
      >
        <View style={styles.bottomNavigationView}>
          <UserProfile navigation={navigation}/>
          {state.uid}
        </View>
      </BottomSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contactsList: {
    alignItems: "center",
  },
  bottomNavigationView: {
    backgroundColor: "#fff",
    width: "100%",
    height: "70%",
    justifyContent: "center",
    alignItems: "center",
    padding:15
  },
});
