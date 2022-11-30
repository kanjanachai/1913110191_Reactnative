import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  SafeAreaView,
} from "react-native";
import React, { useState } from "react";

const TextInput1 = () => {
  const [userName, setUserName] = useState("");

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>Insert any text in below input</Text>
        <TextInput
          value={userName}
          onChangeText={(userName) => {
            setUserName(userName);
          }}
          placeholder={"input userName"}
          style={styles.input}
        />
        <text style={{ color: "blue" }}>{userName}</text>
      </View>
    </SafeAreaView>
  );
};

export default TextInput1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#ffffff",
  },

  input: {
    width: 250,
    height: 44,
    padding: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "#e8e8e8",
  },
});
