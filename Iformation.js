import React from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

function Iformation({ navigation }) {
  return (
    <View style={styles.container}>
        <View style={styles.search}>
            <View style={{justifyContent: 'space-between', flexDirection: 'row',}}>
                <Text style={styles.text1}>MATE</Text>
                <View style={{flexDirection: 'row'}}>
                    <Fontisto style={styles.map_icon} name="map" size={24} color="black" />
                    <Fontisto style={styles.bell_icon} name="bell" size={24} color="black" />
                </View>
            </View>
        </View>
        <View style={styles.carpool}>

        </View>
        <View style={styles.footer}>
            <Fontisto name="comment" size={24} color="black" style={styles.messege_icon}/>
            <Fontisto name="home" size={24} color="black" style={styles.home_icon}/>
            <Fontisto name="plus-a" size={24} color="black" style={styles.plus_icon}/>
            <Fontisto name="bookmark" size={24} color="black" style={styles.save_icon}/>
            <Ionicons name="person-outline" size={24} color="black" style={styles.profile_icon}/>
        </View>

    </View>
  );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    search: {
        flex: 1,
        backgroundColor: '#315EFF',
        borderRadius: 20,
    },
    carpool: {
        flex: 4,
        backgroundColor: 'tomato',
    },
    footer: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between'
    },
    text1: {
        marginLeft: 15,
        fontSize: 24,
        color: '#315EFF',        
        fontWeight: 'bold',
        marginTop: 15,
        color: '#FFFFFF',
    },
    map_icon: {
        fontSize: 24,
        marginTop: 15,
        color: '#FFFFFF',
        justifyContent: 'space-between',
        marginRight: 20,
    },
    bell_icon: {
        fontSize: 24,
        marginTop: 15,
        color: '#FFFFFF',
        justifyContent: 'space-between',
        marginRight: 28,
    },
    messege_icon: {
        marginLeft: 32,
        marginTop: 21,
        marginBottom: 42,
        color: 'black',
    },
    home_icon: {
        marginTop: 21,
    },
    plus_icon: {
        marginTop: 21,
    },
    save_icon: {
        marginTop: 21,
    },
    profile_icon: {
        marginTop: 21,
        marginRight: 29,
        
    },

});

export default Iformation;