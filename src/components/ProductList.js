
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions, ActivityIndicator, Alert } from 'react-native';
import Product from './Product';
import { styles } from '../assets/styles/productStyle';
const { width, height } = Dimensions.get('screen');
{/* <ProductList isLoading={isLoading} valueProducts={products} /> */ }

const ProductList = ({ valueProducts ,isListEnd}) => {
    

    const renderFooter = () => {
        return (
            // Footer View with Loader
            <View style={{
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                {!isListEnd ? (
                    <ActivityIndicator
                        size={'large'}
                        color="grey"
                        style={{ margin: 15 }} />
                ) : null}
            </View>
        );
    };

  

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View style={styles.separator} />
        );
    };

    
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={valueProducts}
                showsVerticalScrollIndicator={false}
                keyExtractor={(product) => product.id}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={({ item }) => (
                    <Product valueProduct={item} />
                )
                }
                  ListFooterComponent={renderFooter}
            />
        </View>
    )
}

export default ProductList;