import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
export default function Call(props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="white" hidden={false} backgroundColor="#5382B0" translucent={true} />
            {/* ---------------- > STORY SHOW <------------------- */}
<View style={{margin:20}}>
    <View style={styles._call_main}>
        <View style={styles._profile_main}>
        <Image source={require('./../../assets/call.png')} style={styles._user_profile} />
        <Text style={styles._profile_status}></Text>
        </View>
        <View style={styles._name_main}>
            <View style={{flexDirection:"row"}}>
            <Text style={styles._name}>Vilme</Text>
            <Text style={styles._status2}></Text>
            </View>
            <View style={{flexDirection:"row"}}>
            <Feather name="arrow-down-left" size={24} color="#FB0909" />
                <Text>Yesterday</Text>
            </View>
        </View>
        <View style={styles._call_icon_main}>
        <Ionicons name="ios-call" size={24} color="#5382B0" />
        </View>
    </View>
</View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
  _profile_main:{
      width: "20%",
  },
  _name_main:{
    width: "68%",
    paddingLeft:10
  },
  _call_icon_main:{
    width: "10%",
  },
  _call_main:{
      flexDirection:"row",
      justifyContent:"center",
      alignItems:"center"
  },
  _user_profile:{
      width:66,
      height:66,
      borderRadius:100
  },
  _profile_status:{
      backgroundColor:"#5382B0",
      width:20,
      height:20,
      borderRadius:100,
      marginTop:-14,
      marginLeft:40
  },
  _name:{
      fontWeight:"bold"
  },
  _status2:{
      width:5,
      height:5,
      borderRadius:100,
      backgroundColor:"#5382B0"
  }
});

