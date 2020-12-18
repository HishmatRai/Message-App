import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput, ScrollView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
export default function Search(props) {
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
                            <Ionicons name="md-filter" size={24} color="white" />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles._search_main_view}>
                    <EvilIcons name="search" size={24} color="white" style={{ marginLeft: 10 }} />
                    <TextInput
                        style={styles._textInput}
                        placeholder="Abralia Bond"
                        placeholderTextColor="white"
                    />
                    <TouchableOpacity>
                        <Entypo name="cross" size={24} color="white" style={styles._cross_icon} />
                    </TouchableOpacity>
                </View>
            </View>

            {/* >>>>>>>>>>>>>>>>> BODY <<<<<<<<<<<<<<<<<<< */}
            <ScrollView>
                <View style={styles._body_main}>
                    <Image source={require('./../../assets/search.png')} style={styles._search_icon} />
                    <Text style={styles._not_found}>No Reasult Found</Text>
                    <Text style={styles._message}>You did't make any conversation yet.</Text>
                    <Text style={styles._message}>Please selecet user name.</Text>
                    <TouchableOpacity>
                        <Text style={styles._btn_text}>Refine search</Text>
                    </TouchableOpacity>
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
    _body_main: {
        alignItems: "center",
        marginTop: 50,
        alignSelf: "center",
        alignItems: "center",
    },
    _not_found: {
        fontWeight: "bold",
        fontSize: 20,
        marginTop: 20,
        marginBottom: 20,
        color: "black"
    },
    _message: {
        color: "gray",
    },
    _btn_text: {
        color: "#5382B0",
        fontSize: 15,
        marginTop: 30
    },
    _search_icon: {
        width: 150,
        height: 150,
        alignItems: 'center',
        padding: 1
    }
});
