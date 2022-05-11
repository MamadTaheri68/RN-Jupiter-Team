import React, {useState} from 'react';
import {
  Text,
  StyleSheet,
  Image,
  View,
} from 'react-native';
import logo from "../assets/icons/react.png"

const Welcome = ({onSearch}) => {

  return (
    <View style={styles.SearchBoxContainer}>
       <Text style={styles.mainText}>welcome</Text>
       <Image style={styles.logo} source={logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  SearchBoxContainer: {
    flex: 1,
    alignItems: "center",
    paddingTop: 20,
  },
  mainText: {
    color: '#007bff',
    fontSize: 25,
    padding: 25,
  },
  logo: {
    marginTop: 25,
  }
});

export default Welcome;
