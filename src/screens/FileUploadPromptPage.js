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

export default function FileUploadPromptPage({ navigation }) {

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
                <Image source={require('../assets/upload.png')} style={{
                    width: 60,
                    height: 60,
                    alignItems: 'center',
                    alignContent: 'center',
                    alignSelf: "center"
                }} />
                <PoppinsText bold={true} style={styles.title}>
                    TO enhance the functionality of your LLM(Chatbot) Please upload some Files for the Bot to Reference
                </PoppinsText>
            </View>

            <View style={{ margin: 20, marginEnd: 30 }}>
                <Button bgColor={Styles.colors.skyblue} text='UPLOAD' onPress={() => {
                    navigation.navigate('FileUploadPage')
                }} />
                <Button bgColor={Styles.colors.skyblue} text='SKIP UPLOAD' onPress={() => {
                    navigation.navigate('FileUploadPage')
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
        color: Styles.colors.black,
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