import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
const Navbar = ({ toggleMenuClose }) => {
  const navigation = useNavigation();

  const goToScreen = (screenName) => {
    toggleMenuClose();
    navigation.navigate(screenName);
  };

  const image =
    "https://images.unsplash.com/photo-1575936123452-b67c3203c357?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D";

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "100%",
          backgroundColor: "#2658c1",
          flex: 2,
        }}
      >
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
      </View>
      <View style={styles.menu}>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            goToScreen("Locations");
          }}
        >
          <FontAwesome5 name="map-marker-alt" size={30} color="#fff" />
          <Text style={styles.menuText}>LOCATIONS</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            goToScreen("Newsfeed");
          }}
        >
          <FontAwesome5 name="newspaper" size={30} color="#fff" />
          <Text style={styles.menuText}>NEWSFEED</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            goToScreen("Profile");
          }}
        >
          <FontAwesome5 name="user-alt" size={30} color="#fff" />
          <Text style={styles.menuText}>PROFILE</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            goToScreen("ForumStatus");
          }}
        >
          <FontAwesome5 name="medal" size={30} color="#fff" />
          <Text style={styles.menuText}>FORUM STATUS</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            goToScreen("HighScores");
          }}
        >
          <FontAwesome5 name="trophy" size={30} color="#fff" />
          <Text style={styles.menuText}>HIGH SCORES</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            goToScreen("Settings");
          }}
        >
          <Ionicons name="settings" size={30} color="#fff" />
          <Text style={styles.menuText}>SETTINGS</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            goToScreen("Feedback");
          }}
        >
          <Ionicons name="arrow-redo-sharp" size={30} color="#fff" />
          <Text style={styles.menuText}>FEEDBACK</Text>
        </Pressable>
        <Pressable
          style={styles.menuItem}
          onPress={() => {
            goToScreen("About");
          }}
        >
          <FontAwesome5 name="info-circle" size={30} color="#fff" />
          <Text style={styles.menuText}>ABOUT</Text>
        </Pressable>
      </View>
      <View style={styles.logOutContainer}>
        <Text style={styles.LogoutButton}>LOG OUT</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  imageContainer: {
    height: 120,
    width: 120,
    marginTop: 50,
    marginLeft: 35,
    borderRadius: 100,
    elevation: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: "90%",
    width: "90%",
    borderRadius: 100,
  },
  container: {
    flex: 2,
    flexDirection: "colum",
  },
  menu: {
    flex: 6,
    width: "100%",
    backgroundColor: "#2658c1",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  menuText: {
    width: "100%",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    paddingLeft: 20,
    color: "white",
    overflow: "hidden",
    maxHeight: 25,
  },
  menuItem: {
    marginLeft: 35,
    flexDirection: "row",
    alignItems: "center",
  },
  logOutContainer: {
    width: "100%",
    backgroundColor: "#2658c1",
    flex: 1.3,
    justifyContent: "center",
  },
  LogoutButton: {
    color: "white",
    fontSize: 20,
    marginLeft: 30,
    borderRadius: 30,
    backgroundColor: "#FB4DAF",
    padding: 10,
    width: 150,
    textAlign: "center",
    elevation: 6,
    position: "absolute",
  },
});
export default Navbar;
