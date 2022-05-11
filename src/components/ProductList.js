
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions, ActivityIndicator, Alert } from 'react-native';
import Product from './Product';
import { styles } from '../assets/styles/productStyle';
const { width, height } = Dimensions.get('screen');


const ProductList = ({ valueProducts, isLoading }) => {
    console.log('valueProducts', valueProducts);
    console.log('isLoading', isLoading);
    // const [loading, setLoading] = useState(false);
    // const [dataSource, setDataSource] = useState([]);
    // const [offset, setOffset] = useState(1);
    // const [isListEnd, setIsListEnd] = useState(false);
    // useEffect(() => getData(), []);

    // const getData = () => {
    //     console.log(offset);
    //     if (!loading && !isListEnd) {
    //         console.log('getData');
    //         setLoading(true);
    //         // Service to get the data from the server to render
    //         fetch('https://aboutreact.herokuapp.com/getpost.php?offset='
    //             + offset)
    //             // Sending the currect offset with get request
    //             .then((response) => response.json())
    //             .then((responseJson) => {
    //                 // Successful response from the API Call
    //                 console.log(responseJson);
    //                 if (responseJson.results.length > 0) {
    //                     setOffset(offset + 1);
    //                     // After the response increasing the offset
    //                     setDataSource([...dataSource, ...responseJson.results]);
    //                     setLoading(false);
    //                 } else {
    //                     setIsListEnd(true);
    //                     setLoading(false);
    //                 }
    //             })
    //             .catch((error) => {
    //                 console.error(error);
    //             });
    //     }
    // };

    const renderFooter = () => {
        return (
            // Footer View with Loader
            <View style={{
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                {isLoading.isLoading ? (
                    <ActivityIndicator
                        color="grey"
                        style={{ margin: 15 }} />
                ) : null}
            </View>
        );
    };

    // const ItemView = ({ item }) => {
    //     return (
    //         // Flat List Item
    //         <Text
    //             style={styles.itemStyle}
    //             onPress={() => getItem(item)}>
    //             {item.id}
    //             {'.'}
    //             {item.title.toUpperCase()}
    //         </Text>
    //     );
    // };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View style={styles.separator} />
        );
    };

    // const getItem = (item) => {
    //     // Function for click on an item
    //     alert('Id : ' + item.id + ' Title : ' + item.title);
    // };
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={valueProducts}
                keyExtractor={(product) => product.id}
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={({ item }) => <Product valueProduct={item} isLoading={isLoading} />}
                ListFooterComponent={renderFooter}
                //  onEndReached={({item})=>getData(item)}
                onEndReachedThreshold={0.5}
            />
        </View>
    )
}

export default ProductList;