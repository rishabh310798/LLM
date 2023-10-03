import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import InputText from '../../components/InputText';
import Styles from '../../constants/Styles';
import Button from '../../components/Button';
import Card from '../../components/Card';
import AsyncStorage from '@react-native-async-storage/async-storage';
import APIManager from '../../services/APIManager';
import { registeruser } from '../../utils/Constant';
import { TextInput } from '../../components/Themed';

export default function Signup({ navigation }) {

    const [email, setEmail] = React.useState("")
    const [phoneNo, setPhoneNo] = React.useState("")
    const [password, setPassword] = React.useState("")
    const [code, setCode] = React.useState("")

    const [message, setMessage] = React.useState("")

    // React.useEffect(async () => {

    // }, []);

    function validatedata() {
        if (email === "") {
            setMessage("Email required!!")
            return false
        }
        else if (phoneNo === "") {
            setMessage("Phone No required!!")
            return false
        }
        else if (password === "") {
            setMessage("Password required!!")
            return false
        } else {
            setMessage("")
            return true
        }
    }

    function userSignUp() {
        APIManager.postAPI(
            registeruser,
            {
                "email": email,
                "password": password,
                "phone": phoneNo
            },
            null,
            true
        ).then(async (response) => {
            // setCode()
            navigation.navigate('CCode', { code: code, email: email })
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}></Text>

            <Card style={{ width: '100%' }}>
                <InputText
                    label="Email"
                    value={email}
                    onChageValue={(e) => { setEmail(e) }}
                />
                <InputText
                    label="Phone no"
                    value={phoneNo}
                    isNumeric={true}
                    onChageValue={(e) => { setPhoneNo(e) }}
                />
                <InputText
                    label="Password"
                    isPassword={true}
                    value={password}
                    onChageValue={(e) => { setPassword(e) }}
                />
            </Card>
            {/* <Image source={require('../../old/assets/signup.png')} style={{
                width: 120,
                height: 120,
                position: 'absolute',
                top: 10
            }} /> */}
            {!!message ?
                <Text style={{ color: Styles.colors.red500 }}>{message}</Text> : <></>}
            <Button
                style={{ width: '90%' }}
                text="Sign Up"
                bgColor={Styles.colors.yellow2}
                onPress={() => {
                    if (validatedata()) {
                        userSignUp()
                    }
                    // navigation.navigate('CCode', { code: code, email: email })
                }}
            />

            <Text style={{ marginTop: 10 }}>By signing up, you agree to RelayFoundry’s </Text>
            <View style={styles.bottomview}>
                <Text onPress={() => { navigation.navigate('TermsOfService') }} style={styles.textSignup}>Terms of Service</Text>
                <Text> and </Text>
                <Text onPress={() => { navigation.navigate('PrivacyPolicy') }} style={styles.textSignup}>Privacy Policy.</Text>
            </View>



        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Styles.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        alignItems: 'center',
        alignContent: 'center'
    },
    headerText: {
        width: '100%',
        fontSize: 30,
        fontFamily: "Poppins-Bold"
    },
    inputview: {
        width: '100%',
        backgroundColor: 'white',
        padding: 20
    },
    textForgetpassword: {
        marginTop: 10,
        fontFamily: "Poppins-SemiBold"
    },
    bottomview: {
        flexDirection: "row",
        marginTop: 2,
        alignItems: 'baseline'
    },
    textSignup: {
        color: Styles.colors.blue2,
        fontFamily: "Poppins-SemiBold"
    },
});