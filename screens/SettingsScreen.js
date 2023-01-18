import { View, Text, Button } from "react-native";
import React from "react";
import styles from "../components/styles";

const SettingsScreen = ({navigation}) => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={styles.textTopStyle}>Settting Screen</Text>
      <Button
        title="go to home"
        onPress={() => {
          navigation.navigate("Home");
        }}
      />
    </View>
  );
};

export default SettingsScreen;
