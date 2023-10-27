import { FontAwesome5 } from "@expo/vector-icons";
import { Text, View, Pressable } from "react-native";
function Settings({ onPress }) {
  const onPressHandler = () => {
    onPress;
  };

  return (
    <View style={{ margin: 30 }}>
      <Pressable onPress={onPressHandler}>
        <FontAwesome5 name={"back"} size={16} color="black" />
      </Pressable>
      <Text>Settings</Text>
    </View>
  );
}

export default Settings;
