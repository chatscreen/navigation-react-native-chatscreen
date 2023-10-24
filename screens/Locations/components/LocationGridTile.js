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
            <Text style={styles.title}>{title}</Text>
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
  },
  button: {
    flex: 1,
  },
  buttonPressed: { opacity: 0.5 },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  title: {
    fontWeight: "bold",
    fontSize: 28,
    color: "white",
  },
  image: {
    flex: 1,
    justifyContent: "center",
    tintColor: "black",
  },
});
