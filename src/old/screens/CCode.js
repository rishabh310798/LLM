import * as React from 'react';
import { View, Text, StyleSheet, Alert, Image } from 'react-native';
import Styles from '../../constants/Styles';
import Button from '../../components/Button';
import { TextInput } from '../../components/Themed';
import APIManager from '../../services/APIManager';
import { verifyotp } from '../../utils/Constant';

export default function CCode({ route, navigation }) {

    const receivedData = route.params;
    const [one, setOne] = React.useState("")
    const [two, setTwo] = React.useState("")
    const [three, setThree] = React.useState("")
    const [four, setFour] = React.useState("")

    const [timeCount, setTimeCount] = React.useState(30)
    const [message, setMessage] = React.useState("")

    React.useEffect(async () => {
    }, []);

    React.useEffect(() => {

        if (timeCount != 0) {
            //Implementing the setInterval method
            const interval = setInterval(() => {
                setTimeCount(count => count - 1);
            }, 1000);

            //Clearing the interval
            return () => clearInterval(interval);
        }

    }, [timeCount]);

    function validatedata() {
        if (one === "" || two === "" || three === "" || four === "") {
            setMessage("code is required!!")
            return false
        }
        else {
            setMessage("")
            return true
        }
    }

    function otpverification() {
        APIManager.postAPI(
            verifyotp,
            {
                "email": receivedData.email,
                "otp": one + two + three + four
            },
            null,
            true
        ).then(async (response) => {
            // await AsyncStorage.setItem('token', response.access_token);
            // navigation.navigate('AccountSetup')
            Alert.alert(response?.message, "Now you are able to login", [
                {
                    text: 'OK', onPress: () => {
                        navigation.navigate('Login')
                    }
                }
            ]);
        });
    }

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Enter Confirmation Code</Text>
            <Text style={[{ width: '100%', fontSize: 14, marginTop: 10, marginBottom: 20 }]}>Enter the 4 digits code that we have sent through your e-mail.</Text>

            <View style={{ flexDirection: 'row', alignContent: 'space-between', marginBottom: 6 }}>
                <TextInput
                    keyboardType='numeric' textAlign='center'
                    value={one}
                    onChangeText={(e) => { setOne(e) }}
                    maxLength={1}
                    style={styles.codeInput}
                />
                <TextInput
                    keyboardType='numeric' textAlign='center'
                    value={two}
                    onChangeText={(e) => { setTwo(e) }}
                    maxLength={1}
                    style={styles.codeInput}
                />
                <TextInput
                    keyboardType='numeric' textAlign='center'
                    value={three}
                    onChangeText={(e) => { setThree(e) }}
                    maxLength={1}
                    style={styles.codeInput}
                />
                <TextInput
                    keyboardType="numeric"
                    value={four}
                    onChangeText={(e) => { setFour(e) }}
                    maxLength={1}
                    style={styles.codeInput}
                />
            </View>

            <Text style={{ color: Styles.colors.red500, }}>{message}</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', alignContent: 'center', marginTop: 30 }}>
                {/* <Image source={require('../../old/assets/clock.png')} style={{ width: 14, height: 14, marginEnd: 4 }} /> */}
                <Text>{timeCount}:00</Text>
            </View>

            <Button
                style={{ width: '90%' }}
                text="Confirm"
                bgColor={Styles.colors.yellow2}
                onPress={() => {
                    if (validatedata()) {
                        otpverification()
                    }
                }
                }
            />
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

    codeInput: {
        color: Styles.colors.inputtext,
        fontSize: 14,
        padding: Styles.spacing.padding * 0.8,
        width: Styles.spacing.padding * 2.4,
        marginStart: 6,
        borderWidth: 0.5,
        borderRadius: 10,
        borderStyle: 'solid',
        backgroundColor: Styles.colors.gray500,
        // color: Styles.colors.inputtext,
        // fontSize: 18,
        // padding: Styles.spacing.padding * 0.8,
        // width: Styles.spacing.padding * 2.4,
        // marginStart: 6,
        // borderWidth: 0.5,
        // borderColor: Styles.colors.gray600,
        // borderRadius: 10,
        // borderStyle: 'solid',
        // backgroundColor: Styles.colors.gray500,
    }
});