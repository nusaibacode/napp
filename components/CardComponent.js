import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Button } from 'react-native';
import { ImageBackground, Dimensions } from 'react-native';

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
            <Text style={{ backgroundColor: "blue", flex: 0.2 }}>Title</Text>
            <Text style={{ backgroundColor: "red", flex: 0.6 }}>Body</Text>
            <Button title="Button!" style={{ flex: 0.2 }}></Button>
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

})