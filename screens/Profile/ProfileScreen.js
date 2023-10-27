import { Ionicons } from "@expo/vector-icons";
import { Text, View, Pressable } from "react-native";
function Profile({ onPress }) {
  return (
    <View style={{ margin: 30 }}>
      <Pressable
        onPress={() => {
          onPress();
        }}
      >
        <Ionicons name={"arrow-back-sharp"} size={16} color="black" />
      </Pressable>
      <Text>Profile</Text>
    </View>
  );
}

export default Profile;
