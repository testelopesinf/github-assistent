import { StyleSheet } from 'react-native';

const colors = {
    dark: StyleSheet.create({
        mainColor: {
            color: '#24292e'
        },
        themeColor:{
            color: '#293642'
        },
        subColor: {
            color: '#98D2EB'
        },
        fontColor: {
            color: 'white'
        }
    }),
    light: StyleSheet.create({
        mainColor: {
            color: '#24292e'
        },
        themeColor:{
            color: '#e1e4e8'
        },
        subColor: {
            color: '#98D2EB'
        },
        fontColor: {
            color: 'black'
        }
    })
}

export default colors;