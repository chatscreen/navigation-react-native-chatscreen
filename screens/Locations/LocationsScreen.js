import { Text, View, FlatList } from "react-native";
import LocationGridTile from "./components/LocationGridTile";
import LocationsHeader from "./components/LocationsHeader";
import { CATEGORIES } from "../../data/dummy-data";

// helper function to keep the main jsx cleaner
function renderLocationItem(itemData) {
  return (
    <LocationGridTile
      image={itemData.item.image}
      title={itemData.item.title}
      address={itemData.item.address}
      visited={itemData.item.visited}
      distance={itemData.item.distance}
      type={itemData.item.type}
      color={itemData.item.color}
    />
  );
}

function LocationsScreen() {
  return (
    <View>
      <LocationsHeader />
      <View>
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
