import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity } from "react-native";
import MapView,  { PROVIDER_GOOGLE }  from 'react-native-maps';
import { Input } from 'react-native-elements';

function Ticket({ navigation }) {
    const [mapRegion, setmapRegion] = useState({
        latitude: 36.16787949018121,
        longitude: 128.46766758252372,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      });
    
    return (
        <View style={styles.container}>
            <MapView style={styles.map} region={mapRegion}/>
            <View style={styles.search_container}>
                <View style={styles.search_location_text}>
                    <Text style={{color: '#A4A4B2', fontSize: 12,}}>Your location</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Input containerStyle={{width: 295, }} inputStyle={{fontSize: 16}}></Input>
                </View>
                <View style={styles.search_whereto_text}>
                    <Text style={{color: '#A4A4B2', fontSize: 12,}}>Where to?</Text>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Input containerStyle={{width: 295,}} inputStyle={{fontSize: 16}}></Input>
                </View>
                <View style={{alignItems: 'center'}}>
                    <TouchableOpacity style={{width: 343, height: 52, alignItems: 'center', justifyContent: 'center', borderWidth: 2}}>
                        <View style={styles.search_buton}>
                            <Text style={{fontSize: 13,  fontWeight: 'bold'}}>검색</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    map: {
        flex: 5,
        width: '100%',
        height: '80%',
    },
    search_container: {
        flex: 3,
        backgroundColor: '#FFFFFF',
        borderRadius: 20,
    },
    search_location_text: {
        marginTop: 20,
        marginLeft: 60,
        marginBottom: 4,
    },
    search_whereto_text: {
        marginTop: 2,
        marginLeft: 60,
    },
});

export default Ticket;