import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Alert,
} from "react-native";
import React from "react";

const AlertExample = () => {

    const simpleAlertHandler = () => {
        alert('Hello I am Simple Alert');
    }

    const twoOptionAlertHandler = () => {
        Alert.alert(
            //title
            'Hello',
            //body
            'I am two option aleret.Do you want to cancel me?',
            [
                {
                    text:'Yes',
                    onPress: ()=>alert('Yes Pressed')
                },
                {
                    text:'No',
                    onPress: ()=>alert('No Pressed')
                },
            ],
            {camcelable:false}

        )
    }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Button 
        title="Simple Alert"
        onPress={simpleAlertHandler}
        />
        <Button 
        title="Alert with Two Options"
        onPress={twoOptionAlertHandler}
        />
      </View>
    </SafeAreaView>
  );
};

export default AlertExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "#ecf0f1",
  },
});
