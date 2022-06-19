import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Button, Pressable, Alert } from 'react-native';
import { ImageBackground, Dimensions } from 'react-native';
import { TouchableHighlight } from 'react-native';

const deviceWidth = Dimensions.get('window').width

function ThreeColumnVertical(props) {
    return (
        <View style={{ flex: 1, flexDirection: "column", padding: 30 }}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.body}>{props.body}</Text>
            <Text style={styles.footer}>{props.footer}</Text>
        </View>
    );
};

function TwoColumnButton(props) {
    const buttonText = String(props.buttonText);
    return (
        <View style={{ flex: 1, flexDirection: "column", padding: 30 }}>
            <Text style={styles.title}>{props.title}</Text>
            <Text style={styles.body}>{props.body}</Text>
            <TouchableHighlight
                style={styles.getStarted}>
                <Button title={buttonText} color="white"></Button>
            </TouchableHighlight>
        </View >
    );
};



function BentonIconLeft(props) {
    const bullet1 = props.bullet1
    const bullet2 = props.bullet2

    return (
        <View style={{ flexDirection: "column", padding: 30 }}>

            <View style={{ flexDirection: "row", marginBottom: 20 }}>
                <Image source={require(".././Assets/send_plane_icon.png")} style={{ height: 30, width: 30, marginRight: 20, }} />
                <Text style={{ fontSize: 17 }}> Show us your profile</Text>
            </View>

            <View style={{ flexDirection: "row", marginBottom: 20, fontSize: 35 }}>
                <Image source={require(".././Assets/double_check_icon.png")} style={{ height: 30, width: 30, marginRight: 20 }} />
                <Text style={{ fontSize: 17 }}> Get your review</Text>
            </View>
        </View>

    )
}

function ColumnBentoIconButton(props) {
    const buttonText = String(props.buttonText);
    return (
        <View style={{ flex: 1, flexDirection: "column", padding: 30 }}>
            <Text style={[styles.title]}>{props.title}</Text>
            <Text style={[styles.body]}>{props.body}</Text>
            <View><BentonIconLeft></BentonIconLeft></View>
            <TouchableHighlight
                style={[styles.getStarted]}>
                <Button title={buttonText} color="white"></Button>
            </TouchableHighlight>
        </View >
    );
};

export function CardComponent(props) {

    const cardContentStructure = props.cardContentStructure
    const title = props.title;
    const body = props.body;
    const footer = props.footer;
    const buttonText = props.buttonText;

    switch (cardContentStructure) {
        case "Column":
            return (
                <View style={[styles.container, styles.shadowProp]}>
                    <ThreeColumnVertical>
                        title={title}
                        body={body}
                        footer={footer}
                    </ThreeColumnVertical>
                </View>
            );
        case "Button":
            return (
                <View style={[styles.container, styles.shadowProp]}>
                    <TwoColumnButton
                        title={title}
                        body={body}
                        buttonText={buttonText}
                    >
                    </TwoColumnButton>
                </View>
            );
        case "Bento":
            return (
                <View style={[styles.container, styles.shadowProp]}>
                    <ColumnBentoIconButton
                        title={title}
                        body={body}
                        buttonText={buttonText}
                    >
                    </ColumnBentoIconButton>
                </View>
            )

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
        fontWeight: 'bold',
        fontSize: 30,
        color: "#000000",
        textAlign: 'center',
    },
    body: {
        flex: 0.6,
        fontFamily: 'SF Pro',
        fontSize: 20,
        color: "#000000",
        textAlign: 'center',
    },
    footer: {
        flex: 0.2,
        fontFamily: 'SF Pro',
        fontSize: 20,
        color: "#000000",
        textAlign: 'center',
    }
    ,
    getStarted: {
        flex: .15,
        paddingTop: 0,
        paddingBottom: 10,
        paddingTop: 10,
        marginBottom: 0,
        backgroundColor: '#063970',
        borderRadius: 20,
    },

})