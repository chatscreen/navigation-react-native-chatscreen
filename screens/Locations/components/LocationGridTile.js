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
                  marginTop: 5,
                }}
              >
                <FontAwesome5 name={type} size={16} color="#fff" />
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
              <Text style={styles.chatButton}>OPEN CHAT</Text>
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
    margin: 20,
    top: -15,
    marginBottom: 0,
    height: 200,
    borderRadius: 20,
    elevation: 3,
    shadowColor: "black",
    //shadowOpacity: 0.5,
    //shadowOffset: { width: 0, height: 2 },
    //shadowRadius: 8,
    overflow: "hidden",
    flexDirection: "column",
    backgroundColor: "black",
  },
  button: {
    flex: 1,
  },
  //buttonPressed: { opacity: 0.5 backgroundColor: "white" },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
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
    paddingBottom: 2,
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4,
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  distance: {
    color: "white",
    fontWeight: "bold",
    paddingBottom: 15,
  },
  chatButton: {
    color: "black",
    backgroundColor: "white",
    padding: 7,
    paddingHorizontal: 10,
    borderRadius: 30,
    fontSize: 18,
    opacity: 0.6,
    width: "auto",
    fontWeight: "bold",
  },
});
