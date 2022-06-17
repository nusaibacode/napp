import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { ImageBackground, Dimensions } from 'react-native';
import {ThreeColumnVertical} from './ThreeColumnVertical'
import {TwoColumnIconLeft} from './TwoColumnIconLeft'


const deviceWidth = Dimensions.get('window').width

export function DisplayCardIconMiddle (props) {
  return (
    <View style={[styles.card, styles.shadowProp, styles.openingCardStyle]}>
      <Text style={[{ backgroundColor: "red", flex: .25 }]}></Text>

      <TwoColumnIconLeft
      title={props.title}
      subtitle={props.subtitle}
      body={props.body} 
      >
      </TwoColumnIconLeft>

      <Text style={[{ backgroundColor: "red", flex: .25 }]}></Text>


      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />  
    </View>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#f4ae74',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      alignItems: 'center',
      justifyContent: 'center',
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
    
  })