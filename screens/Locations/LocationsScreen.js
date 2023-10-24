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
