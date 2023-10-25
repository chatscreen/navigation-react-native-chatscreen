import { Button } from "react-native";
import { Ionicons, FontAwesome5 } from "@expo/vector-icons";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Meals } from "../../data/dummy-data";
function AboutScreen({ route }) {
  const navigation = useNavigation();

  const catId = route.params.categoryId;
  const title = route.params.title;
  const image = route.params.image;
  const address = route.params.address;
  const visited = route.params.visited;
  const distance = route.params.distance;
  const type = route.params.type;
  const color = route.params.color;

  StatusBar.setBarStyle("light-content", true);

  return (
    <View style={styles.container}>
      <Pressable
        style={{ left: 10, top: 75, zIndex: 1 }}
        onPress={() => {
          navigation.navigate("Locations");
        }}
      >
        <Ionicons name="arrow-back-sharp" size={40} color="white" />
      </Pressable>
      {/*<Text>{image}</Text>*/}
      {/*<Text>{address}</Text>*/}
      {/*<Text>{visited}</Text>*/}
      {/*<Text>{distance}</Text>*/}
      {/*<Text>{color}</Text>*/}
      <View
        style={{
          position: "absolute",
          zIndex: 1,
          top: 140,
          alignSelf: "center",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 30,
            color: "white",
            marginRight: 10,
          }}
        >
          {title}
        </Text>
        <View
          style={{
            borderRadius: 50,
            backgroundColor: color,
            height: 35,
            width: 35,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesome5 name={type} size={20} color="white" />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          width: "100%",
          top: 230,
          left: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          zIndex: 3,
        }}
      >
        <Text
          style={{
            color: "white",
            marginLeft: 10,
            marginTop: 25,
            fontWeight: "bold",
          }}
        >
          {distance} km
        </Text>
        <Text style={styles.visited}>Visited {visited} times</Text>
      </View>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.bottomBox} />
    </View>
  );
}
export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: -45,
    backgroundColor: "black",
  },
  image: {
    flex: 0.3,
    opacity: 0.7,
  },
  bottomBox: {
    flex: 0.7,
    backgroundColor: "white",
    borderRadius: 10,
    bottom: 5,
  },
  visited: {
    color: "white",
    backgroundColor: "#5F6FEE",
    position: "absolute",
    right: -16,
    width: 130,
    textAlign: "center",
    marginRight: 14,
    padding: 2,
    fontWeight: "bold",
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
  },
});
