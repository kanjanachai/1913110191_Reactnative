import { View, Text, Button } from "react-native";
import React from "react";
import {Ionicons, FontAwesome} from '@expo/vector-icons'

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Ionicons name="home" size={40} color="#00008b"/>
      <Text style={{margin:8}}>Home Screen</Text>
      <Button
        title="เกี่ยวกับเรา"
        color={"#6495ed"}
        onPress={() => navigation.navigate("About", {
            email:'reactnative@tni.ac.th'
        })}
      />
    </View>
  );
};

export default HomeScreen;
