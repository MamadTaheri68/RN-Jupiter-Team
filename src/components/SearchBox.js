import React, {useState} from 'react';
import {
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Keyboard,
} from 'react-native';

import approve from '../assets/icons/approve.png';
import reject from '../assets/icons/reject.png';

const SearchBox = ({onSearch}) => {
  const [text, setText] = useState('');

  const handleDeleteInput = () => {
    Keyboard.dismiss();
    setText('');
  };

  const handleSearch = () => {
    Keyboard.dismiss();
    const tempText = text;
    setText("");
    onSearch(tempText);
  };

  return (
    <View style={styles.SearchBoxContainer}>
      <TouchableOpacity
        onPress={() => handleSearch()}
        style={styles.SearchBoxLeft}>
        <View>
          <Image style={styles.SearchBoxImage} source={approve} />
        </View>
      </TouchableOpacity>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.SearchBoxCenter}>
        <TextInput
          placeholder={'Enter Product name, brand or ...'}
          value={text}
          onChangeText={text => setText(text)}
        />
      </KeyboardAvoidingView>
      <TouchableOpacity
        onPress={() => handleDeleteInput()}
        style={styles.SearchBoxRight}>
        <View>
          <Image style={styles.SearchBoxImage} source={reject} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBoxContainer: {
    flexDirection: 'row',
    padding: 8,
    borderColor: 'red',
    borderWidth: 2,
    borderStyle: 'solid',
  },
  SearchBoxLeft: {
    flex: 1,
  },
  SearchBoxCenter: {
    padding: 0,
    marginHorizontal: 6,
    height: 50,
    flex: 5,
    borderColor: '#cfcfcf',
    borderWidth: 1,
    borderStyle: 'solid',
    borderRadius: 6,
  },
  SearchBoxRight: {
    flex: 1,
  },
  SearchBoxImage: {
    width: 50,
    height: 50,
  },
});

export default SearchBox;
