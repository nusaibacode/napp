import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Button, Pressable, Alert } from 'react-native';
import { ImageBackground, Dimensions } from 'react-native';
import { TouchableHighlight } from 'react-native';

const deviceWidth = Dimensions.get('window').width

function ThreeColumnVertical(props) {
    return (
        <View style={{ flex: 1, flexDirection: "column", padding: 30 }}>
            <Text style={{ backgroundColor: "blue", flex: 0.2 }}>Title</Text>
            <Text style={{ backgroundColor: "red", flex: 0.6 }}>Body</Text>
            <Text style={{ backgroundColor: "green", flex: 0.2 }}>Footer</Text>
        </View>
    );
};

function TwoColumnButton(props) {
    return (
        <View style={{ flex: 1, flexDirection: "column", padding: 30 }}>
            <Text style={styles.title}>Title</Text>
            <Text style={styles.body}>Body</Text>
            <TouchableHighlight
                style={styles.getStarted}>
                <Button title="Get Started" color="white"></Button>
            </TouchableHighlight>
        </View >
    );
};

export function CardComponent(props) {

    const cardContentStructure = props.cardContentStructure

    switch (cardContentStructure) {
        case "Column":
            return (
                <View style={[styles.container, styles.shadowProp]}>
                    <ThreeColumnVertical></ThreeColumnVertical>
                </View>
            );
        case "Button":
            return (
                <View style={[styles.container, styles.shadowProp]}>
                    <TwoColumnButton></TwoColumnButton>
                </View>
            );

    }

}

const styles = StyleSheet.create({
    container: {
        width: deviceWidth - 32,
        marginHorizontal: 16,
        backgroundColor: 'lightgray',
        height: deviceWidth * 1,
        borderRadius: 35,
        bottom: 65,
        position: 'absolute',
        height: 550
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
    title: {
        flex: 0.2,
        fontFamily: 'SF Pro',
        fontSize: 30,
        color: "white",
        textAlign: 'center',
    },
    body: {
        flex: 0.6,
        fontFamily: 'SF Pro',
        fontSize: 20,
        color: "white",
        textAlign: 'center',
    },
    getStarted: {
        flex: .1,
        marginTop: 20,
        paddingTop: 30,
        paddingBottom: 20,
        backgroundColor: '#063970',
        borderRadius: 20,
    },

})