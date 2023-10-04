import * as React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import Styles from '../constants/Styles';
import PoppinsText from '../components/PoppinsText';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function FileNotCompatible({navigation}) {
  React.useEffect(() => {
    async function fetchData() {
      if ((await AsyncStorage.getItem('token')) == null) {
      } else {
      }
    }
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/bg4.png')} style={styles.avatar} />
       
      <PoppinsText bold={true} style={styles.title}></PoppinsText>
      <Image
        source={require('../assets/fileinvalid.png')}
        style={{
          width: 100,
          height: 100,
          alignItems: 'center',
          alignContent: 'center',
          alignSelf: 'center',
          margin: 20,
          marginTop: 180,
        }}
      />
      <PoppinsText
        bold={true}
        style={[
          styles.title,
          {
            color: Styles.colors.black,
            paddingLeft: 60,
            paddingRight: 60,
            fontWeight: 'bold',
            fontSize: 26,
            textAlign: 'center',
          },
        ]}>
        The Filetype “ .cs” is not compatible at this time, We only support the
        following filetypes: .txt, .pdf, .CSV.
      </PoppinsText>

      <View style={{margin: 20, marginEnd: 30, borderRadius: 10,}} >
        <Button
          bgColor={Styles.colors.skyblue}
          fontSize={20}
          fontWeight={'bold'}
          text="RETURN TO LLM"
          onPress={() => {
            navigation.navigate('FileNotCompatible');
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
    color: Styles.colors.white,
    fontSize: 18,
    fontFamily: 'Poppins-SemiBold',
    marginBottom: Styles.spacing.padding,
    alignSelf: 'center',
    marginBottom: 50,
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
