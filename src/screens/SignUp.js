import * as React from 'react';
import {
  View,
  Alert,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import Styles from '../constants/Styles';
import AlphaTestIntro from '../components/AlphaTestIntro';
import PoppinsText from '../components/PoppinsText';
import {Text, TextInput} from '../components/Themed';
import Button from '../components/Button';
import InputText from '../components/InputText';
import APIManager from '../services/APIManager';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignUp({navigation}) {
  React.useEffect(() => {
    async function fetchData() {
      if ((await AsyncStorage.getItem('token')) == null) {
      } else {
      }
    }
    fetchData();
  }, []);

  const [name, setName] = React.useState('');
  const [phone,setPhoneNo] = React.useState('');

  return (
    <View style={styles.container}>
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
            label={<Text style={{ fontSize: 20,fontWeight:'bold',color:'black'}}>Email</Text>} 
            value={''}
            placeholder="Email.."
            onChageValue={e => {}}
            
          />
          <InputText
            label={<Text style={{ fontSize: 20,fontWeight:'bold',color:'black'}}>Number</Text>}            
            value={''}
            placeholder="Number.."
            onChageValue={e => {}}
          />
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
          text="CONFIRM"
          texttransform='uppercase'
          onPress={() => {
            navigation.navigate('Verifycode',{phone: phone});
          }}
        />
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
  
});
