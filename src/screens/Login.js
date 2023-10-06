import * as React from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import InputText from '../components/InputText';
import Styles from '../constants/Styles';
import Button from '../components/Button';
import { SearchBar } from 'react-native-elements';
// import Card from '../../components/Card';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {loginuser} from '../../utils/Constant';
// import APIManager from '../../services/APIManager';
// import {TouchableOpacity} from 'react-native-gesture-handler';
import PoppinsText from '../components/PoppinsText';

export default function Login({navigation}) {
  const [email, setEmail] = React.useState('');
  const [phoneNo, setPhoneNo] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [code, setCode] = React.useState('');

  const [message, setMessage] = React.useState('');

  //   React.useEffect(async () => {}, []);

  function validatedata() {
    if (email === '') {
      setMessage('Email required!!');
      return false;
    } else if (password === '') {
      setMessage('Password required!!');
      return false;
    } else {
      setMessage('');
      return true;
    }
  }

  function userLogin() {
    // APIManager.postAPI(
    //   loginuser,
    //   {
    //     email: email,
    //     password: password,
    //   },
    //   null,
    //   true,
    // ).then(async response => {
    //   await AsyncStorage.setItem('token', response.access_token);
    //   navigation.navigate('AccountSetup');
    // });
  }
  React.useEffect(() => {
      // console.log(phoneNo);
  },[])

  return (
    <View style={styles.container}>
      <Image source={require('../assets/bg4.png')} style={styles.avatar} />

      <View
        style={{
          height: '55%',
          //   margin: 30,
        }}>
        <PoppinsText bold={true} style={styles.title }>
          Login
        </PoppinsText>
        {/* <Image
          source={require('../../assets/truck.png')}
          style={{
            width: 120,
            height: 120,
            alignItems: 'flex-end',
            alignContent: 'flex-end',
            alignSelf: 'flex-end',
            marginBottom: 60,
          }}
        /> */}
        <Image
          source={require('../assets/box-truck.png')}
          style={{width: '100%', marginTop: 100}}
        />
        <View
          style={{
            margin: 30,
          }}>
          <InputText
            label={<Text style={{ fontSize: 20,fontWeight:'bold',color:'black'}}>Phone Number</Text>} 
            value={phoneNo}
            placeholder="Phone Number"
            onChageValue={text => setPhoneNo(text)}
          />
          <InputText
            label={<Text style={{ fontSize: 20,fontWeight:'bold',color:'black'}}>Password</Text>} 
            value={password}
            placeholder="Password.."
            onChageValue={e => setPassword(e)}
          />
        </View>
        <View
          style={{
            marginLeft: 20,
            marginRight: 30,
            marginTop: 30,
          }}>
          <Button
            bgColor={Styles.colors.skyblue}
            text="CONFIRM"
            onPress={() => {
              navigation.navigate('Verifycode',{phone: phoneNo});
              // console.log(phoneNo);
            }}
          />
          <Text style={styles.signuptext}>
            Don't have account?{' '}
            <Text
              onPress={() => {
                navigation.navigate('SignUp');
              }} style={{
                color:'black'
              }}>
              {' '}
              Sign Up Now
            </Text>
          </Text>
        </View>
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
    fontWeight: 'bold'
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
    color:'grey',
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
});
