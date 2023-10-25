import { Text, View, FlatList, StyleSheet, Dimensions } from "react-native";
import LocationGridTile from "./components/LocationGridTile";
import LocationsHeader from "./components/LocationsHeader";
import { CATEGORIES } from "../../data/dummy-data";

// helper function to keep the main jsx cleaner
const screenWidth = Dimensions.get("window").width;

function LocationsScreen({ navigation, onPress }) {
  function renderLocationItem(itemData) {
    function pressHandler() {
      navigation.navigate("About", {
        categoryId: itemData.item.id,
        title: itemData.item.title,
        image: itemData.item.image,
        address: itemData.item.address,
        visited: itemData.item.visited,
        distance: itemData.item.distance,
        type: itemData.item.type,
        color: itemData.item.color,
      });
    }
    return (
      <LocationGridTile
        image={itemData.item.image}
        title={itemData.item.title}
        address={itemData.item.address}
        visited={itemData.item.visited}
        distance={itemData.item.distance}
        type={itemData.item.type}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View style={styles.container}>
      <View>
        <LocationsHeader onPress={onPress} />
        <View
          style={{
            positon: "absolute",
            opacity: 0.9,
            height: 6,
            marginBottom: 0,
            marginTop: 15,
            backgroundColor: "white",
            zIndex: 1,
          }}
        />
        <FlatList
          style={{ marginTop: -6 }}
          data={CATEGORIES}
          keyExtractor={(item) => item.id}
          renderItem={renderLocationItem}
        />
      </View>
    </View>
  );
}

export default LocationsScreen;

const styles = StyleSheet.create({
  container: { width: screenWidth },
});
