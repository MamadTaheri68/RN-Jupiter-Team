import {StyleSheet,  Dimensions} from 'react-native';

const { width, height } = Dimensions.get('screen');

  export const styles = StyleSheet.create({
    cardProduct: {
        paddingVertical: '3%',
        paddingHorizontal: '5%',
        width: '100%',
        height: '15%',
        flex: 1
    },
    rowTop: {
        marginVertical: '1.5%',
        width: '38%',
        alignSelf: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowBottom: {
        flexDirection: 'row'
    },
    txtScores: {
        fontSize: 15,
        color: '#a3a3a3'
    },
    columnLeft: {
        width: '65%'
    },
    columnRight: {
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewTitleDescription: {
        alignItem: "center",
        marginBottom: '10%'
    },
    viewPriceDeal: {
        width: '40%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    txtTitle: {
        fontSize: 15,
        color: '#a3a3a3'
    },
    txtDescription: {
        fontSize: 15,
        color: '#a3a3a3'
    },
    txtPriceDeal: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 15
    },
    txtDeal: {
        color: '#a3a3a3',
        fontSize: 14
    },
    txtPriceMain: {
        color: '#000',
        fontSize: 24,
        fontWeight: 'bold'
    },
})