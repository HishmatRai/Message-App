import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, StatusBar, Image, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
export default function History(props) {
    return (
        <View style={styles.container}>
            <StatusBar barStyle="white" hidden={false} backgroundColor="#5382B0" translucent={true} />
            <ScrollView style={{ margin: 20 }}>
                <Text style={styles._heading}>History</Text>
                <View style={styles._card_main}>
                    <Text style={styles._data}>October 28, Wednesday</Text>
                    <View style={styles._card_bc_color}>
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
                    </View>

                </View>

                <View style={styles._card_main}>
                    <Text style={styles._data}>October 28, Wednesday</Text>
                    <View style={styles._card_bc_color}>
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
                    </View>

                </View>

                <View style={styles._card_main}>
                    <Text style={styles._data}>October 28, Wednesday</Text>
                    <View style={styles._card_bc_color}>
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
    _heading: {
        color: "black",
        fontWeight: "bold",
        fontSize: 30,
        marginTop: 30
    },
    _card_main: {
        marginTop: 10,
    },
    _data: {
        fontWeight: "bold",
        fontSize: 18,
        marginLeft: 4
    },
    _card_bc_color: {
        backgroundColor: "#E0EFF6",
        borderRadius: 10,
        marginTop: 5,
        padding: 5,
        paddingBottom: 20
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
    }

});
