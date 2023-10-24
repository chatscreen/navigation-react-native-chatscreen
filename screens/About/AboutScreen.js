import { Button } from "react-native";
import { View, Text, StyleSheet, Pressable, Image } from "react-native";
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

  console.log(image);

  return (
    <View style={styles.container}>
      <Button
        title="back"
        onPress={() => {
          navigation.navigate("Locations");
        }}
      />
      {/*<Text>{catId}</Text>*/}
      {/*<Text>{title}</Text>*/}
      {/*<Text>{image}</Text>*/}
      {/*<Text>{address}</Text>*/}
      {/*<Text>{visited}</Text>*/}
      {/*<Text>{distance}</Text>*/}
      {/*<Text>{type}</Text>*/}
      {/*<Text>{color}</Text>*/}
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.bottomBox} />
    </View>
  );
}
export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  image: {
    flex: 0.3,
    backgroundColor: "red",
  },
  bottomBox: {
    flex: 0.7,
    backgroundColor: "blue",
    borderRadius: 10,
    position: "absolute",
    bottom: -5,
    left: 5,
    right: 5,
  },
});
