import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
export default function Profile(props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="white" hidden={false} backgroundColor="#5382B0" translucent={true} />

            {/* >>>>>>>>>>>>>>>>>>>> Header <<<<<<<<<<<<<<<<<< */}
            <View style={styles._header}>
                <View style={styles._profile_main}>
                    <Image source={require('./../../assets/story1.png')} style={styles._user_profile} />
                </View>
                <TouchableOpacity style={styles._camera_icon}>
                    <Feather name="camera" size={17} color="#5382B0" />
                </TouchableOpacity>
            </View>

            {/* >>>>>>>>>>>>>>>>>>>>  <<<<<<<<<<<<<<<<<< */}
            <ScrollView>
                <View style={{ margin: 20 }}>
                    <View style={{marginTop:10}}>
                        <Text style={styles._heading}>Name</Text>
                        <View style={styles._main}>
                            <Text style={styles._user_name}>Johan Smith</Text>
                            <TouchableOpacity>
                            <MaterialIcons name="edit" size={24} color="#5382B0" />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{marginTop:10}}>
                        <Text style={styles._heading}>Contact</Text>
                        <View style={styles._main}>
                            <Text style={styles._user_name}>+ 92 346 0857289</Text>
                        </View>
                    </View>

                    <View style={{marginTop:10}}>
                        <Text style={styles._heading}>About</Text>
                        <View style={styles._main}>
                            <Text style={styles._user_name}>Never refrain yourself to bring....</Text>
                            <TouchableOpacity>
                            <MaterialIcons name="edit" size={24} color="#5382B0" />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
            {/* >>>>>>>>>>>>>>>>>>>> Tab bar <<<<<<<<<<<<<<<<<< */}
            <View style={styles._tapbar_main}>
                <TouchableOpacity style={styles._bottom_icons}>
                    <Ionicons name="person" size={24} color="#5382B0" />
                </TouchableOpacity>
                <TouchableOpacity style={styles._bottom_icons}>
                    <Ionicons name="chatbubbles" size={24} color="#6B6B6B" />
                </TouchableOpacity>
                <TouchableOpacity style={styles._bottom_icons}>
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
        borderTopWidth: 1
    },
    _bottom_icons: {
        padding: 10,
    },
    _header: {
        backgroundColor: "#5382B0",
        paddingBottom: 30,
        alignItems: "center"
    },
    _profile_main: {
        borderColor: "white",
        borderWidth: 2,
        borderRadius: 100,
        width: 75,
        height: 75,
        alignItems: "center",
        alignSelf: "center",
        marginTop: 50
    },
    _user_profile: {
        width: 72,
        height: 72,
        borderRadius: 100,
    },
    _camera_icon: {
        backgroundColor: "white",
        borderRadius: 100,
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        marginTop: -30,
        marginLeft: 60
    },
    _main:{
        flexDirection:"row",
        justifyContent:"space-between",
        backgroundColor:"#EDEBEB",
        padding:10,
        borderRadius:5
    },
    _heading:{
        color:"#7A7A7A",
        marginTop:10,
        marginBottom:10
    },
    _user_name:{
        color:"#7A7A7A",
        fontWeight:"bold"
    }

});
