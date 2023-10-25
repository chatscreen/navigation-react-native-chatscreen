import React from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { View, ScrollView, Text, Pressable } from "react-native";
const SidewaysScrollView = () => {
  const options = ["info-circle", "award", "images", "calendar-alt", "poll"];
  return (
    <View
      style={{ height: 70, borderBottomWidth: 1, borderColor: "lightgrey" }}
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{
          height: 150,
        }}
      >
        {options.map((option, index) => (
          <Pressable
            key={index}
            style={{
              width: 100,
              height: 40,
              justifyContent: "center",
              alignItems: "center",
              marginTop: 25,
              borderRightWidth: 1,
              borderColor: "lightgrey",
            }}
            onPress={() => console.log(option)}
          >
            <FontAwesome5 name={option} size={30} color="lightgrey" />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};
export default SidewaysScrollView;
