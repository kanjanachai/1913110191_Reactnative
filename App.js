import { View, Text, Button } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "./screens/HomeScreen"
import SettingsScreen from "./screens/SettingsScreen";

import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

/* function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Home!</Text>
      <Button
          title="go to Settings"
          onPress={() => {
            navigation.navigate("Settings");
          }}
        />
    </View>
  );
} */

// function SettingsScreen({navigation}) {
//   return (
//     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
//       <Text>Settings!</Text>
//       <Button
//           title="go to Home"
//           onPress={() => {
//             navigation.navigate("Home");
//           }}
//         />
//     </View>
//   );
// }

const Tab = createBottomTabNavigator();

function MyTabs(){
  return(
    <Tab.Navigator
    screenOptions={({route})=>({
      tabBarIcon:({focused, color, size})=>{
        let iconName;
        if(route.name === 'Home'){
          iconName = focused
          ?'ios-information-circle'
          :'ios-information-circle-outline'
        }else if(route.name === 'Settings'){
            iconName = focused
            ?'ios-list-box'
            :'ios-list'
        }
        //you can return any component that here!
        return <Ionicons name={iconName} size={size} color={color}/>

      },
      tabBarActiveTintColor:'tomato',
      tabBarInactiveTintColor:'gray'

    })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Settings" component={SettingsScreen}/>
    </Tab.Navigator>
  )
}
function MyTabs2(){
  return(
    <Tab.Navigator
    screenOptions={({route})=>({
      tabBarIcon:({focused, color, size})=>{
        let iconName;
        if(route.name === 'Home'){
          iconName = focused
          ?'ios-information-circle'
          :'ios-information-circle-outline'
        }else if(route.name === 'Settings'){
            iconName = focused
            ?'ios-list-box'
            :'ios-list'
        }
        //you can return any component that here!
        return <Ionicons name={iconName} size={size} color={color}/>

      },
      tabBarActiveTintColor:'tomato',
      tabBarInactiveTintColor:'gray'

    })}
    >
      <Tab.Screen name="Home" component={HomeScreen}/>
      <Tab.Screen name="Settings" component={SettingsScreen}/>
      
    </Tab.Navigator>
  )
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
    screenOptions={{
      drawerActiveTintColor:"tomato"
    }}
      // useLegacyImplementation
      // drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={MyTabs} />
      <Drawer.Screen name="Settings" component={MyTabs2} />
    </Drawer.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer/>
    </NavigationContainer>
  );
};

export default App;
