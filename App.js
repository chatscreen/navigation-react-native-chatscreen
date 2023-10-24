import { useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from "./shared/components/SlidingSideMenu";

import LocationsScreen from "./screens/Locations/LocationsScreen";
import AboutScreen from "./screens/About/AboutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [width, setWidth] = useState(new Animated.Value(0));

  const toggleMenu = (toValue) => {
    Animated.timing(width, {
      toValue: toValue,
      duration: 100, // Transition duration in milliseconds
      useNativeDriver: false, // Set to true if using native driver
    }).start();
    // Add your logic to toggle the menu here
  };

  toggleMenu(0);

  return (
    <>
      <NavigationContainer>
        <View style={styles.container}>
          <Animated.View
            style={[
              styles.navbarContainer,
              {
                width: width.interpolate({
                  inputRange: [0, 75],
                  outputRange: ["0%", "75%"],
                }),
              },
            ]}
          >
            <Navbar />
          </Animated.View>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Locations" component={LocationsScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
          </Stack.Navigator>
        </View>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
  },
  navbarContainer: {
    overflow: "hidden",
  },
  contentContainer: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
