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

export default function FileUploadPage({ navigation }) {

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
            <Image source={require('../assets/bg1.png')} style={styles.avatar} />
            <View style={{ margin: 20, marginTop: 50, backgroundColor: Styles.colors.white, padding: 30, borderRadius: 10 }}>
                <Image source={require('../assets/file.png')} style={{
                    width: 60,
                    height: 60,
                    alignItems: 'center',
                    alignContent: 'center',
                    alignSelf: "center"
                }} />
                <PoppinsText bold={true} style={styles.title}>
                    Please Select Files
                </PoppinsText>
            </View>

            <View style={{ margin: 20, marginEnd: 30 }}>
                <Button bgColor={Styles.colors.skyblue} text='SELECT FILES' onPress={() => {
                    navigation.navigate('FreightLogbook')
                }} />
                <Button bgColor={Styles.colors.skyblue} text='UPLOAD' onPress={() => {
                    navigation.navigate('FreightLogbook')
                }} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Styles.colors.white,
        width: '100%',
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
        position: 'absolute'
    },
    title: {
        color: Styles.colors.gray600,
        fontSize: 18,
        fontFamily: "Poppins-Regular",
        marginBottom: Styles.spacing.padding,
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