import * as React from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import Styles from '../constants/Styles';
import PoppinsText from '../components/PoppinsText';
import Button from '../components/Button';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {SearchBar} from 'react-native-elements';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import {Select} from 'native-base';
import DropdownPicker from '../components/DropdownPicker';

var items = [
  {
    id: 1,
    name: 'JavaScript',
  },
  {
    id: 2,
    name: 'Java',
  },
  {
    id: 3,
    name: 'Ruby',
  },
];

export default function UploadedFiles({navigation}) {
  React.useEffect(() => {
    async function fetchData() {
      if ((await AsyncStorage.getItem('token')) == null) {
      } else {
      }
    }
    fetchData();
  }, []);
  const [searchText, setSearchText] = React.useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../assets/bg4.png')} style={styles.avatar} />

      <PoppinsText
        bold={true}
        style={{margin: 25, fontSize: 27, marginTop: 70}}>
        {' '}
        Files Uploaded
      </PoppinsText>

      <Image
        source={require('../assets/check.png')}
        style={{
          width: 60,
          height: 60,
          alignItems: 'center',
          alignContent: 'center',
          alignSelf: 'center',
          margin: 20,
          marginTop: 100,
          marginBottom: 50,
        }}
      />
      <PoppinsText
        bold={true}
        style={[
          styles.title,
          {color: Styles.colors.black, textAlign: 'center'},
        ]}>
        File Uploaded Successfully.
      </PoppinsText>

      <View style={{margin: 25}}>
        <SearchBar
          placeholder="Recent Files"
          onChangeText={e => setSearchText(e)}
          value={searchText}
          inputContainerStyle={styles.searchSection}
          containerStyle={{
            backgroundColor: Styles.colors.gray500,
            borderWidth: 1,
            borderRadius: 10,
          }}
        />
        
      </View>
      <View
        style={{
          marginLeft: 10,
          marginRight: 20,
          marginTop: 20,
        }}>
        <Text style={styles.buttonView}>
          <AntdesignIcon name="pdffile1" size={30} color="#34CCFF" /> {'  '}
          CarrierPAcket.pdf
        </Text>
        <Text style={styles.buttonView}>
          {' '}
          <AntdesignIcon name="pdffile1" size={30} color="#34CCFF" />
          {'  '}CarrierPAcket.pdf
        </Text>
        <Text style={styles.buttonView}>
          {' '}
          <AntdesignIcon name="pdffile1" size={30} color="#34CCFF" />
          {'  '}CarrierPAcket.pdf
        </Text>
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
    fontSize: 22,
    fontWeight: '400',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: Styles.spacing.padding,
    alignSelf: 'center',

    marginBottom: 10,
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
  searchSection: {
    // flexDirection: 'row',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: Styles.colors.gray500,
    height: 30,
    borderRadius: 15,
    // borderWidth:1
  },
  buttonView: {
    width: '100%',
    borderRadius: 10,
    padding: 4,
    margin: 6,
    backgroundColor: Styles.colors.gray500,
    padding: 15,
    textAlign: 'center',
  },
});
