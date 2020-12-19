import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, ScrollView, ImageBackground } from 'react-native';
import Otp2 from './../componants/otp'
const image = { uri: './../../assets/bc_image.png' };
export default function Otp(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="white" hidden={false} backgroundColor="#5382B0" translucent={true} />
<ScrollView>
      <ImageBackground source={require("./../../assets/bc_image.png")} style={styles.image}>
        <Image source={require('./../../assets/logo.png')} style={styles._logo} />
      </ImageBackground>
      <Text style={styles._enter_otp}>
        Enter OTP
      </Text>
      <View style={styles._otp_put_main}>
      <Otp2 />
      </View>
      <Text style={styles._code_not_rec}>Did not receive the code?</Text>
      <View style={styles._btn_main}>
        <TouchableOpacity style={styles._btn}
         onPress={() => props.navigation.navigate("AllChat")}>
          <Text style={styles._btn_txt}>Re-send</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles._btn}
         onPress={() => props.navigation.navigate("AllChat")}>
          <Text style={styles._btn_txt}>Get a call now</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4FCFF',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    // flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    width: "100%",
    height: 325
  },
  _logo: {
    height: 150,
    width: 150,
    marginTop: 50,
    marginBottom: 40,
    justifyContent: "flex-start",
    marginLeft: 40
  },
  _enter_otp: {
    fontWeight: "bold",
    color: "#5382B0",
    justifyContent: "center",
    textAlign: "center",
    marginTop: 20,
    fontSize: 20
  },
  _otp_put_main: {
    backgroundColor: "#7DA7CA",
    borderRadius: 5,
    width: "80%",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 30

  },
  _code_not_rec: {
    textAlign: "center",
    marginTop: 10,
    fontSize: 20
  },
  _btn_main:{
    flexDirection:"row",
    justifyContent:"space-around",
    marginTop:10
  },
  _btn:{
    // backgroundColor:"red"
  },
  _btn_txt:{
    color:"#5382B0",
    padding:10
  }

});
