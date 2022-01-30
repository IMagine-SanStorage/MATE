import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet } from "react-native";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
        <Text style={styles.ikw_text}>IKW</Text>
        <Text style={styles.main_text}>MATE</Text>
        <Button
        color="white"
        title="Go to Login"
        onPress={() => navigation.navigate("Login")}
      />
        <StatusBar style="auto" />
      </View>
  );
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

export default Home;