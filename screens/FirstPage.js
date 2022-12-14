import { StyleSheet, View, Text, Button, TextInput } from "react-native";
import React, { useState } from "react";

const FirstPage = ({ navigation }) => {
  const [inputText, setInputText] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Thai-Nichi Institute of Technology</Text>
      <Text style={styles.textStyle}>
        Please insert your name to pass it to second screen
      </Text>
      <TextInput
        style={{ width:200, padding: 10, margin:10, backgroundColor: "#d3d3d3" }}
        value={inputText}
        onChangeText={setInputText}
      />
      <Button 
      title="go next"
      onPress={()=>{
        navigation.navigate('Second', { txt: inputText })
      }}
      />
    </View>
  );
};

export default FirstPage;

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
