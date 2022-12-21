import { View, Text, SafeAreaView, TextInput, Button } from 'react-native'
import React from 'react'
import styles from "../components/styles";

const SecPage = ({navigation}) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.textTopStyle}>This is Second Page</Text>
        <Button
          title="go to First page"
          onPress={() => {
            navigation.navigate("First Page");
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
  )
}

export default SecPage