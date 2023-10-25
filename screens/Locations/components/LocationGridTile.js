import {
  Pressable,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

import { FontAwesome5 } from "@expo/vector-icons";

function CategoryGridTile({
  title,
  image,
  address,
  visited,
  distance,
  type,
  color,
  onPress,
}) {
  const backgroundImage = {
    uri: image,
  };
  return (
    <View style={[styles.gridItem]}>
      <ImageBackground
        source={backgroundImage}
        resizeMode="cover"
        style={styles.image}
      >
        <Pressable
          android_ripple={{ color: "#ccc" }}
          style={({ pressed }) => [
            styles.button,
            pressed ? styles.buttonPressed : null,
          ]}
          onPress={onPress}
        >
          <View style={styles.innerContainer}>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={styles.title}>{title}</Text>
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
                <FontAwesome5 name={type} size={20} color="#fff" />
              </View>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.address}>{address}</Text>
              <Text style={styles.visited}>visited {visited} times</Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Text style={styles.distance}>{distance} km</Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",

                justifyContent: "flex-end",
              }}
            >
              <Text style={styles.chatButton}>open chat</Text>
            </View>
          </View>
        </Pressable>
      </ImageBackground>
    </View>
  );
}

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 14,
    marginBottom: 0,
    height: 200,
    borderRadius: 14,
    elevation: 4,
    backgroundColor: "black",
    shadowColor: "black",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: "hidden",
    flexDirection: "column",
  },
  button: {
    flex: 1,
  },
  //buttonPressed: { opacity: 1, backgroundColor: "black" },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.55)",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    color: "white",
    paddingRight: 10,
  },
  icon: {
    color: "white",
  },
  address: {
    color: "white",
  },
  visited: {
    color: "white",
    backgroundColor: "#5F6FEE",
    position: "absolute",
    right: -16,
    width: 130,
    textAlign: "center",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    tintColor: "black",
  },
  distance: {
    color: "white",
    fontWeight: "bold",
  },
  chatButton: {
    color: "black",
    backgroundColor: "white",
    padding: 8,
    borderRadius: 30,
    fontSize: 20,
    width: 110,
    opacity: 0.7,
  },
});
