
import React from 'react';
import {
  StyleSheet,
  Text,
  FlatList,
  View,
  Dimensions
} from 'react-native';

const { width, height } = Dimensions.get('screen');


const ProductList = () => {
    return(
        <View>
            <FlatList/>
        </View>
    )
}
export default ProductList;