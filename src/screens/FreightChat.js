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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {TextInput} from 'react-native-paper';
import {SearchBar} from 'react-native-elements';
import InputText from '../components/InputText';
import {Tab} from '@rneui/themed';

export default function FreightChat({navigation}) {
  const [searchText, setSearchText] = React.useState('');

  return (
    <View style={styles.container}>
      <Image source={require('../assets/bg6.png')} style={styles.avatar} />
      <ScrollView>
        <PoppinsText bold={true} style={styles.title}>
          Freight Chat
        </PoppinsText>

        <View style={{margin: 25, marginTop: 170}}>
          <View style={styles.chatbox}>
            <Text style={styles.chattext}>
              Give me orders from Atlanta to Tampa
            </Text>
          </View>
          <View
            style={{
              borderRadius: 10,
              padding: 20,
              backgroundColor: Styles.colors.gray500,
              marginBottom: 15,
            }}>
            <Text style={styles.chattext}>
              Here are current orders from Atlanta to Tampa:
            </Text>
          </View>
          <TouchableOpacity style={styles.chatbox1} onPress={() => { navigation.navigate("Atfl")}}>
            <Text style={styles.chattext}>
              ATFL, (24 foot, departing: 8/4/23, arriving: 8/5/23) Payout:
              $1,200
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.chatbox1} onPress={() => { navigation.navigate("Atfl")}}>
            <Text style={styles.chattext}>
              TBFL, (40 foot, departing: 8/6/23, arriving: 8/7/23) Payout:
              $1,200
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <View style={{marginBottom: 40, marginRight: 30, marginLeft: 20 ,flexDirection:'row'}}>
        <InputText
          label=""
          value=""
          placeholder="Message..."
          onChageValue={e => {}}
        />
        <FontAwesome name="microphone" size={30} color="#34CCFF" style={{margin:5,marginTop:10}} />
      </View>
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
    padding: 10,
  },
  chatbox1: {
    backgroundColor: Styles.colors.skyblue,
    padding: 10,
    borderRadius: 10,
    marginBottom: 20,
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
