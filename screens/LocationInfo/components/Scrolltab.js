import React, { useState } from "react";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import { View, ScrollView, Text, Pressable } from "react-native";
const SidewaysScrollView = ({ handleOptionPress, options, selectedOption }) => {
  return (
    <View
      style={{ height: 70, borderBottomWidth: 1, borderColor: "lightgrey" }}
    >
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{ height: 150 }}
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
              paddingBottom: 10,
            }}
            onPress={() => handleOptionPress(option)}
          >
            <View
              style={{
                borderBottomWidth: selectedOption === option ? 7 : 0,
                borderBottomColor: "#5F8EEE",
                top: 42,
                width: "100%",
              }}
            ></View>
            <FontAwesome5
              name={option}
              size={25}
              color="lightgrey"
              style={{
                color: selectedOption === option ? "#5F8EEE" : "lightgrey",
              }}
            />
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
};
export default SidewaysScrollView;
