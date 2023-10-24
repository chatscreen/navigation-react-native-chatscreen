import { View, Text, StyleSheet } from "react-native";
import { Meals } from "../../data/dummy-data";
function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text>Meals Overview Screen</Text>
    </View>
  );
}
export default AboutScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
});
