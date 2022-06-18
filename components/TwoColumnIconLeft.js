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
        <View style={[{ flex: .25 }, styles.imageContainer, styles.content, { paddingTop: 25, paddingLeft: 20, justifyContent: 'flex-right' }]}><Image style={[styles.imageStyle, { padding: 0 }]} source={require("./../Assets/icon_send_plane.png")} /></View>
        <View style={[{ flex: .75, }, styles.content]}><Text style={[{ padding: 25, textAlign: 'left', justifyContent: "center" }, styles.subTitle, { paddingLeft: 0 }]}>Show us your content</Text></View>
      </View>
      <View style={[{ flexDirection: "row" }, styles.container, { paddingBottom: 0, paddingTop: 30 }]}>
        <View style={[{ flex: .25 }, styles.imageContainer, styles.content, { paddingTop: 25, paddingLeft: 20, justifyContent: 'flex-right' }]}><Image style={[styles.imageStyle, { padding: 0 }]} source={require("./../Assets/icon_check_double.png")} /></View>
        <View style={[{ flex: .75, }, styles.content]}><Text style={[{ padding: 25, textAlign: 'left', justifyContent: "center" }, styles.subTitle, { paddingLeft: 0 }]}>Get your review</Text></View>
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
    width: '50%',
    height: '50%',
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