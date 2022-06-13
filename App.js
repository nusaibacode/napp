import React, { useState }  from 'react';
import { Alert, Image, View, StyleSheet, Text, TouchableHighlight, Button } from 'react-native';

export default function App() {
  const handleImagePress = () => Alert.alert("Image Press", "You pressed the image.", 
  [
    {text: 'Yes', onPress:() => console.log('Yes image button pressed')}, 
    {text:'No', onPress:()=> console.log('No image button pressed')}
  ])
  return (
    <View style={styles.container}>
      <Text> Yo, welcome to Nappy and relaly long text</Text>
      <Text>Here's a picture of me.</Text>
      <Image style={styles.mediumImage} source={require('./assets/nusaiba_matcha.jpg')}/>
      <Text>Here's a random pic</Text>
      <TouchableHighlight
      onPress={handleImagePress}>
        <Image source={{
          width: 200,
          height: 200,
          uri: "https://picsum.photos/200/300"}}/>
      </TouchableHighlight>
          <Button
          color="dodgerblue"
          title= "Click here"
          backgroundColor ="green"
          onPress={handleImagePress}>
          </Button>
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
  smallImage: {
    width: 50,
    height: 50
  },
  mediumImage: {
    width: 150,
    height: 150
  }
});
