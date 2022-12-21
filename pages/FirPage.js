import { View, Text, SafeAreaView, TextInput, Button } from "react-native";
import React from "react";
import styles from "../components/styles";

const FirPage = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textTopStyle}>This is the First Page</Text>
        <Button
          title="go to second page"
          onPress={() => {
            navigation.navigate("Second Page");
          }}
        />
        <Button
          title="go to third page"
          onPress={() => {
            navigation.navigate("Third Page");
          }}
        />
      </View>
      <View style={{ justifyContent: "flex-end", alignItems: "center" }}>
        <Text style={styles.textBottomStyle}>Thai-Nichi Institute of Technology</Text>
      </View>
    </SafeAreaView>
  );
};

export default FirPage;
