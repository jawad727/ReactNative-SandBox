import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Home } from "./screens/Home"
import Constants from "expo-constants"
import { CreateEmployee } from "./screens/CreateEmployee"
import { Profile } from "./screens/Profile"

export default function App() {
  return (
    <View style={styles.container}>
      {/* <CreateEmployee /> */}
      {/* <Home /> */}
      <Profile />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
    marginTop: Constants.statusBarHeight,
  }
})

