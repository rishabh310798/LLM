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

export default function NameLLM({ navigation }) {

    React.useEffect(() => {
        async function fetchData() {
            if (await AsyncStorage.getItem('token') == null) {

            } else {

            }
        }
        fetchData();
    }, []);

    const [name, setName] = React.useState("")

    return (
        <View style={styles.container}>
            <Image source={require('../assets/bg1.png')} style={styles.avatar} />

            <View style={{
                height: "55%", margin: 30,
            }}>
                <PoppinsText bold={true} style={styles.title}>
                    Name Your LLM
                </PoppinsText>
                <InputText
                    label=""
                    value={name}
                    placeholder="Enter Your Name"
                    onChageValue={(e) => { setName(e) }}
                />
            </View>

            <View style={{
                marginLeft: 50,
                marginRight: 50,
                marginTop: 50
            }}>
                <Button bgColor={Styles.colors.skyblue} text='CONFIRM' onPress={() => {
                    navigation.navigate('FileUploadPromptPage')
                }}
                /></View>


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
        color: Styles.colors.gray500,
        fontSize: 27,
        // lineHeight: 32,
        marginBottom: Styles.spacing.padding,
        alignSelf: 'center',
        marginTop: 80,
        marginBottom: 200,
        marginLeft: 50,
        marginRight: 50
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