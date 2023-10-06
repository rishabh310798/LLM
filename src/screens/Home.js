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

export default function Home({ navigation }) {

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
            <Image source={require('../assets/bg4.png')} style={styles.avatar} />
            <View style={{ margin: 20, marginTop: 80, backgroundColor: Styles.colors.white, padding: 30, borderRadius: 10 }}>
                <PoppinsText bold={true} style={styles.title}>
                    Carrier Management Application
                </PoppinsText>
                <Image source={require('../assets/main.png')} style={{
                    width: 120,
                    height: 120,
                    alignItems: 'center',
                    alignContent: 'center',
                    alignSelf: "center"
                }} />

                <PoppinsText style={[styles.title, { fontSize: 14 }]}>
                    ”Reputation  Protection“  own  your  profile,  build  your  reputation  and  carry  it  with  you  everywhere.    We  give  you  all the  tools  to  build,  protect  and  grow  your  driver  reputation.    You  choose  the  pace  you  want  to go.  But,  the  sooner  you build  you  profile  the  faster  you  will  build  your  reputation.
                </PoppinsText>


            </View>

            <View style={{
                marginLeft: 10,
                marginRight: 20
            }}>
                <Button bgColor={Styles.colors.skyblue} texttransform='uppercase' text='sign up' onPress={() => { navigation.navigate('SignUp') }} />
                <Button bgColor={Styles.colors.skyblue} texttransform='uppercase' text='Login' onPress={() => { navigation.navigate('Login')}} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: Styles.colors.white,
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
        marginBottom: 10,
        fontWeight: 'bold'
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