import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import SearchBox from './src/components/SearchBox';
import ProductList from './src/components/ProductList';
import SearchProductsByTitleService from './src/services/SearchProductsByTitleService';

const App = () => {
  const [query, setQuery] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isListEnd, setIsListEnd] = useState(false);

  const searchHandler = query => {
    setQuery(query);
     setProducts([{ id: 1, isLoading: true }, { id: 2, isLoading: true }, { id: 3, isLoading: true },{ id: 4, isLoading: true },{ id: 5, isLoading: true }]);
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
      setIsListEnd(true);
    });
  };

  return (
    <View style={{flex: 1}}>
      <SearchBox onSearch={searchHandler} />
      {query === '' && !isLoading && <Text style={styles.counter}>welcome</Text>}
      {query === '' && isLoading && <Text>Loading...</Text>}
      {query !== '' && !isLoading && products.length === 0 && (
        <View>
          <Text style={styles.counter}>Nothing Found. Please search again</Text>
        </View>
      )}
      {query !== '' && (
        <View style={{flex: 1}}>
          <ProductList valueProducts={products} isListEnd={isListEnd} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  counter: {
    color: '#007bff',
    padding: 8,
  },
});

export default App;
