import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import Styles from '../constants/Styles';
import Button from '../components/Button';
import PoppinsText from '../components/PoppinsText';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import {TextInput} from 'react-native-paper';
import {SearchBar} from 'react-native-elements';
import InputText from '../components/InputText';
import {Tab} from '@rneui/themed';
import Voice from '@react-native-community/voice';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['new NativeEventEmitter']); // Ignore log notification by message
LogBox.ignoreAllLogs();

export default function Chat({navigation}) {
  const [searchText, setSearchText] = React.useState('');

  const [result, setResult] = React.useState([]);
  const [error, setError] = React.useState('');
  const [isRecording, setIsRecording] = React.useState(false);

  Voice.onSpeechStart = () => setIsRecording(true);
  Voice.onSpeechEnd = () => setIsRecording(false);
  Voice.onSpeechError = error => setError(error);
  Voice.onSpeechResult = e => setResult(e.value[0]);

  const startRecording = async () => {
    try {
      await Voice.start('en-US');
    } catch (err) {
      setError(err);
      throw err;
    }
  };
  const stopRecording = async () => {
    try {
      await Voice.stop();
      setIsRecording(!isRecording);
    } catch (err) {
      setError(err);
      throw err;
    }
  };
  React.useEffect(() => {
      console.log("result: " + result)
  },[]);

  return (
    <View style={{alignItems: 'center', margin: 20}}>
      <Text style={{fontSize: 20, color: 'green', fontWeight: 'bold'}}>
        Voice Input
      </Text>
      <Text>{result}</Text>
      <Text>{JSON.stringify(error)}</Text>

      <TouchableOpacity
        style={{marginTop: 30}}
        onPress={() => {
          isRecording ? stopRecording() : startRecording();
        }}>
        <Text style={{color:'black' ,fontSize:20}}>{isRecording ? 'Stop' : 'Start'}</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Styles.colors.white,
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
  icon: {
    position: 'absolute',
  },
  avatar: {
    width: '100%',
    // height: 120,
    position: 'absolute',
  },
  title: {
    color: Styles.colors.gray500,
    fontSize: 30,
    marginBottom: Styles.spacing.padding,
    marginTop: 60,
    margin: 30,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text: {
    color: Styles.colors.black,
    fontSize: 30,
    fontWeight: 'bold',
    // lineHeight: 23.46,
    textAlign: 'center',
    fontFamily: 'Poppins-SemiBold',
    marginBottom: 30,
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
  buttonView: {
    flex: 1,
    backgroundColor: '#ecf0f1',
    flexDirection: 'row',

    alignItems: 'center',
    width: '100%',
    borderRadius: 10,
    margin: 6,
    justifyContent: 'center',
  },
  button: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 18,
    color: 'black',
    marginLeft: 25,
    fontWeight: 'bold',
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    height: 30,
  },
  searchIcon: {
    padding: 10,
  },
  chatbox: {
    backgroundColor: Styles.colors.gray500,
    borderRadius: 10,
    marginBottom: 20,
    marginLeft: 170,
  },
  chatbox1: {
    backgroundColor: Styles.colors.skyblue,
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
    marginRight: 170,
    padding: 20,
  },
  chattext: {
    fontSize: 16,
    color: 'black',
  },
  input: {
    flex: 1,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: '#fff',
    color: '#424242',
  },
});
