import React, {useState} from "react";
import { StatusBar } from 'expo-status-bar';
import { View, Text, Button, StyleSheet, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import { Fontisto } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import Ticket from './Ticket';

const list_obj = { // 티켓 목록 정보들 
    카풀: {
        name : ['Son', 'Kim', 'Lee', 'Jon', 'June', 'Park'],
        department: ['항공소프트웨어공학과', '무인기공학과', '간호학과', '항공기계공학과', '경호학과', '경호학과'], // 학과
        local : ['인동'],
    },
    택시: {
        name : ['Son', 'Lee', 'Jon', 'Tom', 'Park', 'Jane'],
        department: ['항공소프트웨어공학과', '간호학과', '항공기계공학과', '물리치료학과', '경호학과', '항공기계공학과'], // 학과
        local : ['인동'],
    },
    배달: {
        name : ['Kim', 'Lee', 'Jon', 'Che', 'Tom', 'Jane'],
        department: ['무인기공학과', '간호학과', '항공기계공학과', '항공소프트웨어공학과', '물리치료학과', '항공기계공학과'], // 학과
        local : ['인동'],
    },
    버스: {
        name : ['Park', 'Kim', 'Mike', 'Tom', 'Lee', 'Che'],
        department: ['경호학과', '무인기공학과', '항공전자공학과', '물리치료학과', '간호학과', '항공소프트웨어공학과'], // 학과
        local : ['인동'],
    },
};


function Iformation({ navigation }) { // 정보 메인 부분
    const [carpool_selecting, setCarpoolSelect] = useState(true); // 카풀 선택일때 true, 아니면 false
    const [taxi_selecting, setTaxiSelect] = useState(false); //택시 선택일때 true, 아니면 false
    const [deliver_selecting, setDeliverSelect] = useState(false); //배달 선택일때 true, 아니면 false
    const [bus_selecting, setBusSelect] = useState(false); // 버스 선택일때 true, 아니면 false
    
    function selectName() {
        if (carpool_selecting === true) {
            return (Object.keys(list_obj)[0]); // 키값 배열중 요소 선택
        }
        else if (taxi_selecting === true) {
            return (Object.keys(list_obj)[1]);
        }
        else if (deliver_selecting === true) {
            return (Object.keys(list_obj)[2]);
        }
        else if (bus_selecting === true) {
            return (Object.keys(list_obj)[3]);
        }
    }
    
    const carpool_select = () => { // 카풀 선택
        setCarpoolSelect(true);
        setTaxiSelect(false)
        setDeliverSelect(false)
        setBusSelect(false)
    };
    const taxi_select = () => { // 택시 선택
        setCarpoolSelect(false);
        setTaxiSelect(true)
        setDeliverSelect(false)
        setBusSelect(false)
    };
    const deliver_select = () => { // 배달 선택
        setCarpoolSelect(false);
        setTaxiSelect(false)
        setDeliverSelect(true)
        setBusSelect(false)
    };
    const bus_select = () => { // 버스 선택
        setCarpoolSelect(false);
        setTaxiSelect(false)
        setDeliverSelect(false)
        setBusSelect(true)
    };

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
            <View style={styles.text_input_container}>
                <TextInput style={styles.input_start} placeholder='출발지'/>
                <Fontisto  style={{transform:[{ rotate: '90deg'}], marginTop: 13.5, marginLeft: 22}}name="plane" size={24} color="black" />
                <TextInput style={styles.input_start} placeholder='도착지'/>
            </View>
            <View style={styles.selection_container}>
                <View style={styles.selection_text}>
                
                    <View style={styles.selection_text_carpool}>
                        <TouchableOpacity onPress={carpool_select}>
                            <Text style={{width: 26.42, height: 13.39, fontSize: 17, marginLeft: 10,}}>카풀</Text>
                        </TouchableOpacity>
                        <View style={{...styles.status_bar, backgroundColor: carpool_selecting ? "#315EFF" : "#C4C4C4"}}/>
                    </View>
                    <View style={styles.selection_text_taxi}>
                        <TouchableOpacity onPress={taxi_select}>
                            <Text style={{width: 26.42, height: 13.39, fontSize: 17, marginLeft: 10}}>택시</Text>
                        </TouchableOpacity>
                        <View style={{...styles.status_bar, backgroundColor: taxi_selecting ? "#315EFF" : "#C4C4C4"}}/>
                    </View>
                    <View style={styles.selection_text_delivery}>
                        <TouchableOpacity onPress={deliver_select}>
                            <Text style={{width: 26.42, height: 13.39, fontSize: 17, marginLeft: 10}}>배달</Text>
                        </TouchableOpacity>
                        <View style={{...styles.status_bar, backgroundColor: deliver_selecting ? "#315EFF" : "#C4C4C4"}}/>
                    </View>
                    <View style={styles.selection_text_bus}>
                        <TouchableOpacity onPress={bus_select}>
                            <Text style={{width: 26.42, height: 13.39, fontSize: 17, marginLeft: 10}}>버스</Text>
                        </TouchableOpacity>
                        <View style={{...styles.status_bar, backgroundColor: bus_selecting ? "#315EFF" : "#C4C4C4"}}/>
                    </View>

                </View>
            </View>
        </View>
    
        <ScrollView style={styles.carpool}>
            <View style={{alignItems: "center",}}>
                <View style={styles.carpool_text}>
                    <Image style={styles.info_profile} source={require('./profile_img1.jpeg')}/>
                    <View style={styles.info_text_container}>
                        <Text style={styles.info_text1}>{list_obj[selectName()]['name'][0]}</Text>
                        <Text style={styles.info_text2}>{list_obj[selectName()]['department'][0]}</Text>
                    </View>
                    <View style={styles.info_carpool_container}>
                        <Text style={styles.info_carpool_text}>{selectName()}</Text>
                        <View style={styles.pointvar}/>
                    </View>
                    <View>
                        <Text style={styles.info_text_local}>{list_obj['카풀']['local'][0]}</Text>
                        <Text style={styles.info_time_text}>09:40</Text>
                    </View>
                    <View style={styles.count_container}>
                        <Text>1/4</Text>
                    </View>
                </View>
            </View>

            <View style={{alignItems: "center",}}>
                <View style={styles.carpool_text}>
                    <Image style={styles.info_profile} source={require('./profile_img1.jpeg')}/>
                    <View style={styles.info_text_container}>
                        <Text style={styles.info_text1}>{list_obj[selectName()]['name'][1]}</Text>
                        <Text style={styles.info_text2}>{list_obj[selectName()]['department'][1]}</Text>
                    </View>
                    <View style={styles.info_carpool_container}>
                        <Text style={styles.info_carpool_text}>{selectName()}</Text>
                        <View style={styles.pointvar}/>
                    </View>
                    <View>
                        <Text style={styles.info_text_local}>{list_obj[selectName()]['local'][0]}</Text>
                        <Text style={styles.info_time_text}>09:40</Text>
                    </View>
                    <View style={styles.count_container}>
                        <Text>1/4</Text>
                    </View>
                </View>
            </View>
           
            <View style={{alignItems: "center",}}>
                <View style={styles.carpool_text}>
                    <Image style={styles.info_profile} source={require('./profile_img1.jpeg')}/>   
                    <View style={styles.info_text_container}>
                        <Text style={styles.info_text1}>{list_obj[selectName()]['name'][2]}</Text>
                        <Text style={styles.info_text2}>{list_obj[selectName()]['department'][2]}</Text>
                    </View>
                    <View style={styles.info_carpool_container}>
                        <Text style={styles.info_carpool_text}>{selectName()}</Text>
                        <View style={styles.pointvar}/>
                    </View>
                    <View>
                        <Text style={styles.info_text_local}>{list_obj[selectName()]['local'][0]}</Text>
                        <Text style={styles.info_time_text}>09:40</Text>
                    </View>
                    <View style={styles.count_container}>
                        <Text>1/4</Text>
                    </View>
                </View>
            </View>
            
            <View style={{alignItems: "center",}}>
                <View style={styles.carpool_text}>
                    <Image style={styles.info_profile} source={require('./profile_img1.jpeg')}/>
                    <View style={styles.info_text_container}>
                        <Text style={styles.info_text1}>{list_obj[selectName()]['name'][3]}</Text>
                        <Text style={styles.info_text2}>{list_obj[selectName()]['department'][3]}</Text>
                    </View>
                    <View style={styles.info_carpool_container}>
                        <Text style={styles.info_carpool_text}>{selectName()}</Text>
                        <View style={styles.pointvar}/>
                    </View>
                    <View>
                        <Text style={styles.info_text_local}>{list_obj[selectName()]['local'][0]}</Text>
                        <Text style={styles.info_time_text}>09:40</Text>
                    </View>
                    <View style={styles.count_container}>
                        <Text>1/4</Text>
                    </View>
                </View>
            </View>
            
            <View style={{alignItems: "center",}}>
                <View style={styles.carpool_text}>
                    <Image style={styles.info_profile} source={require('./profile_img1.jpeg')}/>
                    <View style={styles.info_text_container}>
                        <Text style={styles.info_text1}>{list_obj[selectName()]['name'][4]}</Text>
                        <Text style={styles.info_text2}>{list_obj[selectName()]['department'][4]}</Text>
                    </View>
                    <View style={styles.info_carpool_container}>
                        <Text style={styles.info_carpool_text}>{selectName()}</Text>
                        <View style={styles.pointvar}/>
                    </View>
                    <View>
                        <Text style={styles.info_text_local}>{list_obj[selectName()]['local'][0]}</Text>
                        <Text style={styles.info_time_text}>09:40</Text>
                    </View>
                    <View style={styles.count_container}>
                        <Text>1/4</Text>
                    </View>
                </View>
            </View>

            <View style={{alignItems: "center",}}>
                <View style={styles.carpool_text}>
                    <Image style={styles.info_profile} source={require('./profile_img1.jpeg')}/>
                    <View style={styles.info_text_container}>
                        <Text style={styles.info_text1}>{list_obj[selectName()]['name'][5]}</Text>
                        <Text style={styles.info_text2}>{list_obj[selectName()]['department'][5]}</Text>
                    </View>
                    <View style={styles.info_carpool_container}>
                        <Text style={styles.info_carpool_text}>{selectName()}</Text>
                        <View style={styles.pointvar}/>
                    </View>
                    <View>
                        <Text style={styles.info_text_local}>{list_obj[selectName()]['local'][0]}</Text>
                        <Text style={styles.info_time_text}>09:40</Text>
                    </View>
                    <View style={styles.count_container}>
                        <Text>1/4</Text>
                    </View>
                </View>
            </View>
        </ScrollView>

        <View style={styles.footer}>
            <Fontisto name="comment" size={24} color="black" style={styles.messege_icon}/>
            <Fontisto name="home" size={24} color="black" style={styles.home_icon}/>
            <TouchableOpacity onPress={() => navigation.navigate("Ticket")}>
                <Fontisto name="plus-a" size={24} color="black" style={styles.plus_icon}/>
            </TouchableOpacity>
            <Fontisto name="bookmark" size={24} color="black" style={styles.save_icon}/>
            <Ionicons name="person-outline" size={24} color="black" style={styles.profile_icon}/>
        </View>
    </View>
  );
}
 
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#E5E5E5',
    },
    search: {
        flex: 0.5,
        backgroundColor: '#315EFF',
        borderRadius: 20,
    },
    carpool: {
        flex: 3,
        backgroundColor: '#E5E5E5',
        marginTop: 14,
    },
    footer: {
        flex: 0.3,
        flexDirection: 'row',
        backgroundColor: '#FFFFFF',
        justifyContent: 'space-between'
    },
    text1: {
        marginLeft: 15,
        fontSize: 24,
        color: '#315EFF',        
        fontWeight: 'bold',
        marginTop: 47,
        color: '#FFFFFF',
    },
    map_icon: {
        fontSize: 24,
        marginTop: 47,
        color: '#FFFFFF',
        justifyContent: 'space-between',
        marginRight: 20,
    },
    bell_icon: {
        fontSize: 24,
        marginTop: 47,
        color: '#FFFFFF',
        justifyContent: 'space-between',
        marginRight: 42,
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
    text_input_container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input_start: {
        width: 137.5,
        height: 33,
        backgroundColor: '#FFFFFF',
        paddingLeft: 10,
        fontSize: 16,
        marginLeft: 18,
        marginTop: 13.5,
        borderRadius: 8,
    },
    selection_container: {
        width: 355,
        height: 40,
        backgroundColor: '#FFFFFF',
        marginTop: 22,
        borderRadius: 8,
        marginLeft: 15,
    },
    selection_text: {
        flexDirection: 'row',
        width: 345,
        height: 40,
    },
    status_bar: {
        width: 47.75,
        height: 3.72,
        backgroundColor: '#315EFF',
        marginTop: 5.95,
    
        
    },
    selection_text_carpool: {
        width: 26.42,
        height: 13.9,
        marginLeft: 26.6,
        marginTop: 7,
        marginBottom: 19.61,
    },
    selection_text_taxi: {
        width: 26.42,
        height: 13.9,
        marginLeft: 62.90,
        marginTop: 7,
        marginBottom: 19.61,
    },
    selection_text_delivery: {
        width: 26.42,
        height: 13.9,
        marginLeft: 61.98,
        marginTop: 7,
        marginBottom: 19.61,
    },
    selection_text_bus: {
        width: 26.42,
        height: 13.9,
        marginLeft: 65.03,
        marginTop: 7,
        marginBottom: 19.61,
        marginRight: 10,
    },
    carpool_text: {
        width: 344,
        height: 55,
        backgroundColor: '#FFFFFF',
        marginBottom: 14,
        flexDirection: 'row',
       
    },
    info_text1: {
        width: 31,
        height: 15.4,
        marginTop: 11,
        marginLeft: 14.12,
    },
    info_text2: {
        width: 80,
        height: 15.4,
        marginTop: 5,
        marginLeft: 14.12,
        fontSize: 9,
    },
    info_profile: {
        resizeMode: 'stretch', 
        width: 33.8, 
        height: 35.2, 
        borderRadius: 25, 
        marginTop: 9.9, 
        marginLeft: 10
    },
    info_text_container: {
        flexDirection: 'column',
    },
    info_carpool_container: {
        marginTop: 14,
        width: 65,
        height: 30,
        alignItems: 'center',
        justifyContent: 'center'
     
    },
    info_carpool_text: {
        fontSize: 18,
    },
    pointvar: {
        backgroundColor: '#315EFF',
        width: 47,
        height: 4.09,
        marginTop: 6.17,
        borderRadius: 10,
    },
    info_text_local: {
        
        width: 31,
        height: 15.4,
        marginTop: 11,
        marginLeft: 14.12,
        color: '#B9696D',

    },
    info_time_text: {
        width: 40,
        height: 11,
        fontSize: 11,
        marginLeft: 9.12,
        marginTop: 6.6,

    },
    count_container: {
        width: 32,
        height: 35,
        backgroundColor: '#315EFF',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
        marginTop: 11,
        marginLeft: 25,
        
    },

});

export default Iformation;