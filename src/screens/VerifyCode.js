import {
  View,
  Alert,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  Text,
  TextInput,
} from 'react-native';
import Styles from '../constants/Styles';
import PoppinsText from '../components/PoppinsText';
import InputText from '../components/InputText';
import Button from '../components/Button';
import React, {useEffect, useRef, useState} from 'react';
import APIManager from '../services/APIManager';
import {getPerson, getPost, verifyotp} from '../utils/Constant';

const VerifyCode = ({route, navigation}) => {
  const [one, setOne] = React.useState('');
  const [two, setTwo] = React.useState('');
  const [three, setThree] = React.useState('');
  const [four, setFour] = React.useState('');
  const [error, setError] = React.useState('');
  const ref_input1 = useRef();
  const ref_input2 = useRef();
  const ref_input3 = useRef();
  const ref_input4 = useRef();
  const [isLoaded, setIsLoaded] = React.useState(false);

  const {email} = route.params;
  // console.log(email);
  const handleSubmit = () => {
    // console.log(one + two + three + four);
    const optValue = one + two + three + four;
    APIManager.postAPI(
      verifyotp,
      {
        email: email,
        otp: optValue,
      },
      null,
      true,
    )
      .then(async response => {
        if (response.message) {
          setError(response.message);
        } else {
          // console.log(response);
          navigation.navigate('Login');
        }
      })
      .catch(err => {
        console.log(err);
        setError(err);
        setIsLoaded(false);
      });

    // navigation.navigate('FilesUploaded');
  };
  useEffect(() => {}, []);

  // console.log(users);

  return (
    <View style={styles.container}>
      {isLoaded ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator
            size="large"
            style={{transform: [{scaleX: 2}, {scaleY: 2}]}}
            color="#E85F5C"
          />
        </View>
      ) : (
        <View>
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
                  {email}
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
                  ref={ref_input1}
                  value={one}
                  onChangeText={e => {
                    setOne(e);
                    if (e !== null) {
                      ref_input2.current.focus();
                    }
                  }}
                  maxLength={1}
                  style={styles.codeInput}
                />
                <TextInput
                  keyboardType="numeric"
                  textAlign="center"
                  ref={ref_input2}
                  value={two}
                  onChangeText={e => {
                    setTwo(e);
                    if (e !== null) {
                      ref_input3.current.focus();
                    }
                  }}
                  maxLength={1}
                  style={styles.codeInput}
                />
                <TextInput
                  keyboardType="numeric"
                  textAlign="center"
                  ref={ref_input3}
                  value={three}
                  onChangeText={e => {
                    setThree(e);
                    if (e !== null) {
                      ref_input4.current.focus();
                    }
                  }}
                  maxLength={1}
                  returnKeyType="next"
                  style={styles.codeInput}
                />
                <TextInput
                  keyboardType="numeric"
                  textAlign="center"
                  ref={ref_input4}
                  value={four}
                  onChangeText={e => {
                    setFour(e);
                  }}
                  maxLength={1}
                  style={styles.codeInput}
                />
              </View>
            </View>
            <View>
              <Text style={styles.error}>{error.toString()}</Text>
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
              texttransform="uppercase"
              onPress={() => {
                // navigation.navigate('FilesUploaded');
                handleSubmit();
              }}
            />
          </View>
        </View>
      )}
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
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'center',
  },
});

export default VerifyCode;
