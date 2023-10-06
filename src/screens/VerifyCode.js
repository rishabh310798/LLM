import {
  View,
  Alert,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
} from 'react-native';
import Styles from '../constants/Styles';
import PoppinsText from '../components/PoppinsText';
import InputText from '../components/InputText';
import Button from '../components/Button';
import React, {useEffect, useState} from 'react';
import {TextInput} from '../components/Themed';
// import auth from '@react-native-firebase/auth';
import auth from '@react-native-firebase/app';

const VerifyCode = ({route, navigation}) => {
  const [one, setOne] = React.useState('');
  const [two, setTwo] = React.useState('');
  const [three, setThree] = React.useState('');
  const [four, setFour] = React.useState('');

  const getOtpValue = () => {
    // console.log(one+two+three+four);
  };
  // if (route) {
  //   const {phone} = route.params;
  // }

  // console.log(phone)
  const [confirm, setConfirm] = useState(null);

  // verification code (OTP - One-Time-Passcode)
  const [code, setCode] = useState('');

  // Handle login
  function onAuthStateChanged(user) {
    if (user) {
      // Some Android devices can automatically process the verification code (OTP) message, and the user would NOT need to enter the code.
      // Actually, if he/she tries to enter it, he/she will get an error message because the code was already used in the background.
      // In this function, make sure you hide the component(s) for entering the code and/or navigate away from this screen.
      // It is also recommended to display a message to the user informing him/her that he/she has successfully logged in.
    }
  }

  useEffect(() => {}, []);

  // Handle the button press
  async function signInWithPhoneNumber(phoneNumber) {
    const confirmation = await auth()
      .signInWithPhoneNumber(phoneNumber)
      .then(res => {
        setConfirm(res);
        console.log(res);
      })
      .catch(e => Alert.alert('error', e.message));
  }

  async function confirmCode() {
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  }
  return (
    <View style={styles.container}>
      <Image source={require('../assets/bg3.png')} style={styles.avatar} />

      <View
        style={{
          height: '55%',
          margin: 30,
        }}>
        <PoppinsText bold={true} style={styles.title}>
          Verification Code
        </PoppinsText>
        <Image
          source={require('../assets/truck.png')}
          style={{
            width: 120,
            height: 120,
            alignItems: 'flex-end',
            alignContent: 'flex-end',
            alignSelf: 'flex-end',
            marginBottom: 60,
          }}
        />
        <View style={{marginTop: 50}}>
          <PoppinsText bold={true} style={styles.text}>
            Verify the code sent to
            {'\n'}
            <Text
              style={{
                color: 'grey',
                justifyContent: 'center',
                textAlign: 'center',
              }}>
              test@gmail.com
            </Text>
          </PoppinsText>
          <View
            style={{
              flexDirection: 'row',
              alignContent: 'space-between',
              marginBottom: 6,
              margin: 15,
            }}>
            <TextInput
              keyboardType="numeric"
              textAlign="center"
              value={one}
              onChangeText={e => {
                setOne(e);
              }}
              maxLength={1}
              style={styles.codeInput}
            />
            <TextInput
              keyboardType="numeric"
              textAlign="center"
              value={two}
              onChangeText={e => {
                setTwo(e);
              }}
              maxLength={1}
              style={styles.codeInput}
            />
            <TextInput
              keyboardType="numeric"
              textAlign="center"
              value={three}
              onChangeText={e => {
                setThree(e);
              }}
              maxLength={1}
              style={styles.codeInput}
            />
            <TextInput
              keyboardType="numeric"
              textAlign="center"
              value={four}
              onChangeText={e => {
                setFour(e);
              }}
              maxLength={1}
              style={styles.codeInput}
            />
          </View>
        </View>
      </View>

      <View
        style={{
          marginLeft: 25,
          marginRight: 30,
          marginTop: 180,
        }}>
        <Button
          bgColor={Styles.colors.skyblue}
          text="Verify"
          texttransform='uppercase'
          onPress={() => {
            navigation.navigate('CarrierHome');
            getOtpValue();
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Styles.colors.white,
    width: '100%',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: 'blue',
  },
  image: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover',
  },
  avatar: {
    width: '100%',
    position: 'absolute',
  },
  title: {
    color: Styles.colors.gray500,
    fontSize: 27,
    fontWeight: 'bold',
    // lineHeight: 32,
    marginBottom: Styles.spacing.padding,
    // alignSelf: 'center',
    marginTop: 40,

    marginRight: 50,
  },
  text: {
    color: Styles.colors.black,
    fontSize: 18,
    // lineHeight: 23.46,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 50,
  },
  inputContainer: {
    marginBottom: Styles.spacing.padding * 2,
  },
  inputLabel: {
    color: Styles.colors.green600,
    fontWeight: 'bold',
  },
  input: {
    color: Styles.colors.white,
    fontSize: 18,
    paddingVertical: Styles.spacing.padding * 0.25,
    borderBottomWidth: 1,
    borderColor: Styles.colors.white,
    borderStyle: 'solid',
  },
  codeInput: {
    color: Styles.colors.inputtext,
    fontSize: 14,
    padding: Styles.spacing.padding * 0.8,
    width: Styles.spacing.padding * 3.7,
    marginStart: 10,
    marginRight: 10,
    borderWidth: 0.5,
    borderRadius: 10,
    borderColor: Styles.colors.skyblue,
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: 'white',
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
  },
});

export default VerifyCode;
