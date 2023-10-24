import { Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
const Navbar = () => {
  const navigation = useNavigation();

  const goToNewsFeed = () => {
    navigation.navigate("About");
  };

  const goToProfile = () => {
    navigation.navigate("Locations");
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <Button title="About" onPress={goToNewsFeed} />
        <Button title="Locations" onPress={goToProfile} />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  menu: {
    width: "100%",
    backgroundColor: "red",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  menuText: {
    width: 300,
    paddingTop: 60,
    fontSize: 16,
    textAlign: "center",
  },
});
export default Navbar;
