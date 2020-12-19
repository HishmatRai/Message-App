import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import Tabs from './../componants/tabs'
import Message1 from './../componants/message'
export default function AllChat(props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="white" hidden={false} backgroundColor="#5382B0" translucent={true} />

            {/* >>>>>>>>>>>>>>>>> HEADER <<<<<<<<<<<<<<<<<<< */}
            <View style={styles._header_main_view}>
                <View style={styles._heading_icons_main}>
                    <View>
                        <Text style={styles._heading_text}>All Chat</Text>
                    </View>
                    <View style={styles._search_main}>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Profile")}>
                            <Ionicons name="ios-person-add-sharp" size={24} color="white" />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => props.navigation.navigate("Search")}>
                            <Ionicons name="search" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

            <Tabs path={props} />
            <View style={{ marginBottom: 100 }}></View>
            {/* >>>>>>>>>>>>>>>>>>>> Tab bar <<<<<<<<<<<<<<<<<< */}
            <View style={styles._tapbar_main}>
                <TouchableOpacity style={styles._bottom_icons}
                    onPress={() => props.navigation.navigate("Profile")}>
                    <Ionicons name="person" size={24} color="#6B6B6B" />
                </TouchableOpacity>
                <TouchableOpacity style={styles._bottom_icons}
                >
                    <Ionicons name="chatbubbles" size={24} color="#5382B0" />
                </TouchableOpacity>
                <TouchableOpacity style={styles._bottom_icons}
                    onPress={() => props.navigation.navigate("Setting")}>
                    <Ionicons name="ios-settings-sharp" size={24} color="#6B6B6B" />
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
    _search_main: {
        flexDirection: "row",
        width: "20%",
        justifyContent: "space-between"
    },
    _tapbar_main: {
        position: "absolute",
        bottom: 0,
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        alignSelf: "center",
        alignItems: "center",
        paddingBottom: 10,
        paddingTop: 10,
        borderTopColor: "gray",
        borderTopWidth: 1,
        backgroundColor: "white"
    },
    _bottom_icons: {
        padding: 10,
    },
});

