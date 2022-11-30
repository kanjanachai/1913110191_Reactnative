import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button, TextInput } from "react-native-web";
import { useState } from "react";

const UserNamePassword = () => {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");

  const checkTextInput = () => {
    //Check for the Name TextInput

    if (!Name.trim()) {
      alert("Please Enter Name");

      return;
    }
    if (!Email.trim()) {
      alert("Please Enter Email");

      return;
    } else {
      alert("Success");
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        value={Name}
        onChangeText={(Name) => {
          setName(Name);
        }}
        style={styles.textInputStyle}
        placeholder="Enter Name"
      />
      <TextInput
        value={Email}
        onChangeText={(Email) => {
          setEmail(Email);
        }}
        style={{ marginBottom: 15, ...styles.textInputStyle }}
        placeholder="Enter Email"
      />

      <Button title="SUBMIT" onPress={checkTextInput}  color='gray'/>
    </View>
  );
};

export default UserNamePassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },

  textInputStyle: {
    width: "100%",
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
  },
});
