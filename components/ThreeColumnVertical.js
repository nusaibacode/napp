import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Button, Alert} from 'react-native';
import { ImageBackground, Dimensions } from 'react-native';
const deviceWidth = Dimensions.get('window').width


export function ThreeColumnVertical (props){
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        padding: 30
      }}
    >
      <Text style={{ backgroundColor: "blue", flex: 0.3 }}>Title</Text>

      <Text style={{ backgroundColor: "red", flex: 0.5 }}>Subtitle</Text>

      <Text style={{ backgroundColor: "green", flex: 0.5 }}>Body paragraph</Text>
      <Button
        title="Press me"
        onPress={() => Alert.alert('Simple Button pressed')}
      />    
      </View>
  );
};

export default ThreeColumnVertical;

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