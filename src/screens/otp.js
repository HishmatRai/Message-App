import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput, TextPropTypes } from 'react-native';
// import Otp2 from './../componants/otp'
export default function Otp(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="white" hidden={false} backgroundColor="#5382B0" translucent={true} />
      <Text style={styles._heading}>Welcome</Text>
      <Image source={require('./../../assets/logo.png')} style={styles._logo} />

      {/* <Otp2 /> */}
      <TouchableOpacity style={styles._opt_btn} 
       onPress={() => props.navigation.navigate("Moreinterest")}>
        <Text style={styles._opt_btn_Text}>Get OTP</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5382B0',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  _heading: {
    color: "white",
    textAlign: "center",
    fontSize: 30,
    marginTop: 100,
    fontWeight: "bold"
  },
  _logo: {
    height: 150,
    width: 150,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 40
  },
  _opt_btn: {
    width: "40%",
    alignItems: "center",
    backgroundColor: "white",
    alignSelf: "center",
    marginTop: 40,
    borderRadius: 5

  },
  _opt_btn_Text: {
    color: "#5382B0",
    fontSize: 20,
    padding: 17
  }

});
