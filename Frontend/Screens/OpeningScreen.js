import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { render } from 'react-dom';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { ImageBackground, Dimensions, Button } from 'react-native';
import { CardComponent } from './../Components/CardStructure';
import { APIEndpoint } from '../API';
import axios from 'axios';

const deviceWidth = Dimensions.get('window').width
const baseURL = APIEndpoint + ".typicode.com"

export default function OpeningScreen({ navigation }) {

    const getStartedButtonFunction = () => navigation.navigate("SignUpScreen")
    // axios.get(baseURL + "/todos/1")
    axios.get("http://127.0.0.1:5000/")
        .then(response =>
            console.log(response.data.name)
        )

    return (
        <View style={{ flex: 1 }}>
            <ImageBackground style={{ flex: 1 }} source={require("./../Assets/gradient_dark_orange_navy.png")}>
                <View style={{ marginTop: "20%" }}></View>
                <Image source={require("./../Assets/green_flag_logo.png")}></Image>
                <CardComponent
                    cardContentStructure="Bento"
                    title="Profile Makeover"
                    body="Want exciting matches? Need exciting profile."
                    bullet1="Show us your content"
                    bullet2="Get your review"
                    buttonText="Get Started"
                    buttonFunction={getStartedButtonFunction}
                >
                </CardComponent>
                <View>

                </View>

            </ImageBackground >
        </View >
    )
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




});