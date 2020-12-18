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
                </View>
                <View style={styles._send_btn_main}>
                    <TouchableOpacity style={styles._send_btn}>
                        <Text style={styles._btn_Text}>Send</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles._request_btn}>
                        <Text style={styles._btn_Text}>Request</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
                <View style={styles._bottom_}>
                    <View style={styles._card_bc_color}>
                <Text style={styles._data}>October 28, Wednesday</Text>
                        <View style={{ flexDirection: "row", alignSelf: "center", alignItems: "center", marginTop: 20 }}>
                            <View style={styles._profile_main}>
                                <Image source={require('./../../assets/cards.png')} style={styles._user_profile} />
                            </View>
                            <View style={styles._user_details}>
                                <Text style={styles._user_name}>Amazon Pantry</Text>
                                <Text style={{ color: "gray" }}>Subscription Payment</Text>
                            </View>
                            <View style={styles._value}>
                                <Text style={styles._red_value}>-200</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignSelf: "center", alignItems: "center", marginTop: 20 }}>
                            <View style={styles._profile_main}>
                                <Image source={require('./../../assets/cards.png')} style={styles._user_profile} />
                            </View>
                            <View style={styles._user_details}>
                                <Text style={styles._user_name}>Risa Midyet </Text>
                                <Text style={{ color: "gray" }}>Gift for Chirstman</Text>
                            </View>
                            <View style={styles._value}>
                                <Text style={{ color: "green" }}>+1,000</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: "row", alignSelf: "center", alignItems: "center", marginTop: 20 }}>
                            <View style={styles._profile_main}>
                                <Image source={require('./../../assets/cards.png')} style={styles._user_profile} />
                            </View>
                            <View style={styles._user_details}>
                                <Text style={styles._user_name}>Johan Smith</Text>
                                <Text style={{ color: "gray" }}>Gift for you</Text>
                            </View>
                            <View style={styles._value}>
                                <Text style={styles._red_value}>-600</Text>
                            </View>
                        </View>

                        <View style={styles._qr_main}>
                            <TouchableOpacity style={styles._qr_scaner_btn}>
                            <Ionicons name="md-qr-code" size={24} color="black" />
                            </TouchableOpacity>
                            <Text>Scan</Text>
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
        marginTop: 10
    },
    _card: {
        backgroundColor: "#EEF7FB",
        borderRadius: 10,
        padding: 10
    },
    _bottom_:{
position:"absolute",
bottom:0,
borderTopLeftRadius:10,
borderTopRightRadius:10
    },
    _icons_btn: {
        backgroundColor: "white",
        borderRadius: 100,
        width: 45,
        height: 45,
        alignItems: "center",
        justifyContent: "center"
    },
    _send_btn_main: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 10,
        marginLeft:20,
        marginRight:20
    },
    _send_btn: {
        backgroundColor: "#5382B0",
        width: "45%",
        borderRadius: 5,
        textAlign: "center",
        alignItems: "center"
    },
    _request_btn: {
        backgroundColor: "#17C261",
        width: "45%",
        borderRadius: 5,
        textAlign: "center",
        alignItems: "center"
    },
    _btn_Text: {
        color: "white",
        fontWeight: "bold",
        paddingBottom: 10,
        paddingTop: 10,
        fontSize: 20
    },
    _card_bc_color: {
        backgroundColor: "#E0EFF6",
        borderRadius: 10,
        marginTop: 5,
        padding: 5,
        paddingBottom: 20,

    },
    _user_details: {
        marginLeft: 10,
        marginRight: 10,
        width: "60%",
    },
    _value: {
        width: "15%",

    },
    _profile_main: {
        width: "15%",
    },
    _red_value: {
        color: "red"
    },
    _user_name: {
        fontWeight: "bold"
    },
    _data: {
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 4
    },
    _qr_main:{
        justifyContent:"center",
        alignItems:"center"
    },
    _qr_scaner_btn:{
        backgroundColor:"white",
        width:50,
        height:50,
        borderRadius:100,
        alignItems:"center",
        justifyContent:"center"
    }
});
