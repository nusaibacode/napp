import React, { useState }  from 'react';
import { Image, View, StyleSheet, Text, TouchableHighlight, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text> Yo, welcome to Nappy and relaly long text</Text>
      <Text>Here's a picture of me.</Text>
      <Image style={styles.mediumImage} source={require('./assets/nusaiba_matcha.jpg')}/>
      <Text>Here's a random pic</Text>
      <TouchableHighlight
      onPress={()=> console.log('Image pressed.')}>
        <Image source={{
          width: 200,
          height: 200,
          uri: "https://picsum.photos/200/300"}}/>
      </TouchableHighlight>
          <Button
          color="dodgerblue"
          title= "Click here"
          backgroundColor ="green"
          onPress={()=> console.log("Button pressed.")}>
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
