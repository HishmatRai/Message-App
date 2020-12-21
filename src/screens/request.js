import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';
export default function Request(props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="white" hidden={false} backgroundColor="#17C261" translucent={true} />
            <ScrollView>
                <View style={{ margin: 20 }}>
                    <TouchableOpacity
                      onPress={() => props.navigation.goBack()}>
                        <Entypo name="cross" size={24} color="white" style={styles._cross_icon} />
                    </TouchableOpacity>
                    <View style={styles._together_image}>
                        <TouchableOpacity>
                            <Image source={require('./../../assets/message_profile.png')} style={styles._user_profile} />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <AntDesign name="arrowright" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Image source={require('./../../assets/message_profile.png')} style={styles._user_profile} />
                        </TouchableOpacity>
                    </View>

                    <Text style={styles._heading}>Playing Sharley</Text>
                    <Text style={styles._value}>$0</Text>

                    <TouchableOpacity style={styles._add_btn}>
                        <Text style={styles._add_btn_text}>+ Add Message</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <TouchableOpacity style={styles._swipe_btn_main}
              onPress={() => props.navigation.navigate("Message")}>
                <Text style={styles._blank}></Text>
                <Text style={styles._swipe_btn_txt}>Request</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#17C261',
    },
    _cross_icon: {
        justifyContent: "flex-end",
        textAlign: "right",
        marginTop: 40
    },
    _together_image: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "70%",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 50
    },
    _heading: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 40
    },
    _value: {
        textAlign: "center",
        color: "white",
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 20
    },
    _add_btn: {
        alignSelf: "center",
        marginTop: 30,
        padding: 10
    },
    _add_btn_text: {
        color: "white",
        fontWeight: "bold"
    },

    _swipe_btn_main: {
        position: "absolute",
        bottom: 40,
        width: "60%",
        alignSelf: "center",
        flexDirection: "row",
        backgroundColor: "white",
        borderRadius: 100,
        padding: 4,
        alignItems: "center",
        textAlign:"center",
        alignItems:"center",
    },
    _blank: {
        width: 40,
        height: 40,
        backgroundColor: "white",
        borderRadius: 100
    },
    _swipe_btn_txt: {
        color: "#5382B0",
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 18,
        alignItems: "center",
        textAlign:"center",
        alignItems:"center",
    }
});
