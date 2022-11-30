import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Information from './components/Information'
import Welcome from './components/Welcome'
import Practice1_StyleSheet from './components/Practice1_StyleSheet'
import TxtInput from './components/TxtInput'
import CustomComponent from './components/CustomComponent'
import Logo from './components/Logo'
import LotsOfGreeting from './components/LotsOfGreeting'
import MyCustomTextWith from './components/MyCustomTextWith'
import Count from './components/Count'
import TextInput1 from './components/TextInput1'
import UserNamePassword from './components/UserNamePassword'
const app = () => {
  return (
    <View >
      {/*<Information/>*/}
      {/*<Welcome/>*/}
      {/*<Practice1_StyleSheet/>*/}
      {/*<TxtInput/>*/}
      {/*<CustomComponent/>*/}
      {/*<Logo/>*/}
      {/*<LotsOfGreeting/>*/}
      {/*<MyCustomTextWith/>*/}
      {/*<Count num={2} title='Click'/>*/}
      {/*<TextInput1/>*/}
      <UserNamePassword/>
    </View>
  )
}

export default app

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

