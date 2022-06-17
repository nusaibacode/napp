import React from 'react';
import { render } from 'react-dom';
import { Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import { ImageBackground, Dimensions, Button } from 'react-native';
import {DisplayCard} from './Components/DisplayCard'
import {ThreeColumnVertical} from './Components/ThreeColumnVertical'


const deviceWidth = Dimensions.get('window').width

export default function App() {
  return (

    <ImageBackground style={{flex: 1}} source={require("./Assets/gradient_dark_orange_navy.png")}>
    <DisplayCard>
      <ThreeColumnVertical></ThreeColumnVertical>
    </DisplayCard>
    </ImageBackground>
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
  openingCardStyle:{
    bottom: 65, 
    position: 'absolute', 
    height: 550
  }
  
});
