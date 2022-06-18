import React from 'react';
import { Image, SafeAreaView, StyleSheet, Text, View, Button, Alert } from 'react-native';
import { ImageBackground, Dimensions } from 'react-native';
import { ThreeColumnVertical } from './ThreeColumnVertical'
import { TwoColumnIconLeft } from './TwoColumnIconLeft'


const deviceWidth = Dimensions.get('window').width

export function DisplayCardIconMiddle(props) {
  return (
    <View style={[styles.card, styles.shadowProp, styles.openingCardStyle]}>

      <View style={{ flex: .15, marginTop: 10 }}>
        <Text style={[styles.title]}>{props.title}</Text>
      </View>

      <View style={{
        flex: .15, paddingBottom: 30, justifyContent: 'absolute'
      }}>
        <Text style={[{ paddingTop: 0 }, styles.subTitle]}>{props.subtitle}</Text>
        <Text style={[{ paddingTop: 3, paddingBottom: 0 }, styles.subTitle]}>{props.subtitle2}</Text>

      </View>

      <View style={{ flex: .5 }}>
        <TwoColumnIconLeft
          style={[{ padding: 20 }]}
          title={props.title}
          subtitle={props.subtitle}
          body={props.body}
        >
        </TwoColumnIconLeft>
      </View>

      <View style={{ flex: .10 }}>
        <Button
          backgroundColor="Navy"
          title="GET STARTED >"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
      </View>

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
    textAlign: 'center',
    fontSize: 30,
    fontStyle: 'bold',
    padding: 10
  },
  subTitle: {
    textAlign: 'left',
    fontSize: 15,
    fontStyle: 'bold',
    padding: 20,
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
  openingCardStyle: {
    bottom: 65,
    position: 'absolute',
    height: 550
  }

})