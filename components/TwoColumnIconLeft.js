import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Button, Alert} from 'react-native';
import { ImageBackground, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width


export function TwoColumnIconLeft (props){
  const title = props.title;
  const subtitle = props.subtitle;
  const body = props.body;

  return (
    <View
    style={{
        flex: .5,
        flexDirection: "column",
        padding: 30
      }}>
        <View
        style={{
            flex: .5,
            flexDirection: "row",
            padding: 10
        }}
        >
            <Text style={[{ backgroundColor: "red", flex: .25 }, styles.subTitle]}>{subtitle}</Text>
            <Text style={[{ backgroundColor: "blue", flex: .75}, styles.title]}>{title}</Text>
        </View>
        <View
        style={{
            flex: .5,
            flexDirection: "row",
            padding: 10
        }}
        >
            <Text style={[{ backgroundColor: "red", flex: .25 }, styles.subTitle]}>{subtitle}</Text>
            <Text style={[{ backgroundColor: "blue", flex: .75}, styles.title]}>{title}</Text>
        </View>
    </View>
  );

};

export default TwoColumnIconLeft;

const styles = StyleSheet.create({
    title: {
      textAlign: 'center',
      justifyContent: 'center',
      fontFamily: "SF Pro",
      fontSize: 30

    },   
    subTitle: {
      textAlign: 'center',
      justifyContent: 'center',
      fontFamily: "SF Pro",
      fontSize: 15
    },  
    bodyText: {
      textAlign: 'center',
      justifyContent: 'center',
      fontFamily: "SF Pro",
      fontSize: 15
    },  
    
  })