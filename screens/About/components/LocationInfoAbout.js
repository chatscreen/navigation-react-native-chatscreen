import { FontAwesome5 } from "@expo/vector-icons";
import { View, Text, StyleSheet } from "react-native";
const LocationAbout = ({ address, about, price }) => {
  return (
    <View style={styles.container}>
      <View style={styles.segmentConataner}>
        <Text style={styles.openingHours}>Opening Hours</Text>
        <Text>
          Today:
          <Text style={styles.boldBlack}> Open</Text> - Closes 19:00
        </Text>
        <View style={styles.row}>
          <Text style={styles.boldBlue}>View all hours</Text>
          <View style={{ marginTop: 3, paddingLeft: 5, fontSize: 17 }}>
            <FontAwesome5 name="angle-down" size={20} color="#5F6FEE" />
          </View>
        </View>
      </View>
      <View style={styles.segmentConataner}>
        <Text style={styles.boldBlack}>Location</Text>
        <Text style={styles.lightBlack}>{address}</Text>
        <View style={styles.row}>
          <Text style={styles.boldBlue}>Get directions</Text>
        </View>
      </View>
      <View style={styles.segmentConataner}>
        <Text style={styles.boldBlack}>About</Text>
        <Text style={styles.mediumBlack}>
          Price range: <Text style={styles.price}>{price}</Text>
        </Text>
        <Text style={styles.lightBlack}>{about}</Text>
      </View>
    </View>
  );
};

export default LocationAbout;

const styles = StyleSheet.create({
  container: { paddingLeft: 30 },
  segmentConataner: { paddingTop: 20 },
  openingHours: { fontWeight: "bold", fontSize: 17 },
  boldBlue: { fontWeight: "bold", fontSize: 17, color: "#5F6FEE" },
  boldBlack: { fontWeight: "bold", fontSize: 17 },
  mediumBlack: { fontWeight: "600", fontSize: 17 },
  lightBlack: { fontSize: 17 },
  row: { flexDirection: "row" },
  price: { fontSize: 15 },
});
