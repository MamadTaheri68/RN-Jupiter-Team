import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import SearchBox from './src/components/SearchBox';
import Product from './src/components/Product';
import ProductList from './src/components/ProductList';
import SearchProductsByTitleService from './src/services/SearchProductsByTitleService';

const App = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchHandler = query => {
    setQuery(query);
    setProducts([]);
    if (query !== '') {
      getProducts(query);
    }
  };

  const getProducts = queryString => {
    setIsLoading(true);
    console.log('getProducts for :' + queryString);
    const serviceResult = SearchProductsByTitleService(queryString);
    serviceResult.then(data => {
      setIsLoading(false);
      setProducts(data);
    });
  };

  return (
    <ScrollView style={{flex: 1}}>
      <SearchBox onSearch={searchHandler} />
      {/* <Product /> */}
      {/* <ProductList/> */}

      {query === '' && !isLoading && <Text>welcome</Text>}
      {query === '' && isLoading && <Text>Loading...</Text>}

      {query !== '' && !isLoading && (
        <View>
          <Text style={styles.counter}>
            {products.length} Products Found...
          </Text>
          {products.map((product, index) => (
            <View key={index}>
              <Text>------------------------------</Text>
              <Text>{product.title}</Text>
            </View>
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  counter: {
    color: '#007bff',
    padding: 8,
  },
});

export default App;
