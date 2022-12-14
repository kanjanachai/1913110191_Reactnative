import { View, Text, Button } from 'react-native'
import React from 'react'

const HomePost = ({navigation, route}) => {
  return (
    <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
      <Button title="Create Post"
      onPress={()=> navigation.navigate('Create')}/>
      <Text style={{margin:10}}>Post : {route.params?.Post} </Text>
    </View>
  )
}

export default HomePost