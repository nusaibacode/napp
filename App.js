import React, { useState, Component }  from 'react';
import { Alert, Image, View, StyleSheet, Text, TouchableHighlight, ImageBackground, Button } from 'react-native';
import { Card } from './components/Card';
import MyComponent from './components/MyComponent';
import { container, deviceWidth } from './styles/styles'

export default function App() {
  return (
    <View style={container.container}>
      <ImageBackground style={container.container} source={require("./assets/gradient_dark_orange_navy.jpeg")}>
        <Card></Card>
          </ImageBackground>
    </View>
  );
}

