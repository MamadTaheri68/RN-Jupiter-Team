import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Product from './src/components/Product';
import ProductList from './src/components/ProductList';

const App = () => {


  return (
    <View style={{ flex: 1 }}>
      <Product />
      {/* <ProductList/> */}
    </View>

    
  );
};

export default App;
