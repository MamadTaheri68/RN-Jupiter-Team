import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import SearchBox from './src/components/SearchBox';
import ProductList from './src/components/ProductList';
import Welcome from "./src/components/Welcome";

const App = () => {

  const [query, setQuery] = useState('');
  const stateRedux = useSelector(state => state.producReducer);

  const searchHandler = query => {
    setQuery(query);
  };


  return (
    <View style={{ flex: 1 }}>

      {/* <Provider store={store}> */}

      <SearchBox onSearch={searchHandler} />
      {query === '' && !stateRedux.isLoading && <Welcome />}
      {query !== '' && (
        <View style={{ flex: 1 }}>
          <ProductList query={query} />
        </View>
      )}

      {/* </Provider> */}
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
