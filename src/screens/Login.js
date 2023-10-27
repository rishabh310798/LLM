import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ActivityIndicator,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import InputText from '../components/InputText';
import Styles from '../constants/Styles';
import Button from '../components/Button';
import {SearchBar} from 'react-native-elements';
import PoppinsText from '../components/PoppinsText';
import {loginuser} from '../utils/Constant';
import APIManager from '../services/APIManager';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [phoneNo, setPhoneNo] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [code, setCode] = React.useState('');

  const [message, setMessage] = React.useState('');

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

    // Validate password field
    if (!password) {
      errors.password = 'Password is required.';
    } else if (password.length < 4) {
      errors.password = 'Password must be at least 6 characters.';
    }

    // Set the errors and update form validity
    setErrors(errors);
    setIsFormValid(Object.keys(errors).length === 0);
  };
  const userLogin = () => {
    validateForm();
    // navigation.navigate('CarrierHome')
    if (isFormValid) {
      // Form is valid, perform the submission logic
      console.log('Form submitted successfully!');
      setIsLoaded(true);
      APIManager.postAPI(
        loginuser,
        {
          email: email,
          password: password,
        },
        null,
        true,
      )
        .then(async response => {
          if (response.access) {
            // await AsyncStorage.setItem('token', response.access);
            navigation.navigate('CarrierHome');
          }
          if (response.detail) {
            setErr(response.detail);
            setIsLoaded(false);
          }
          console.log(response);
        })
        .catch(err => {
          setErr(true);
          setIsLoaded(false);
        });
    }
  };
  React.useEffect(() => {
    // Trigger form validation when name,
    // email, or password changes
  }, [email, password]);

  return (
    <>
      {isLoaded ? (
        <View style={{flex: 1, justifyContent: 'center'}}>
          <ActivityIndicator
            size="large"
            style={{transform: [{scaleX: 2}, {scaleY: 2}]}}
            color="#E85F5C"
          />
        </View>
      ) : (
        <View style={styles.container}>
          <Image source={require('../assets/bg4.png')} style={styles.avatar} />
          <View
            style={{
              height: '55%',
              //   margin: 30,
            }}>
            <PoppinsText bold={true} style={styles.title}>
              Login
            </PoppinsText>
            <Image
              source={require('../assets/box-truck.png')}
              style={{width: '100%', marginTop: 100}}
            />
            <View
              style={{
                margin: 30,
              }}>
              <InputText
                label={
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    Email
                  </Text>
                }
                value={email}
                placeholder="Email"
                onChageValue={text => setEmail(text)}
              />
              <Text style={styles.error}>{errors.email}</Text>
              <InputText
                label={
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      color: 'black',
                    }}>
                    Password
                  </Text>
                }
                value={password}
                placeholder="Password.."
                onChageValue={e => setPassword(e)}
              />
              {err ? (
                <Text style={styles.error}>Invalid Email or Password</Text>
              ) : (
                ''
              )}
            </View>

            <View
              style={{
                marginLeft: 20,
                marginRight: 30,
                // marginTop: 10,
              }}>
              <Button
                bgColor={Styles.colors.skyblue}
                text="LOGIN"
                onPress={() => {
                  userLogin();
                }}
              />
              <Text style={styles.signuptext}>
                Don't have account?{' '}
                <Text
                  onPress={() => {
                    navigation.navigate('SignUp');
                  }}
                  style={{
                    color: 'black',
                  }}>
                  {' '}
                  Sign Up Now
                </Text>
              </Text>
            </View>
          </View>
        </View>
      )}
    </>
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
    marginTop: 70,
    marginLeft: 80,
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
  signuptext: {
    fontSize: 14,
    color: 'grey',
    // lineHeight: 23.46,
    textAlign: 'center',
    fontFamily: 'Poppins-Bold',
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
