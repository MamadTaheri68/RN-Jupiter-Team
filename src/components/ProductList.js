
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, FlatList, View, Dimensions, ActivityIndicator, TouchableOpacity } from 'react-native';
import Product from './Product';
import { styles } from '../assets/styles/productStyle';
import { useDispatch, useSelector } from 'react-redux';
import { productAction } from './../redux/action/productAction';
const { width, height } = Dimensions.get('screen');


const ProductList = (
    // { valueProducts, isListEnd }
) => {

    const [page, setPage] = useState(1);
    const dispatch = useDispatch();
    const newModel = useSelector(state => state.producReducer);

    const requestAPI = () => {
        params = { page: page }
        dispatch(productAction(params));
    }

    useEffect(() => {
        requestAPI();
        console.log("Current page", page)
    }, [page])



    const renderFooter = () => {
        return (
            // Footer View with Loader
            <View style={{
                padding: 10,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row'
            }}>
                {newModel.moreLoading && <ActivityIndicator size={'large'} color="grey" style={{ margin: 15 }} />}
                {newModel.isListEnd && <Text>No more item</Text>}
                {/* {!isListEnd ? (
                    <ActivityIndicator
                        size={'large'}
                        color="grey"
                        style={{ margin: 15 }} />
                ) : null} */}
            </View>
        );
    };

    const fetchMoreData = () => {
        if (!newModel.isListEnd && newModel.moreLoading) {
            setPage((page) => page + 1);
        }
    }

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View style={styles.separator} />
        );
    };

    const renderEmpty = () => {
        return (
            <View>
                <Text>No Data at  the moment</Text>
                <TouchableOpacity onPress={requestAPI}>
                    <Text>Refresh</Text>
                </TouchableOpacity>
            </View>
        )

    }

    return (
        <View style={{ flex: 1 }}>
            {
                newModel.loading ?
                    (<View>
                        <ActivityIndicator size={'large'} color="grey" style={{ margin: 15 }} />
                    </View>
                    ) :
                    (<FlatList
                        data={newModel.data}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={(product) => product.id}
                        ItemSeparatorComponent={ItemSeparatorView}
                        renderItem={({ item }) => (
                            <Text>1</Text>
                            // <Product valueProduct={item} />
                        )
                        }
                        ListFooterComponent={renderFooter}
                        ListEmptyComponent={renderEmpty}
                        onEndReachedThreshold={0.2}
                        onEndReached={fetchMoreData}
                    />)
            }

        </View>
    )
}

export default ProductList;