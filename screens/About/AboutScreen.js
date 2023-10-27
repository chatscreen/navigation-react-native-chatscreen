import { Ionicons } from "@expo/vector-icons";
import { Text, View, Pressable } from "react-native";
function AboutScreen({ onPress }) {
  return (
    <View style={{ margin: 30 }}>
      <Pressable
        onPress={() => {
          onPress(0);
        }}
      >
        <Ionicons name={"arrow-back-sharp"} size={16} color="black" />
      </Pressable>
      <Text>About Screen</Text>
    </View>
  );
}

export default AboutScreen;
