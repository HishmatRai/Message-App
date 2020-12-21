import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, TextInput, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
export default class Call extends React.Component {
    constructor(props) {
        super();
        this.state = {
            showRealApp: false,
            isNavigation: false,
        };
    }
  render(){

    return(
        <View style={styles.container}>
            <StatusBar barStyle="white" hidden={false} backgroundColor="#5382B0" translucent={true} />
            {/* ---------------- > STORY SHOW <------------------- */}
            <ScrollView>
                <View style={{ margin: 20 }}>
                <TouchableOpacity style={styles._call_main}
                    onPress={() => this.props.path.navigate("SwipeToPlay")}
                    >
                       
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/call.png')} style={styles._user_profile} />
                            <Text style={styles._profile_status}></Text>
                        </View>
                        <View style={styles._name_main}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles._name}>Vilme</Text>
                                <Text style={styles._status2}></Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <Feather name="arrow-down-left" size={20} color="#FB0909" />
                                <Text>Yesterday</Text>
                            </View>
                        </View>
                        <View style={styles._call_icon_main}>
                            <TouchableOpacity>
                                <Ionicons name="ios-call" size={24} color="#5382B0" />
                            </TouchableOpacity>
                        </View>
             </TouchableOpacity>

             <TouchableOpacity style={styles._call_main}
                    onPress={() => this.props.path.navigate("SwipeToPlay")}
                    >
                       
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/call.png')} style={styles._user_profile} />
                            <Text style={styles._profile_status}></Text>
                        </View>
                        <View style={styles._name_main}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles._name}>Vilme</Text>
                                <Text style={styles._status2}></Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <Feather name="arrow-down-left" size={20} color="green" />
                                <Text style={{ color: "gray" }}>Yesterday 6:30pm</Text>
                            </View>
                        </View>
                        <View style={styles._call_icon_main}>
                            <TouchableOpacity>
                                <Ionicons name="ios-call" size={24} color="#5382B0" />
                            </TouchableOpacity>
                        </View>
               </TouchableOpacity>

               <TouchableOpacity style={styles._call_main}
                    onPress={() => this.props.path.navigate("SwipeToPlay")}
                    >
                       
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/call.png')} style={styles._user_profile} />
                            <Text style={styles._profile_status}></Text>
                        </View>
                        <View style={styles._name_main}>
                            <View style={{ flexDirection: "row" }}>
                                <Text>Vilme</Text>
                                <Text style={styles._status2}></Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <Feather name="arrow-up-right" size={20} color="green" />
                                <Text style={{ color: "gray" }}>Yesterday 6:30pm</Text>
                            </View>
                        </View>
                        <View style={styles._call_icon_main}>
                            <TouchableOpacity>
                                <FontAwesome5 name="video" size={24} color="#5382B0" />
                            </TouchableOpacity>
                        </View>
             </TouchableOpacity>

             <TouchableOpacity style={styles._call_main}
                    onPress={() => this.props.path.navigate("SwipeToPlay")}
                    >
                       
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/call.png')} style={styles._user_profile} />
                            <Text style={styles._profile_status}></Text>
                        </View>
                        <View style={styles._name_main}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles._name}>Vilme</Text>
                                <Text style={styles._status2}></Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <Feather name="arrow-down-left" size={20} color="#FB0909" />
                                <Text>Yesterday</Text>
                            </View>
                        </View>
                        <View style={styles._call_icon_main}>
                            <TouchableOpacity>
                                <Ionicons name="ios-call" size={24} color="#5382B0" />
                            </TouchableOpacity>
                        </View>
                   </TouchableOpacity>

                   <TouchableOpacity style={styles._call_main}
                    onPress={() => this.props.path.navigate("SwipeToPlay")}
                    >
                       
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/call.png')} style={styles._user_profile} />
                            <Text style={styles._profile_status}></Text>
                        </View>
                        <View style={styles._name_main}>
                            <View style={{ flexDirection: "row" }}>
                                <Text style={styles._name}>Vilme</Text>
                                <Text style={styles._status2}></Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <Feather name="arrow-down-left" size={20} color="#FB0909" />
                                <Text>Yesterday</Text>
                            </View>
                        </View>
                        <View style={styles._call_icon_main}>
                            <TouchableOpacity>
                                <Ionicons name="ios-call" size={24} color="#5382B0" />
                            </TouchableOpacity>
                        </View>
                  </TouchableOpacity>

                  <TouchableOpacity style={styles._call_main}
                    onPress={() => this.props.path.navigate("SwipeToPlay")}
                    >
                       
                        <View style={styles._profile_main}>
                            <Image source={require('./../../assets/call.png')} style={styles._user_profile} />
                            <Text style={styles._profile_status}></Text>
                        </View>
                        <View style={styles._name_main}>
                            <View style={{ flexDirection: "row" }}>
                                <Text>Vilme</Text>
                                <Text style={styles._status2}></Text>
                            </View>
                            <View style={{ flexDirection: "row", marginTop: 5 }}>
                                <Feather name="arrow-up-right" size={20} color="green" />
                                <Text style={{ color: "gray" }}>Yesterday 6:30pm</Text>
                            </View>
                        </View>
                        <View style={styles._call_icon_main}>
                            <TouchableOpacity>
                                <FontAwesome5 name="video" size={24} color="#5382B0" />
                            </TouchableOpacity>
                        </View>
                 </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
}
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    _profile_main: {
        width: "20%",
    },
    _name_main: {
        width: "68%",
        paddingLeft: 10
    },
    _call_icon_main: {
        width: "10%",
    },
    _call_main: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "center",
        marginTop: 20
    },
    _user_profile: {
        width: 66,
        height: 66,
        borderRadius: 100
    },
    _profile_status: {
        backgroundColor: "#5382B0",
        width: 15,
        height: 15,
        borderRadius: 100,
        marginTop: -15,
        marginLeft: 44,
        borderColor:"white",
        borderWidth:2,
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
    }
});

