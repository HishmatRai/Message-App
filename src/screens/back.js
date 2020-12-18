import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import ToggleButton from './../componants/toggleButton'
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
export default function Back(props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="white" hidden={false} backgroundColor="#5382B0" translucent={true} />

            {/* >>>>>>>>>>>>>>>>> HEADER <<<<<<<<<<<<<<<<<<< */}
            <View style={styles._header_main_view}>
                <View style={styles._heading_icons_main}>
                    <View style={{ flexDirection: "row" }}>
                        <TouchableOpacity
                            onPress={() => props.navigation.goBack()}>
                            <AntDesign name="arrowleft" size={24} color="white" style={{ marginTop: 5 }} />
                        </TouchableOpacity>
                        <Text style={styles._heading_text}>Back</Text>
                    </View>
                    {/*  */}
                </View>
            </View>
            {/* >>>>>>>>>>>>>>>>>>> <<<<<<<<<<<<<<<<<<<<<<<< */}
            <ScrollView>
                <View style={{ margin: 20 }}>
                    <Image source={require('./../../assets/hsbc.png')} style={styles._hsbc} />
                    <Text style={styles._last_update}>Last Updated balance</Text>
                    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                        <View>
                            <Text style={styles._amount}>$62,825</Text>
                            <View style={{ flexDirection: "row", alignItems: 'center' }}>
                                <Ionicons name="ios-checkbox-sharp" size={24} color="green" />
                                <Text style={styles._primary}>Primary</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles._refrest_btn}>
                            <Ionicons name="refresh" size={24} color="white" />
                        </TouchableOpacity>
                    </View>

                    <View style={styles._card_main}>
                        <View style={styles._card}>
                            <TouchableOpacity style={styles._icons_btn} >
                            <FontAwesome name="plus-square-o" size={24} color="#5382B0" />
                            </TouchableOpacity>
                            <Text>$3.500</Text>
                        </View>
                        <View style={styles._card}>
                        <TouchableOpacity style={styles._icons_btn} >
                            <FontAwesome name="plus-square-o" size={24} color="#5382B0" />
                            </TouchableOpacity>
                            <Text>$63,520</Text>
                        </View>
                        <View style={styles._card}>
                        <TouchableOpacity style={styles._icons_btn} >
                            <FontAwesome name="plus-square-o" size={24} color="#5382B0" />
                            </TouchableOpacity>
                            <Text>36,258</Text>
                        </View>
                        <View style={styles._card}>
                        <TouchableOpacity style={styles._icons_btn} >
                            <FontAwesome name="plus-square-o" size={24} color="#5382B0" />
                            </TouchableOpacity>
                            <Text>67,234</Text>
                        </View>
                    </View>

                    <View style={styles._send_btn_main}>
                        <TouchableOpacity style={styles._send_btn}>
                            <Text style={styles._btn_Text}>Send</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles._request_btn}>
                            <Text style={styles._btn_Text}>Request</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    _header_main_view: {
        backgroundColor: "#5382B0",
    },
    _heading_icons_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 40,
        paddingBottom: 20,
    },
    _heading_text: {
        color: "white",
        fontSize: 23,
        fontWeight: 'bold',
        marginLeft: 20
    },
    _hsbc: {
        width: 65,
        height: 37
    },
    _last_update: {
        color: "gray",
        fontWeight: "bold"
    },
    _amount: {
        fontWeight: "bold",
        fontSize: 30,
        marginTop: 5,
        marginBottom: 5
    },
    _refrest_btn: {
        backgroundColor: "#1E32FA",
        width: 50,
        height: 50,
        borderRadius: 100,
        alignSelf: "center",
        justifyContent: "center",
        alignItems: "center"
    },
    _primary: {
        fontWeight: "bold",
        fontSize: 24,
        marginLeft: 10
    },
    _card_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop:20
    },
    _card: {
        backgroundColor: "#EEF7FB",
        borderRadius: 10,
        padding: 10
    },
    _icons_btn:{
        backgroundColor:"white",
        borderRadius:100,
        width:45,
        height:45,
        alignItems:"center",
        justifyContent:"center"
    },
    _send_btn_main:{
    flexDirection:"row",
    justifyContent:"space-between",
    marginTop:40
    },
    _send_btn:{
        backgroundColor:"#5382B0",
        width: "45%",
        borderRadius:5,
        textAlign:"center",
        alignItems:"center"
    },
    _request_btn:{
        backgroundColor:"#17C261",
        width: "45%",
        borderRadius:5,
        textAlign:"center",
        alignItems:"center"
    },
    _btn_Text:{
        color:"white",
        fontWeight:"bold",
        paddingBottom:10,
        paddingTop:10,
        fontSize:20
    }
});
