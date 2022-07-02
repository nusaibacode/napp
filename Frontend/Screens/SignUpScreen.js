import { React, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render } from 'react-dom';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ImageBackground, Dimensions, Button, TextInput } from 'react-native';
import { CardComponent } from './../Components/CardStructure';
import { DisplayCard } from './../Components/DisplayCard'
import axios from 'axios';


const deviceWidth = Dimensions.get('window').width
const API = "http://127.0.0.1:5000"


export default function SignUpScreen({ navigation }) {
    const [firstName, setFirstName] = useState('First Name')
    const [lastName, setLastName] = useState('Last Name')
    const [email, setEmail] = useState('Email')

    function submitButtonFunction() {
        if (ValidateUserSignup(firstName, lastName, email)) {
            axios.post(API + "/signup", { first_name: firstName, last_name: lastName, email: email })
                .then(response =>
                    console.log(response)
                )
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1 }} source={require("./../Assets/gradient_dark_orange_navy.png")}>
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text>Sign up screen</Text>
                    <View style={{ marginTop: 60 }}>
                        <View>
                            <FirstNameTextInput
                                style={styles.input}
                                onChangeText={setFirstName}
                                value={firstName}
                            />
                            <LastNameTextInput
                                style={styles.input}
                                onChangeText={setLastName}
                                value={lastName}
                            />
                            <EmailTextInput
                                style={styles.input}
                                onChangeText={setEmail}
                                value={email}
                            />
                        </View>
                        {/* <SignUpFields>

                </SignUpFields> */}
                        <Button
                            title="Submit"
                            onPress={submitButtonFunction}
                        />
                        <Button
                            title="Back to Opening"
                            onPress={() => navigation.navigate("OpeningScreen")}
                        />

                    </View>
                </View>
            </ImageBackground>
        </View>
    );
}

function ValidateUserSignup(first_name, last_name, email) {
    if (first_name != "First Name" && last_name != "Last Name" && email != "Email") {
        return true
    } else {
        return false
    }

}


function FirstNameTextInput(props) {
    return (
        <TextInput
            {...props}
            editable
            maxLength={40}
        />
    );
}

function LastNameTextInput(props) {
    return (
        <TextInput
            {...props}
            editable
            maxLength={40}
        />
    );
}

function EmailTextInput(props) {
    return (
        <TextInput
            {...props}
            editable
            maxLength={40}
        />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f4ae74',
        alignItems: 'center',
        justifyContent: 'center',
    },
    smallImage: {
        width: 50,
        height: 50
    },
    mediumImage: {
        width: 150,
        height: 150
    },
    container: {
        flex: 1,
        backgroundColor: '#f4ae74',
        justifyContent: 'center',
    },
    bar: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: "10%",
        backgroundColor: '#FFC107',
        borderRadius: 9,
    },
    card: {
        width: deviceWidth - 32,
        marginHorizontal: 16,
        backgroundColor: 'lightgray',
        height: deviceWidth * 1,
        borderRadius: 35,
    },
    shadowProp: {
        shadowRadius: 12,
        shadowOpacity: 0.8,
        shadowColor: "#757575",
        shadowOffset: {
            width: 0,
            height: 3,
        }
    },
    openingCardStyle: {
        bottom: 65,
        position: 'absolute',
        height: 550
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});