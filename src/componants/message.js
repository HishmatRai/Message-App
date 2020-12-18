import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
export default function Message1(props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="white" hidden={false} backgroundColor="#5382B0" translucent={true} />
            {/* ---------------- > STORY SHOW <------------------- */}

            <View style={styles._story_main_view}>
                <View style={{ alignSelf: "center" }}>
                    <TouchableOpacity style={styles._add_Story}>
                        <Ionicons name="add" size={24} color="#818181" style={styles._add_icon} />
                    </TouchableOpacity>
                    <Text style={styles._text}>Your Story</Text>
                </View>
                <View style={{ alignSelf: "center" }}>
                    <TouchableOpacity style={styles._live_main}>
                        <Image source={require('./../../assets/story1.png')} style={styles._user_profile} />
                    </TouchableOpacity>
                    <Text style={styles._live}>LIVE</Text>
                    <Text style={styles._text}>Your Story</Text>
                </View>
                <View style={{ alignSelf: "center" }}>
                    <TouchableOpacity style={styles._live_main}>
                        <Image source={require('./../../assets/story1.png')} style={styles._user_profile} />
                    </TouchableOpacity>
                    <Text style={styles.yellow}></Text>
                </View>
                <View style={{ alignSelf: "center" }}>
                    <TouchableOpacity style={styles._live_main}>
                        <Image source={require('./../../assets/story1.png')} style={styles._user_profile} />
                    </TouchableOpacity>
                    <Text style={styles._live}>LIVE</Text>
                </View>
                <View style={{ alignSelf: "center" }}>
                    <TouchableOpacity style={styles._live_main}>
                        <Image source={require('./../../assets/story1.png')} style={styles._user_profile} />
                    </TouchableOpacity>
                    <Text style={styles._live}>LIVE</Text>
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
    _story_main_view: {
        flexDirection: "row",
        marginTop: 20
    },
    _add_Story: {
        width: 72,
        height: 72,
        backgroundColor: "#F2F2F2",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10
    },
    _add_icon: {
        justifyContent: "center",
        alignItems: "center",
    },
    _live_main: {
        width: 72,
        height: 72,
        backgroundColor: "#F2F2F2",
        borderRadius: 100,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        borderColor: "#5382B0",
        borderWidth: 1
    },
    _user_profile: {
        width: 72,
        height: 72,
        borderRadius: 100
    },
    _live: {
        backgroundColor: "#FF6D6D",
        color: "white",
        width: 50,
        borderRadius: 100,
        justifyContent: "center",
        alignSelf: "center",
        textAlign: "center",
        marginTop: -23,
        marginLeft: 7
    },
    yellow: {
        backgroundColor: "#F8C756",
        color: "white",
        width: 20,
        height: 20,
        borderRadius: 100,
        justifyContent: "center",
        alignSelf: "center",
        textAlign: "center",
        marginTop: -20,
        marginLeft: 60
    },
    _text: {
        fontWeight: "bold",
        textAlign: "center"
    }
});

