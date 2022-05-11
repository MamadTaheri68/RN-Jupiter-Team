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
]

const App = () => {


  return (
    <View style={{ flex: 1 }}>
      {/* <Product /> */}
      <ProductList isLoading={valueProducts[0]} valueProducts={valueProducts[1]} />
    </View>

    
  );
};

export default App;
