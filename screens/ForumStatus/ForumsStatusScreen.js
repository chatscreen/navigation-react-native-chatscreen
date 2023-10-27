import { fontawesome5 } from "@expo/vector-icons";
import { text, view, pressable } from "react-native";
function forumstatus({ onpress }) {
  const onpresshandler = () => {
    onpress;
  };

  return (
    <view style={{ margin: 30 }}>
      <pressable onpress={onpresshandler}>
        <fontawesome5 name={"back"} size={16} color="black" />
      </pressable>
      <text>forum status</text>
    </view>
  );
}

export default forumstatus;
