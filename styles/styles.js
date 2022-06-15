import { Dimensions, StyleSheet } from "react-native";

const deviceWidth = Dimensions.get('window').width

export const container = StyleSheet.create({
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
        },
    titleText: {
        marginHorizontal: 16,
        marginVertical: 16,
        height: deviceWidth * 1,
        width: deviceWidth - 32,
        font: 'Comic Sans'
        },
      },
})
