import * as React from 'react';
import {
  View,
  Alert,
  ImageBackground,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Styles from '../constants/Styles';
import AlphaTestIntro from '../components/AlphaTestIntro';
import PoppinsText from '../components/PoppinsText';
import {Text, TextInput} from '../components/Themed';
import Button from '../components/Button';
import InputText from '../components/InputText';
import APIManager from '../services/APIManager';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function AtflContract({navigation}) {
  React.useEffect(() => {
    async function fetchData() {
      if ((await AsyncStorage.getItem('token')) == null) {
      } else {
      }
    }
    fetchData();
  }, []);
  const DATA = [
    {
      id: 1,
      title: 'Origin:AFL',
    },
    {
      id: 2,
        title: 'Destination:YFL',
      },
      {
        id: 3,
        title: 'PickupDate:8/01/2023'
      },
      {
        id: 4,
        title: 'DeliveryDate:8/01/2023',
      },
      {
        id: 5,
        title: 'EquipmentType:flatbed',
      },
      {
        id: 6,
        title: 'DimensionNeeded:24 foot',
      },
      {
        id: 7,
        title: 'Payout:$1200',
      },
  ];
  const Item = ({title},index) => (
    <View style={styles.item} key={index} >
      <Text
        style={{
          color: 'black',
          fontSize: 14,
          fontWeight: 'bold',
        }}>{`\u2022 ${title}`}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={require('../assets/bg5.png')} style={styles.avatar} />
      <View
        elevation={10}
        style={{
          margin: 25,
          marginTop: 120,
          backgroundColor: Styles.colors.white,
          padding: 30,
          borderRadius: 10,
        }}>
        <PoppinsText bold={true} style={styles.title}>
          Atfl Contract {'\n'} Application
        </PoppinsText>
        <Image
          source={require('../assets/main.png')}
          style={{
            width: 150,
            height: 150,
            alignItems: 'center',
            alignContent: 'center',
            alignSelf: 'center',
          }}
        />
      </View>

      <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title}  />} 
        keyExtractor={item => item.id}
      />
      <View style={{marginBottom:80 ,marginRight: 30,marginLeft:20}}>
        
        <Button
            bgColor={Styles.colors.skyblue}
            text="Request Broker Packet"
            onPress={() => {
              navigation.navigate("BrokerPacket")
              // console.log(phoneNo);
            }}
          />
          <Button
            bgColor={Styles.colors.skyblue}
            text="Decline"
            onPress={() => {
              navigation.navigate("FreightChat")
              // console.log(phoneNo);
            }}
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
  avatar: {
    width: '100%',
    // height: 120,
    position: 'absolute',
  },
  title: {
    color: Styles.colors.black,
    fontSize: 25,
    fontFamily: 'Poppins-Regular',
    alignSelf: 'center',
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign:'center',
    textTransform: 'uppercase',
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
  item: {
    marginLeft: 30,
  },
});
