import { StyleSheet, View, Text } from "react-native";
import React from "react";

const SecondPage = ({ route }) => {
  return (
    <View>
      <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
      <Text style={styles.textStyle}>Values passed from First page : {route.params?.txt} </Text>
    </View>
  );
};

export default SecondPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: "center",
    marginVertical: 10,
  },
  textStyle: {
    textAlign: "center",
    fontSize: 16,
    marginVertical: 10,
  },
});
