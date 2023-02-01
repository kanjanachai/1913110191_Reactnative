import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import ProductScreen from "./screens/ProductScreen";
import DetailScreen from "./screens/DetailScreen";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import {createNativeStackNavigator} from '@react-navigation/native-stack'


function CloseDrawer(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label="Close Drawer"
        onPress={() => props.navigation.closeDrawer()}
      />
    </DrawerContentScrollView>
  );
}

const Stack = createNativeStackNavigator();

function ProductStack(){
  return(
    <Stack.Navigator
    screenOptions={{
      headerStyle:{
        backgroundColor:'#4169e1'
      },
      headerTintColor:'#ffffff'
    }}
    >
      <Stack.Screen name="Product" component={ProductScreen}/>
      <Stack.Screen name="Detail" component={DetailScreen}/>
    </Stack.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle:{
          backgroundColor:'#000080'
        },
        headerTintColor:'#ffffff',
        drawerActiveTintColor: "tomato",
      }}
      useLegacyImplementation
      drawerContent={(props) => <CloseDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Product" component={ProductStack} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
