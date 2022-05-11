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

const valueProducts=[
  {isLoading:true},
[
  {"title":" Full Murderhobo, Book 2","image":"https:\/\/m.media-amazon.com\/images\/I\/81WlUv+rYqL._AC_UY218_.jpg","brand":null,"price":{"main":"24.95","deal":"0.00"},"id":"B09TPYC165","review":{"people":"3820","stars":"4.8"},"prime":false},
  {"title":"Anything for Love","image":"https:\/\/m.media-amazon.com\/images\/I\/91ZJjLMpwQL._AC_UY218_.jpg","brand":null,"price":{"main":"4.99","deal":null},"id":"B01NAJA25H","review":{"people":"552","stars":"3.5"},"prime":false},
  {"title":"Anything Is Possible: A Novel","image":"https:\/\/m.media-amazon.com\/images\/I\/81oQwPZhBeL._AC_UY218_.jpg","brand":null,"price":{"main":"17.00","deal":"11.99"},"id":"B01LY2BN5I","review":{"people":"552","stars":"4"},"prime":false},
  {"title":" Full Murderhobo, Book 2","image":"https:\/\/m.media-amazon.com\/images\/I\/81WlUv+rYqL._AC_UY218_.jpg","brand":null,"price":{"main":"24.95","deal":"0.00"},"id":"B09TPYC1765","review":{"people":"3820","stars":"4.8"},"prime":false},
  {"title":"Anything for Love","image":"https:\/\/m.media-amazon.com\/images\/I\/91ZJjLMpwQL._AC_UY218_.jpg","brand":null,"price":{"main":"4.99","deal":null},"id":"B01NAJA257H","review":{"people":"552","stars":"3.5"},"prime":false},
  {"title":"Anything Is Possible: A Novel","image":"https:\/\/m.media-amazon.com\/images\/I\/81oQwPZhBeL._AC_UY218_.jpg","brand":null,"price":{"main":"17.00","deal":"11.99"},"id":"B01LY2uBN5I","review":{"people":"552","stars":"4"},"prime":false}

]
];

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
