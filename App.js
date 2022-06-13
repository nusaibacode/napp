import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text> Yo, welcome to Nappy and relaly long text</Text>
      <Text>Here's a picture of me.</Text>
      <Image style={styles.mediumImage} source={require('./assets/nusaiba_matcha.jpg')}/>
      <Text>Here's a random pic</Text>
      <Image source={{
        width: 200,
        height: 200,
        uri: "https://picsum.photos/200/300"}}/>
    </SafeAreaView>
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
