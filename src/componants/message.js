import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons'
export default function Message1(props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="white" hidden={false} backgroundColor="#5382B0" translucent={true} />
            {/* ---------------- > STORY SHOW <------------------- */}
            <ScrollView>
                <View style={styles._story_main}>
                    <View style={styles._story_sub_main}>
                        <TouchableOpacity style={styles._story_add}>
                            <Ionicons name="add" size={24} color="black" />
                        </TouchableOpacity>
                        <Text style={styles._add_story_title}>Your Story</Text>
                    </View>
                    <View style={styles._story_sub_main}>
                        <TouchableOpacity style={styles._story_add}>
                            <Image source={require('./../../assets/call.png')} style={styles._user_profile} />
                        </TouchableOpacity>
                        <Text style={styles._add_story_title}>Your Story</Text>
                    </View>
                    <View style={styles._story_sub_main}>
                        <TouchableOpacity style={styles._story_add}>
                            <Image source={require('./../../assets/call.png')} style={styles._user_profile} />
                        </TouchableOpacity>
                        <Text style={styles._add_story_title}>Your Story</Text>
                    </View>
                    <View style={styles._story_sub_main}>
                        <TouchableOpacity style={styles._story_add}>
                            <Image source={require('./../../assets/call.png')} style={styles._user_profile} />
                        </TouchableOpacity>
                        <Text style={styles._add_story_title}>Your Story</Text>
                    </View>
                    <View style={styles._story_sub_main}>
                        <TouchableOpacity style={styles._story_add}>
                            <Image source={require('./../../assets/call.png')} style={styles._user_profile} />
                        </TouchableOpacity>
                        <Text style={styles._add_story_title}>Your Story</Text>
                    </View>
                </View>
                <View style={{ margin: 20 }}>
                    <View style={styles._call_main}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/call.png')} style={styles._user_profile} />
                            <Text style={styles._profile_status}></Text>
                        </View>
                        <View style={styles._name_main}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles._name}>Vilme</Text>
                                <Text style={styles._status2}></Text>
                            </View>
                                <Text style={styles._dis}>Yesterday</Text>
                        </View>
                        <View style={styles._call_icon_main}>
                            <TouchableOpacity>
                               <Text>3m ago</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles._call_main}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/call.png')} style={styles._user_profile} />
                            <Text style={styles._profile_status}></Text>
                        </View>
                        <View style={styles._name_main}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles._name}>Vilme</Text>
                                <Text style={styles._status2}></Text>
                            </View>
                                <Text style={styles._dis}>Yesterday</Text>
                        </View>
                        <View style={styles._call_icon_main}>
                            <TouchableOpacity>
                               <Text>3m ago</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles._call_main}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/call.png')} style={styles._user_profile} />
                            <Text style={styles._profile_status}></Text>
                        </View>
                        <View style={styles._name_main}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles._name}>Vilme</Text>
                                <Text style={styles._status2}></Text>
                            </View>
                                <Text style={styles._dis}>Yesterday</Text>
                        </View>
                        <View style={styles._call_icon_main}>
                            <TouchableOpacity>
                               <Text>3m ago</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles._call_main}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/call.png')} style={styles._user_profile} />
                            <Text style={styles._profile_status}></Text>
                        </View>
                        <View style={styles._name_main}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles._name}>Vilme</Text>
                                <Text style={styles._status2}></Text>
                            </View>
                                <Text style={styles._dis}>Yesterday</Text>
                        </View>
                        <View style={styles._call_icon_main}>
                            <TouchableOpacity>
                               <Text>3m ago</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={styles._call_main}>
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/call.png')} style={styles._user_profile} />
                            <Text style={styles._profile_status}></Text>
                        </View>
                        <View style={styles._name_main}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles._name}>Vilme</Text>
                                <Text style={styles._status2}></Text>
                            </View>
                                <Text style={styles._dis}>Yesterday</Text>
                        </View>
                        <View style={styles._call_icon_main}>
                            <TouchableOpacity>
                               <Text>3m ago</Text>
                            </TouchableOpacity>
                        </View>
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
    _story_main: {
        flexDirection: "row",
    },
    _story_add: {
        width: 72,
        height: 72,
        borderRadius: 100,
        backgroundColor: "red",
        alignSelf: "center",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 10,
        marginTop: 20
    },
    _user_profile: {
        width: 72,
        height: 72,
        borderRadius: 100,
    },
    _story_sub_main: {
        justifyContent: "center",
        alignItems: "center",
        alignItems: "center",
    },
    _add_story_title: {
        color: "black",
        textAlign: "center",
        fontWeight: "bold"
    },
    _call_main: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 20
    },
    _name_main: {
        width: "68%",
        paddingLeft: 20,
    },
    _call_icon_main: {
        width: "10%",
    },
    _profile_main: {
        width: "20%",
    },
    _name_main: {
        width: "58%",
        paddingLeft: 20,
    },
    _call_icon_main: {
        width: "20%",
    },
    _profile_status: {
        backgroundColor: "#5382B0",
        width: 15,
        height: 15,
        borderRadius: 100,
        marginTop: -15,
        marginLeft: 44
    },
    _name: {
        fontWeight: "bold"
    },
    _status2: {
        width: 5,
        height: 5,
        borderRadius: 100,
        backgroundColor: "#5382B0",
        marginLeft: 5,
        marginTop: 8
    },
    _dis:{
        marginTop:5
    }
});

