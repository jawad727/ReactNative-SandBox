import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Home } from "./screens/Home"
import Constants from "expo-constants"
import { CreateEmployee } from "./screens/CreateEmployee"
import { Profile } from "./screens/Profile"

import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"

const Stack = createStackNavigator()

const myOptions = {
  title: "My sweet Home",
  headerTintColor: "white",
  headerStyle: {
    backgroundColor: "#0033ff",
  }
}

function App() {
  return (
    <View style={styles.container}>
      <Stack.Navigator>
        <Stack.Screen 
          name="Home" 
          component={Home} 
          options={ myOptions } />
        <Stack.Screen 
          name="Create" 
          component={CreateEmployee}
          options={{ ...myOptions, title: "Create Employee" }} />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{ ...myOptions, title: "Profile" }} />
      </Stack.Navigator>
    </View>
  );
}

export default  () =>
 {
   return (
     <NavigationContainer>
      <App />
     </NavigationContainer>
   )
 }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ededed",
    marginTop: Constants.statusBarHeight,
  }
})

