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
export default function Setting(props) {
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
                        <Text style={styles._heading_text}>Search</Text>
                    </View>
                    <View>
                        <TouchableOpacity>
                            <Text style={{ color: "white" }}>Reset</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles._search_main_view}>
                    <EvilIcons name="search" size={24} color="white" style={{ marginLeft: 10 }} />
                    <TextInput
                        style={styles._textInput}
                        placeholder="Search setting"
                        placeholderTextColor="white"
                    />
                    <TouchableOpacity>
                        <Entypo name="cross" size={24} color="white" style={styles._cross_icon} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* >>>>>>>>>>>>>>>>> BODY <<<<<<<<<<<<<<<<<<< */}
            <ScrollView>
                <View style={styles._main}>
                    <View style={styles._icons_main}>
                        <TouchableOpacity style={styles._icons_box}>
                            <Ionicons name="moon" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles._heading}>
                        <Text style={styles._setting_heading}>Dark Mode</Text>
                    </View>
                    <View style={styles._toglebtn}>
                        <ToggleButton />
                    </View>
                </View>

                <View style={styles._main}>
                    <View style={styles._icons_main}>
                        <TouchableOpacity style={styles._icons_box2}>
                            <FontAwesome name="user-circle-o" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles._heading}>
                        <Text style={styles._setting_heading}>Profile Lock</Text>
                    </View>
                    <View style={styles._toglebtn}>
                        <ToggleButton />
                    </View>
                </View>

                <TouchableOpacity style={styles._main}>
                    <View style={styles._icons_main}>
                        <TouchableOpacity style={styles._icons_box3}>
                            <Ionicons name="chatbubbles" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles._heading}>
                        <Text style={styles._setting_heading}>Chat Customize</Text>
                    </View>
                    <View style={styles._toglebtn}>
                        <Feather name="chevron-right" size={24} color="#6D6D6D" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles._main}>
                    <View style={styles._icons_main}>
                        <TouchableOpacity style={styles._icons_box4}>
                            <MaterialIcons name="notifications-on" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles._heading}>
                        <Text style={styles._setting_heading}>Notification</Text>
                    </View>
                    <View style={styles._toglebtn}>
                        <Feather name="chevron-right" size={24} color="#6D6D6D" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles._main}>
                    <View style={styles._icons_main}>
                        <TouchableOpacity style={styles._icons_box5}>
                        <MaterialIcons name="privacy-tip" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles._heading}>
                        <Text style={styles._setting_heading}>Privacy</Text>
                    </View>
                    <View style={styles._toglebtn}>
                        <Feather name="chevron-right" size={24} color="#6D6D6D" />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={styles._main}
                onPress={() => props.navigation.navigate("History")}>
                    <View style={styles._icons_main}>
                        <TouchableOpacity style={styles._icons_box6}>
                        <MaterialIcons name="history" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles._heading}>
                        <Text style={styles._setting_heading}>Transaction History</Text>
                    </View>
                    <View style={styles._toglebtn}>
                        <Feather name="chevron-right" size={24} color="#6D6D6D" />
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles._main}
                 onPress={() => props.navigation.navigate("Welcome")}>
                    <View style={styles._icons_main}>
                        <TouchableOpacity style={styles._icons_box7}>
                        <MaterialIcons name="lock" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles._heading}>
                        <Text style={styles._setting_heading}>Logout</Text>
                    </View>
                    <View style={styles._toglebtn}>
                       
                    </View>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles._main}>
                    <View style={styles._icons_main}>
                        <TouchableOpacity style={styles._icons_box8}>
                        <FontAwesome name="user-circle-o" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                    <View style={styles._heading}>
                        <Text style={styles._setting_heading2}>Delete Account</Text>
                    </View>
                    <View style={styles._toglebtn}>
                        <Feather name="chevron-right" size={24} color="#6D6D6D" />
                    </View>
                </TouchableOpacity>
                <View style={{marginBottom:100}}></View>
            </ScrollView>
            {/* >>>>>>>>>>>>>>>>>>>> Tab bar <<<<<<<<<<<<<<<<<< */}
            <View style={styles._tapbar_main}>
                <TouchableOpacity style={styles._bottom_icons}
                 onPress={() => props.navigation.navigate("Profile")}>
                    <Ionicons name="person" size={24} color="#6B6B6B" />
                </TouchableOpacity>
                <TouchableOpacity style={styles._bottom_icons}
                 onPress={() => props.navigation.navigate("AllChat")}>
                    <Ionicons name="chatbubbles" size={24} color="#6B6B6B" />
                </TouchableOpacity>
                <TouchableOpacity style={styles._bottom_icons}>
                    <Ionicons name="ios-settings-sharp" size={24} color="#5382B0" />
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
    _search_main_view: {
        flexDirection: "row",
        backgroundColor: "#A1BBD0",
        width: "80%",
        alignSelf: "center",
        alignItems: "center",
        borderRadius: 100,
        marginBottom: 40,
        padding: 5
    },
    _textInput: {
        width: "75%",
        color: "white"
    },
    _cross_icon: {
        justifyContent: "flex-end"
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
        backgroundColor:"white"
    },
    _bottom_icons: {
        padding: 10,
    },
    _icons_main: {
        width: "20%",
    },
    _heading: {
        width: "60%",
    },
    _toglebtn: {
        width: "20%",
        alignSelf: "center",
        alignItems: "center"
    },
    _main: {
        marginLeft: 20,
        marginRight: 30,
        marginTop: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    _icons_box: {
        borderRadius: 100,
        backgroundColor: "#707070",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    _icons_box2: {
        borderRadius: 100,
        backgroundColor: "#2CB9B0",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    _icons_box3: {
        borderRadius: 100,
        backgroundColor: "#5672FF",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    _icons_box4: {
        borderRadius: 100,
        backgroundColor: "#FF568A",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    _icons_box5: {
        borderRadius: 100,
        backgroundColor: "#8C61C5",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    _icons_box6: {
        borderRadius: 100,
        backgroundColor: "#4682B4",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    _icons_box7: {
        borderRadius: 100,
        backgroundColor: "#FFC041",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    _icons_box8: {
        borderRadius: 100,
        backgroundColor: "#FF6E6E",
        width: 50,
        height: 50,
        alignItems: "center",
        justifyContent: "center"
    },
    _setting_heading: {
        color: "#707070",
        fontWeight: 'bold'
    },
    _setting_heading2: {
        color: "#FF6E6E",
        fontWeight: 'bold'
    }

});
