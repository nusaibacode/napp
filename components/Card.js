import React, { useState, Component }  from 'react';
import { Alert, Image, View, StyleSheet, Text, TouchableHighlight, ImageBackground, Button } from 'react-native';
import { container, deviceWidth } from '../styles/styles'
import MyComponent from './MyComponent';


export class Card extends React.Component { 
    render() { 
      const openingCardStyle = {bottom: 65, position: 'absolute', height: 550}

      return (
        <View style={[container.card, container.shadowProp, openingCardStyle]}>
          </View>
  
      );
    }
  }

  export default Card;