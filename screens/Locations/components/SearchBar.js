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
    height: 50,
    backgroundColor: "#F2F3F3",
    alignSelf: "center",
    marginTop: 15,
    borderRadius: 8,
    width: 390,
  },
  bar: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
    color: "#BFBFBF",
  },
  text: {
    fontSize: 18,
    color: "#BFBFBF",
  },
});
export default SearchBar;
