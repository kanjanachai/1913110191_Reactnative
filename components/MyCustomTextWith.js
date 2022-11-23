import { View, Text } from 'react-native'
import React from 'react'

const Custom = ({Fname, Lname}) => {
    return(
        <View>
            <Text>Your First Name is {Fname}! and Last Name is {Lname}</Text>
        </View>
    );
}

const MyCustomTextWith = () => {
  return (
    <View>
      <Custom Fname ="Kanjanachai" Lname ="Yaowarat"/>
      <Custom Fname ="Jiraporn" Lname ="Tubchum"/>
    </View>
  )
}

export default MyCustomTextWith