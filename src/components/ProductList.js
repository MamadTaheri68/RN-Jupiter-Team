
import React, { useEffect } from 'react';
import { Text, FlatList, View, ActivityIndicator, TouchableOpacity } from 'react-native';
import Product from './Product';
import { useDispatch, useSelector } from 'react-redux';
import { productMoreActions, productsAction } from './../redux/action/productAction';
import { styles } from '../assets/styles/ProductsLisrStyle';

const ProductList = ({ query }
) => {


    const dispatch = useDispatch();
    const newModel = useSelector(state => state.producReducer);


    useEffect(() => {
        const requestAPI = async () => {
            dispatch(productsAction(query));
        }
        requestAPI();
    }, [query])


    const renderFooter = () => {
        return (
            // Footer View with Loader
            <View style={styles.viewFooter}>
                {newModel.moreLoading === true && newModel.isListEnd === false ?
                    (<ActivityIndicator size={'large'} color="grey" style={{ margin: 15 }} />)
                    : (null)}
                {newModel.moreLoading === false && newModel.isListEnd === true ?
                    (<Text>No more item more</Text>)
                    : (null)}

            </View>
        );
    };

    const fetchMoreData = async () => {
        dispatch(productMoreActions(query));
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
                {
                    newModel.isListEnd && newModel.data === [] ? (
                        <Text style={styles.txtEmptyList}>
                            No Data at  the moment or check Internt
                        </Text>) : (null)
                }

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
                            <Product valueProduct={item} />
                        )}
                        onEndReachedThreshold={0.2}
                        onEndReached={fetchMoreData}
                        ListFooterComponent={renderFooter}
                        ListEmptyComponent={renderEmpty}
                    />)
            }

        </View>
    )
}

export default ProductList;

