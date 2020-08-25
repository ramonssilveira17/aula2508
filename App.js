import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
Icon.loadFont()

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.views, styles.child1]}></View>
      <Icon name="android" size={50} color={"#783762"}></Icon>
      <View style={[styles.views, styles.child2]}></View>
      <View style={[styles.views, styles.child3]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-around',
    flexDirection: 'row',
    alignItems: 'center',
  },
  views:{
    width: 50,
    height: 50,
    margin: 10,
  },
  child1: {
    backgroundColor: 'powderblue',
    elevation: 10,
    borderRadius: 5,
  },
  child2: {
    backgroundColor: 'skyblue',
    borderRadius: 15,
  },
  child3: {
    backgroundColor:'steelblue',
    borderRadius: 30,
  },

});