import { useState } from "react";
import { StyleSheet, Text, View, Animated } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Navbar from "./shared/components/SlidingSideMenu";

import LocationsScreen from "./screens/Locations/LocationsScreen";
import LocationInfo from "./screens/LocationInfo/LocationInfoScreen";
import NewsFeedScreen from "./screens/Newsfeed/NewsFeedScreen";
import ProfileScreen from "./screens/Profile/ProfileScreen";
import ForumStatusScreen from "./screens/ForumStatus/ForumsStatusScreen";
import HighScores from "./screens/HighScores/HighScoresScreen";
import SettingsScreen from "./screens/Settings/SettingsScreen";
import Feedback from "./screens/Feedback/FeedBackScreen";
import AboutScreen from "./screens/About/AboutScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const [width, setWidth] = useState(new Animated.Value(0));

  const toggleMenu = (toValue) => {
    Animated.timing(width, {
      toValue: toValue,
      duration: 400,
      useNativeDriver: false,
    }).start();
  };

  const toggleMenuHandler = () => {
    toggleMenu(75);
  };

  const toggleMenuClose = () => {
    toggleMenu(0);
  };

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
            <Navbar toggleMenuClose={toggleMenuClose} />
          </Animated.View>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}
          >
            <Stack.Screen name="Locations">
              {(props) => (
                <LocationsScreen {...props} onPress={toggleMenuHandler} />
              )}
            </Stack.Screen>
            <Stack.Screen
              name="LocationInfo"
              onPress={toggleMenuHandler}
              component={LocationInfo}
            />
            <Stack.Screen name="Newsfeed">
              {(props) => (
                <NewsFeedScreen {...props} onPress={toggleMenuHandler} />
              )}
            </Stack.Screen>
            <Stack.Screen name="Profile">
              {(props) => (
                <ProfileScreen {...props} onPress={toggleMenuHandler} />
              )}
            </Stack.Screen>
            <Stack.Screen name="ForumStatus">
              {(props) => (
                <ForumStatusScreen {...props} onPress={toggleMenuHandler} />
              )}
            </Stack.Screen>
            <Stack.Screen name="HighScores">
              {(props) => <HighScores {...props} onPress={toggleMenuHandler} />}
            </Stack.Screen>
            <Stack.Screen name="Settings">
              {(props) => (
                <SettingsScreen {...props} onPress={toggleMenuHandler} />
              )}
            </Stack.Screen>
            <Stack.Screen name="Feedback">
              {(props) => <Feedback {...props} onPress={toggleMenuHandler} />}
            </Stack.Screen>
            <Stack.Screen name="About">
              {(props) => (
                <AboutScreen {...props} onPress={toggleMenuHandler} />
              )}
            </Stack.Screen>
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
});
