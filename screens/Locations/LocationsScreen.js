import { Text, View, FlatList, StyleSheet, Dimensions } from "react-native";
import LocationGridTile from "./components/LocationGridTile";
import LocationsHeader from "./components/LocationsHeader";
import { CATEGORIES } from "../../data/dummy-data";
import { useNavigation } from "@react-navigation/native";

// helper function to keep the main jsx cleaner
const screenWidth = Dimensions.get("window").width;

function LocationsScreen({ navigation, onPress }) {
  function renderLocationItem(itemData) {
    function pressHandler() {
      navigation.navigate("LocationInfo", {
        categoryId: itemData.item.id,
        title: itemData.item.title,
        image: itemData.item.image,
        address: itemData.item.address,
        visited: itemData.item.visited,
        distance: itemData.item.distance,
        type: itemData.item.type,
        color: itemData.item.color,
        about: itemData.item.about,
        price: itemData.item.price,
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
        <FlatList
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
