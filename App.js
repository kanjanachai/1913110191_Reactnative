import { StyleSheet, Text, View, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "./screens/HomeScreen";
import AboutScreen from "./screens/AboutScreen";

import HomePost from "./screens/HomePost";
import CreatePost from "./screens/CreatePost";

import FirstPage from "./screens/FirstPage";
import SecondPage from "./screens/SecondPage";

/* function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home Screen</Text>
      <Button 
      title="เกี่ยวกับเรา"
      onPress={()=> navigation.navigate('About')}/>
    </View>
  );
}

function AboutScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>About Screen</Text>
    </View>
  );
} */

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#4b0082",
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        {/* <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} /> */}

        {/* <Stack.Screen name="Home" component={HomePost} />
        <Stack.Screen name="Create" component={CreatePost} /> */}

        <Stack.Screen name="First" component={FirstPage} />
        <Stack.Screen name="Second" component={SecondPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
