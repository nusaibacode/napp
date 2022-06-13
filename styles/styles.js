import { Dimensions, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get('window').width

export const Bar = StyleSheet.create({
    bar: {
        position: 'absolute',
        bottom: 0,
        width: "100%",
        height: "10%",
        backgroundColor: '#FFC107',
        borderRadius: 9,
    },
    card: {
        marginTop: 16,
        width: deviceWidth - 32,
        marginHorizontal: 16,
        backgroundColor: '#FFF',
        height: deviceWidth / 2,
        borderRadius: 16,
      },
      shadowProp: {
        shadowRadius: 12,
        shadowOpacity: 0.8,
        shadowColor: "#757575",
        shadowOffset: {
          width: 0,
          height: 3,
        },
      },
})
