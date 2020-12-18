import React, { Component } from 'react';
import { View } from 'react-native';
import OtpInputs from 'react-native-otp-inputs';
 
export default class Otp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <OtpInputs
          handleChange={(code) => console.log(code)}
          numberOfInputs={6}
        />
      </View>
    );
  }
}