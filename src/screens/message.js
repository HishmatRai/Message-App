import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';
export default function Message(props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="white" hidden={false} backgroundColor="#5382B0" translucent={true} />

            {/* >>>>>>>>>>>>>>>>> HEADER <<<<<<<<<<<<<<<<<<< */}
            <View style={styles._header_main_view}>
                <View style={styles._back_icon_main}>
                    <TouchableOpacity
                        onPress={() => props.navigation.goBack()}>
                        <AntDesign name="arrowleft" size={24} color="white" style={{ marginTop: 5 }} />
                    </TouchableOpacity>
                    <View>
                        <Text style={styles._user_name}>Galery Mason</Text>
                        <Text style={styles._active_status}>Active Now</Text>
                    </View>
                </View>
                <View style={styles._call_icons}>
                    <TouchableOpacity>
                        <FontAwesome name="phone" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Ionicons name="videocam" size={24} color="white" />
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Feather name="help-circle" size={24} color="white" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* >>>>>>>>>>>>>>>>> SHOW CHAT <<<<<<<<<<<<<<<<<<< */}

            <ScrollView>
                {/* ---------------- > RECEIVE MESSAGE<------------------- */}
                <View style={styles._receive_message_main}>
                    <View style={styles._receive_message_show}>
                        <Image source={require('./../../assets/message_profile.png')} style={styles._user_profile} />
                        <View style={styles._receive_message}>
                            <Text style={{ color: "#474747" }}> We have to assign new member </Text>
                        </View>
                    </View>
                    <View style={styles._time_show_main}>
                        <Text style={{ color: "gray", marginRight: 5 }}>15m</Text>
                        <MaterialIcons name="message" size={15} color="gray" />
                    </View>
                </View>
                {/* ---------------- > SEND MESSAGE<------------------- */}
                <View style={styles._send_message_main}>
                    <View style={styles._send_message}>
                        <Text style={{ color: "white" }}> People are asking me about the theme development for our tasking </Text>
                    </View>
                    <View style={styles._send_message_2}>
                        <Text style={{ color: "white" }}> When should we go for it </Text>
                    </View>
                    <View style={styles._seen_time_show_main}>
                        <Text style={{ color: "gray", marginRight: 5 }}>seen . 27m</Text>
                    </View>
                </View>
                {/* ---------------- > RECEIVE MESSAGE<------------------- */}
                <View style={styles._receive_message_main}>
                    <View style={styles._receive_message_show}>
                        <Image source={require('./../../assets/message_profile.png')} style={styles._user_profile} />
                        <View style={styles._receive_message}>
                            <Text style={{ color: "#474747" }}> We have to assign new member </Text>
                        </View>
                    </View>
                    <View style={styles._time_show_main}>
                        <Text style={{ color: "gray", marginRight: 5 }}>15m</Text>
                        <MaterialIcons name="message" size={15} color="gray" />
                    </View>
                </View>
                <View style={{ marginBottom: 70 }}></View>
            </ScrollView>

            {/* >>>>>>>>>>>>>>>>> CHAT OPTION <<<<<<<<<<<<<<<<<<< */}
            <View style={styles._chat_main_view}>
                <TouchableOpacity style={styles._add_btn}>
                    <Entypo name="plus" size={24} color="#5382B0" />
                </TouchableOpacity>
                <TextInput
                    style={styles._textInput}
                    placeholder="Type your message"
                    placeholderTextColor="#AFAFAF"
                    multiline={false}
                    numberOfLines={1}
                />
                <TouchableOpacity>
                    <Ionicons name="send-sharp" size={24} color="#5382B0" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    // header
    _header_main_view: {
        backgroundColor: "#5382B0",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingBottom: 10
    },
    _back_icon_main: {
        flexDirection: "row",
        marginTop: 50,
        marginLeft: 20,
        width: "60%"
    },
    _call_icons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 50,
        marginRight: 20,
        width: "25%"
    },
    _user_name: {
        color: "white",
        fontWeight: "bold",
        marginLeft: 10,
        fontSize: 18
    },
    _active_status: {
        color: "white",
        marginLeft: 10
    },

    // show chat
    _receive_message_main: {
        width: "80%",
        marginLeft: 20,
        marginTop: 20,
    },
    _receive_message_show: {
        flexDirection: "row",
    },
    _user_profile: {
        width: 42,
        height: 42,
        borderRadius: 100
    },
    _receive_message: {
        backgroundColor: "#ECF7FE",
        width: "86%",
        marginLeft: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        padding: 10,
        alignSelf: "center"
    },
    _time_show_main: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 55,
        marginTop: 4
    },
    _send_message_main: {
        width: "100%",
        marginTop: 20,
    },
    _send_message: {
        backgroundColor: "#5382B0",
        width: "80%",
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopRightRadius: 100,
        borderBottomRightRadius: 10,
        padding: 10,
        alignSelf: "center",
        marginLeft: 40,
    },
    _send_message_2: {
        backgroundColor: "#5382B0",
        width: "80%",
        borderTopLeftRadius: 100,
        borderBottomLeftRadius: 100,
        padding: 10,
        alignSelf: "center",
        marginLeft: 40,
        marginTop: 10
    },
    _seen_time_show_main: {
        marginLeft: "78%",
        marginTop: 4
    },
    // chat main
    _chat_main_view: {
        position: "absolute",
        bottom: 10,
        width: "90%",
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center"
    },
    _add_btn: {
        backgroundColor: "#F2F2F2",
        borderRadius: 100,
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center"

    },
    _textInput: {
        backgroundColor: "#F2F2F2",
        width: "75%",
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 100,
        paddingBottom: 5,
        paddingLeft: 15,
        paddingTop: 5,
        paddingRight: 15,
        color: "#AFAFAF"

    }
});
