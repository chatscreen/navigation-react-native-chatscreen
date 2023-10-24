import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
const SearchBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bar}>
        <Ionicons name="search" size={24} color="black" style={styles.icon} />
        <Text style={styles.text}>Search for various locations nearby</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "98%",
    height: 50,
    backgroundColor: "lightgrey",
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 8,
    marginBottom: 20,
  },
  bar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 16,
  },
});
export default SearchBar;
