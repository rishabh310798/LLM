import * as React from 'react';
import { View, Alert, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Styles from '../constants/Styles';
import AlphaTestIntro from '../components/AlphaTestIntro';
import PoppinsText from '../components/PoppinsText';
import { Text, TextInput } from '../components/Themed';
import Button from '../components/Button';
import InputText from '../components/InputText';
import APIManager from '../services/APIManager';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function CarrierProfile({ navigation }) {

    React.useEffect(() => {
        async function fetchData() {
            if (await AsyncStorage.getItem('token') == null) {

            } else {

            }
        }
        fetchData();
    }, []);


    return (
        <View style={styles.container}>

            <View style={{ margin: 20, marginTop: 50, backgroundColor: Styles.colors.white, padding: 30, borderRadius: 10 }}>
                <Image source={require('../assets/support.png')} style={{
                    width: 60,
                    height: 60,
                    alignItems: 'center',
                    alignContent: 'center',
                    alignSelf: "center"
                }} />
                <PoppinsText bold={true} style={styles.title}>
                    Carson Carrier
                </PoppinsText>
                <View style={{
                    flexDirection: 'row', marginTop: 2, alignItems: 'center',
                    alignContent: 'center',
                    alignSelf: "center"
                }}>
                    <PoppinsText style={[styles.title, { fontSize: 14 }]}>
                        Carrier Real Time Score :
                    </PoppinsText>
                    <PoppinsText style={[styles.title, { fontSize: 18, fontFamily: "Poppins-SemiBold", color: Styles.colors.green800 }]}>
                        {"  "}95
                    </PoppinsText>
                </View>
                <PoppinsText style={[styles.title, {
                    fontSize: 14,
                    marginTop: 20,
                    marginTop: 2, marginBottom: 2,
                    color: Styles.colors.skyblue
                }]}>
                    Truck List:
                </PoppinsText>
                <View style={{
                    borderWidth: 1,
                    borderColor: Styles.colors.gray600,
                    backgroundColor: Styles.colors.gray500,
                    borderStyle: 'solid',
                    borderRadius: 10,
                    padding: 10
                }}>
                    <PoppinsText style={[styles.title, { fontSize: 14, marginTop: 2, marginBottom: 2, }]}>
                        2023 Freightliner  Cascadia
                    </PoppinsText>
                    <PoppinsText style={[styles.title, { fontSize: 14, marginTop: 2, marginBottom: 2, }]}>
                        Class: 8
                    </PoppinsText>
                    <PoppinsText style={[styles.title, { fontSize: 14, marginTop: 2, marginBottom: 2, }]}>
                        Horsepower: 350-605 HP
                    </PoppinsText>
                    <PoppinsText style={[styles.title, { fontSize: 14, marginTop: 2, marginBottom: 2, }]}>
                        Torgue: Up to 2050 lb-ft
                    </PoppinsText>
                    <PoppinsText style={[styles.title, { fontSize: 14, marginTop: 2, marginBottom: 2, }]}>
                        Max GCW: 60,600 lbs
                    </PoppinsText>
                </View>
            </View>

            <View style={{
                marginLeft: 10,
                marginRight: 20
            }}>
                <Button bgColor={Styles.colors.gray500} text='Drivers License & Truck Registration' onPress={() => { }} />
                <Button bgColor={Styles.colors.gray500} text='Uploaded Files' onPress={() => { navigation.navigate('UpFile')}} />
                <Button bgColor={Styles.colors.gray500} text='Contact Support' onPress={() => {
                    navigation.navigate('YourSupport')
                }} />
            </View>
           
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: Styles.colors.darkblue,
    },
    imageContainer: {
        flex: 1,
        backgroundColor: 'blue'
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
    },
    avatar: {
        width: '100%',
        // height: 120,
        position: 'absolute'
    },
    title: {
        color: Styles.colors.black,
        fontSize: 18,
        fontFamily: "Poppins-Regular",
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 10
    },
    text: {
        color: Styles.colors.white,
        fontSize: 14,
        // lineHeight: 23.46,
        textAlign: 'center',
        fontFamily: "Poppins-SemiBold",
        marginBottom: 50
    },
    inputContainer: {
        marginBottom: Styles.spacing.padding * 2
    },
    inputLabel: {
        color: Styles.colors.green600
    },
    input: {
        color: Styles.colors.white,
        fontSize: 18,
        paddingVertical: Styles.spacing.padding * 0.25,
        borderBottomWidth: 1,
        borderColor: Styles.colors.white,
        borderStyle: 'solid'
    },
});