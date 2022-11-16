import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Information = () => {
  return (
    <View style={styles.container}>
      <Text>React Native with Thai-Nichi</Text>
      <Text>By...Kanjanachai Yaowarat</Text>
      <Text>Student Id: 1913110191</Text>
      <Text>Major: INformation Technology</Text>
    </View>
  )
}

export default Information

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor:"#add8e6",
      alignItems:"center",
      justifyContent:"center"
    }
  })