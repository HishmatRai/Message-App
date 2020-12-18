import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
export default function Welcome(props) {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="white" hidden={false} backgroundColor="#5382B0" translucent={true} />
      <Text style={styles._heading}>Welcome</Text>
      <Image source={require('./../../assets/logo.png')} style={styles._logo} />
      <View style={styles._number_input}>
        <FontAwesome name="phone" size={24} color="white" style={styles._phone_icon} />
        <TextInput
          style={styles._textInput}
          keyboardType='numeric'
          placeholder="Enter Mobile No."
          placeholderTextColor="white"
        />
      </View>
      <TouchableOpacity style={styles._opt_btn} 
       onPress={() => props.navigation.navigate("Otp")}>
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
  _number_input: {
    backgroundColor: "#7DA7CA",
    flexDirection: "row",
    width: "80%",
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5
  },
  _textInput: {
    width: "90%",
    padding: 10,
    fontWeight: "bold",
    color: "white"
  },
  _phone_icon: {
    marginLeft: 10
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
