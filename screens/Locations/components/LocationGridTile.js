import {
  Pressable,
  View,
  Text,
  StyleSheet,
  ImageBackground,
} from "react-native";

function CategoryGridTile({ title, color, image }) {
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
        >
          <View style={styles.innerContainer}>
            <View style={{ width: "100%", flexDirection: "row" }}>
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.icon}>icon</Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.address}>address</Text>
              <Text style={styles.visited}>visited</Text>
            </View>
            <View
              style={{
                width: "100%",
                flexDirection: "row",
                justifyContent: "flex-end",
              }}
            >
              <Text style={styles.distance}>distance</Text>
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
  buttonPressed: { opacity: 0.5 },
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
  },
  icon: {
    color: "white",
    backgroundColor: "red",
  },
  address: {
    color: "white",
    backgroundColor: "red",
  },
  visited: {
    color: "white",
    backgroundColor: "blue",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    tintColor: "black",
  },
  distance: {
    color: "white",
    backgroundColor: "pink",
  },
  chatButton: {
    color: "white",
    backgroundColor: "yellow",
  },
});
