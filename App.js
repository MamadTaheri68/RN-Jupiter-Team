import React, { useState } from 'react';
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

const App = () => {

  const [query, setQuery] = useState("");

  const searchHandler = (query) => {
    setQuery(query);
  }

  return (
    <View style={{ flex: 1 }}>
      <SearchBox onSearch={searchHandler} />
      {/* <Product /> */}
      {/* <ProductList/> */}

      {
        query === "" ? (
          <Text>welcome</Text>
        )
        :
        (
          <Text>{query}</Text>
        )
      }

    </View>
    
  );
};

export default App;
