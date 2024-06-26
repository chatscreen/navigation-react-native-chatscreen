import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import SearchBar from "../components/SearchBar";
const LocationsHeader = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <View style={styles.flexGrid}>
        <Pressable
          onPress={() => {
            onPress();
          }}
        >
          <Ionicons name="md-menu" size={40} color="#5F6FEE" />
        </Pressable>
        <View style={styles.spacer} />
        <FontAwesome5 name="map-marker-alt" size={30} color="#5F6FEE" />
      </View>
      <Text style={styles.text}>Locations</Text>
      <SearchBar />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingHorizontal: 14,
    alignItems: "center",
  },
  flexGrid: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    justifyContent: "space-between",
    width: "100%",
  },
  spacer: {
    width: 20,
  },
  text: {
    fontSize: 40,
    paddingLeft: 5,
    alignSelf: "flex-start",
    fontWeight: "bold",
  },
});
export default LocationsHeader;
