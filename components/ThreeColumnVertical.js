import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { ImageBackground, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width


export function ThreeColumnVertical(props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const body = props.body;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        padding: 30
      }}
    >
      <Text style={[{ backgroundColor: "blue", flex: .25 }, styles.title]}>{title}</Text>

      <Text style={[{ backgroundColor: "red", flex: .5 }, styles.subTitle]}>{subtitle}</Text>

      <Text style={[{ backgroundColor: "green", flex: .25 }, styles.bodyText]}>{body}</Text>

    </View>
  );

};

export default ThreeColumnVertical;

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