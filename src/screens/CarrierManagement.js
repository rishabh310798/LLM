import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import Styles from '../constants/Styles';
import Button from '../components/Button';
import PoppinsText from '../components/PoppinsText';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import {TextInput} from 'react-native-paper';
import {SearchBar} from 'react-native-elements';

export default function CarrierManagement({navigation}) {
  const [searchText, setSearchText] = React.useState('');
  const listOfMenu = ['Freights', 'Tracking', 'Payments','Freights', 'Tracking', 'Payments','Freights', 'Tracking', 'Payments'];

 
  return (
    <View style={styles.container}>
      <Image source={require('../assets/ep1.png')} style={styles.avatar} />
      <PoppinsText bold={true} style={styles.title}>
        Carrier Management
      </PoppinsText>

      <View style={{margin: 25}}>
        <SearchBar
          placeholder="Search"
          onChangeText={e =>setSearchText(e)}
          value={searchText}
          inputContainerStyle={styles.searchSection}
          containerStyle={{backgroundColor: 'white', borderRadius: 15}}
        />
      </View>

      <View
        style={{
          margin: 20,
          marginTop: 80,
          backgroundColor: Styles.colors.white,
          padding: 30,
          height:250,
          borderRadius: 10,
          // flex:1
        }}
        elevation={10}>
        <View>
          <ScrollView>
            {listOfMenu.map((cur, index) => {
              return cur == 'Payments' ? (
                <Pressable style={styles.buttonView} key={index}>
                  <Text style={styles.button}>Payments</Text>
                  <View
                    style={{
                      backgroundColor: 'red',
                      height: 20,
                      width: 20,
                      resizeMode: 'contain',
                      borderRadius: 40,
                      padding: 5,
                    }}>
                    <Image source={require('../assets/1+.png')} />
                  </View>
                </Pressable>
              ) : (
                <Button
                  bgColor={Styles.colors.gray500}
                  text={cur}
                  fontSize={18}
                  fontWeight="bold"
                  onPress={() => {}}
                  texttransform="none"
                  key={index}
                />
              );
            })}
            
          </ScrollView>
        </View>
      </View>

      <View style={{marginTop: 40, marginRight: 10}}>
        <Button
          bgColor={Styles.colors.skyblue}
          text="Create New"
          fontSize={25}
          fontWeight="bold"
          onPress={() => {}}
        />
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
