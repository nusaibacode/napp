import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { ImageBackground, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width


export function TwoColumnIconLeft(props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const body = props.body;

  return (

    <View>
      <View style={[{ flexDirection: "row" }, styles.container]}>
        <View style={[{ flex: .25 }, styles.imageContainer, styles.content]}><Image style={[styles.imageStyle]} source={require("./../Assets/watermelon.png")} /></View>
        <View style={[{ backgroundColor: 'pink', flex: .75, }, styles.content]}><Text style={[{ padding: 25, textAlign: 'left', justifyContent: "center" }, styles.subTitle]}>{title}</Text></View>
      </View>
      <View style={[{ flexDirection: "row" }, styles.container]}>
        <View style={[{ flex: .25 }, styles.imageContainer, styles.content]}><Image style={[styles.imageStyle]} source={require("./../Assets/watermelon.png")} /></View>
        <View style={[{ backgroundColor: 'pink', flex: .75, }, styles.content]}><Text style={[{ padding: 20, textAlign: 'left', justifyContent: "center" }, styles.subTitle]}>{title}</Text></View>
      </View>
    </View>
  );

};

export default TwoColumnIconLeft;


const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  imageContainer: {
    width: 180,
    height: 200,
    aspectRatio: 1,
  },
  content: {
    padding: 10
  },
  title: {
    textAlign: 'center',
    justifyContent: 'center',
    fontFamily: "SF Pro",
    fontSize: 30

  },
  imageStyle: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  subTitle: {
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