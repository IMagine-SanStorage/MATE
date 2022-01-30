import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react';

export default class Main extends Component{
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.ikw_text}>MainPage</Text>
        <Text style={styles.main_text}>MATE</Text>
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#315EFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ikw_text: {
    fontSize: 32,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  main_text: {
    fontSize: 64,
    color: '#ffffff',
    fontWeight: 'bold',
  },
});
