import * as React from 'react';
import {
  View,
  Alert,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  KeyboardAvoidingView,
} from 'react-native';
import Styles from '../constants/Styles';
import AlphaTestIntro from '../components/AlphaTestIntro';
import PoppinsText from '../components/PoppinsText';
import {Text, TextInput} from '../components/Themed';
import Button from '../components/Button';
import InputText from '../components/InputText';
import APIManager from '../services/APIManager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {registeruser} from '../utils/Constant';

export default function SignUp({navigation}) {
  React.useEffect(() => {
    async function fetchData() {
      if ((await AsyncStorage.getItem('token')) == null) {
      } else {
      }
    }
    fetchData();
  }, []);

  const [email, setEmail] = React.useState('');
  const [phoneNo, setPhoneNo] = React.useState('');
  const [password, setPassword] = React.useState('');

  const [errors, setErrors] = React.useState({});
  const [err, setErr] = React.useState(false);
  const [isFormValid, setIsFormValid] = React.useState(false);
  const [isLoaded, setIsLoaded] = React.useState(false);

  const validateForm = () => {
    let errors = {};

    // Validate email field
    if (!email) {
      errors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid.';
    }

    if (!phoneNo) {
      errors.phoneNo = 'Phone Number is required.';
    } else if (phoneNo.length < 10) {
      errors.phoneNo = 'Phone Number must be at least 10 digits.';
    }

    // Validate password field
    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < 4) {
      errors.password = 'Password must be at least 4 characters.';
    }

    // Set the errors and update form validity
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };

  const handleSubmit = () => {
    validateForm();

    if (isFormValid) {
      console.log('Form submitted successfully ');
      setIsLoaded(true);
      APIManager.postAPI(
        registeruser,
        {
          email: email,
          password: password,
          mobile: phoneNo,
        },
        null,
        true,
      )
        .then(async response => {
          if (response.message) {
            navigation.navigate('Verifycode', {email: email});
          }
          setErrors(response);
          setIsLoaded(false);
        })
        .catch(err => {
          console.log(err);
          setErr(true);
          setIsLoaded(false);
        });
    }
  };

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
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}>
          <Image source={require('../assets/bg3.png')} style={styles.avatar} />

          <View
            style={{
              height: '55%',
              margin: 30,
            }}>
            <PoppinsText bold={true} style={styles.title}>
              Sign Up
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
              <InputText
                label={
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                    Email
                  </Text>
                }
                value={email}
                placeholder="Email.."
                onChageValue={e => setEmail(e)}
              />
              {errors.email ? (
                <Text style={styles.error}>{errors.email}</Text>
              ) : (
                <></>
              )}

              <InputText
                label={
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                    Number
                  </Text>
                }
                value={phoneNo}
                keyboardType="numeric"
                placeholder="Phone Number.."
                onChageValue={e => setPhoneNo(e)}
              />
              {errors.phoneNo ? (
                <Text style={styles.error}>{errors.phoneNo}</Text>
              ) : (
                <></>
              )}
              <InputText
                label={
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: 'black'}}>
                    Password
                  </Text>
                }
                value={password}
                placeholder="Password.."
                onChageValue={e => setPassword(e)}
              />
              {errors.password ? (
                <Text style={styles.error}>{errors.password}</Text>
              ) : (
                <></>
              )}
            </View>
          </View>

          <View
            style={{
              marginLeft: 25,
              marginRight: 30,
              marginTop: 240,
            }}>
            <Button
              bgColor={Styles.colors.skyblue}
              text="Submit"
              texttransform="uppercase"
              onPress={() => {
                handleSubmit();
              }}
            />
          </View>
        </KeyboardAvoidingView>
      )}
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
    // lineHeight: 32,
    marginBottom: Styles.spacing.padding,
    // alignSelf: 'center',
    marginTop: 40,
    marginLeft: 50,
    marginRight: 50,
    fontWeight: 'bold',
  },
  text: {
    color: Styles.colors.white,
    fontSize: 14,
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
  },
  input: {
    color: Styles.colors.white,
    fontSize: 18,
    paddingVertical: Styles.spacing.padding * 0.25,
    borderBottomWidth: 1,
    borderColor: Styles.colors.white,
    borderStyle: 'solid',
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginBottom: 12,
    textAlign: 'center',
  },
});
