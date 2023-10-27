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
import {CheckBox} from '@rneui/themed';
import PoppinsText from '../components/PoppinsText';
import {Text, TextInput} from '../components/Themed';
import Button from '../components/Button';
import InputText from '../components/InputText';
import APIManager from '../services/APIManager';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UploadFile({navigation}) {
  React.useEffect(() => {
    async function fetchData() {
      if ((await AsyncStorage.getItem('token')) == null) {
      } else {
      }
    }
    fetchData();
  }, []);

  const [name, setName] = React.useState('');
  const [phone, setPhoneNo] = React.useState('');
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(true);
  const [checked3, setChecked3] = React.useState(true);
  const toggleCheckbox = () => setChecked1(!checked1);
  const toggleCheckbox2 = () => setChecked2(!checked2);
  const toggleCheckbox3 = () => setChecked3(!checked3);

  const handleChoosePhoto = () => {
    launchImageLibrary({ noData: true }, (response) => {
      // console.log(response);
      if (response) {
        setPhoto(response);
      }
    });
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/bg3.png')} style={styles.avatar} />

      <View
        style={{
          height: '55%',
          margin: 30,
        }}>
        <PoppinsText bold={true} style={styles.title}>
          Upload
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
        <View style={{marginTop: 120}}>
          <Button
            bgColor={Styles.colors.skyblue}
            text="Upload Drivers License"
            fontSize={20}
            texttransform="uppercase"
            fontWeight="bold"
            onPress={handleChoosePhoto}

          />
          <Button
            bgColor={Styles.colors.skyblue}
            text="Upload Truck Registration"
            fontSize={20}
            fontWeight="bold"
            texttransform="uppercase"
          />
          <View style={{flexDirection: 'row'}}>
            <CheckBox
              checked={checked1}
              onPress={toggleCheckbox}
              title="Van"
              iconType="material-community"
              checkedIcon="checkbox-outline"
              uncheckedIcon={'checkbox-blank-outline'}
            />
            <CheckBox
              checked={checked2}
              onPress={toggleCheckbox2}
              title="Reefer"
              iconType="material-community"
              checkedIcon="checkbox-outline"
              uncheckedIcon={'checkbox-blank-outline'}
            />
            <CheckBox
              checked={checked3}
              onPress={toggleCheckbox3}
              title="Flatbed"
              iconType="material-community"
              checkedIcon="checkbox-outline"
              uncheckedIcon={'checkbox-blank-outline'}
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
          text="SUBMIT"
          fontSize={20}
          texttransform="uppercase"
          onPress={() => {
            navigation.navigate('Login', {phone: phone});
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
