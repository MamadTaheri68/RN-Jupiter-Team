import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('screen');

export const styles = StyleSheet.create({
    separator: {
        marginRight: '2%',
        borderTopWidth: 1,
        borderTopColor: '#a3a3a3',
    },
    txtEmptyList: {
        fontWeight: 'bold',
        fontSize: 24,
        color: 'red',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewFooter:{
        padding: '5%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
});