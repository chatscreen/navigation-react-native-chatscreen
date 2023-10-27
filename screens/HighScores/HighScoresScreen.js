import { Ionicons } from "@expo/vector-icons";
import { Text, View, Pressable } from "react-native";
function HighScores({ onPress }) {
  return (
    <View style={{ margin: 30 }}>
      <Pressable
        onPress={() => {
          onPress();
        }}
      >
        <Ionicons name={"arrow-back-sharp"} size={16} color="black" />
      </Pressable>
      <Text>High Scores</Text>
    </View>
  );
}

export default HighScores;
