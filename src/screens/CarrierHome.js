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
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CarrierProfile from './CarrierProfile';
import Home from './HomeV2';
import Success from './Success';
import FileNotCompatible from './FileNotCompatible';
import Opps from './Opps';

const Tab = createBottomTabNavigator();

export default function CarrierHome({navigation}) {
  React.useEffect(() => {
    async function fetchData() {
      if ((await AsyncStorage.getItem('token')) == null) {
      } else {
      }
    }
    fetchData();
  }, []);

  return (
    <Tab.Navigator
      initialRouteName="Update"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          shadowColor:'white',
          bottom:16,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          
        },
      }}>
      <Tab.Screen
        name="Home"
        component={CarrierProfile}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: () => {
            return (
              <Image
                style={{width: 35, height: 35}}
                source={require('../assets/home.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Update"
        component={FileNotCompatible}
        options={{
          tabBarLabel: 'Update',
          tabBarIcon: () => {
            return (
              <Image
                style={{width: 35, height: 35}}
                source={require('../assets/down.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Success}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: () => {
            return (
              <Image
                style={{width: 30, height: 30}}
                source={require('../assets/chat.png')}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Support"
        component={Opps}
        options={{
          tabBarLabel: 'Support',
          tabBarIcon: () => {
            return (
              <Image
                style={{width: 30, height: 37}}
                source={require('../assets/sup.png')}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     height: '100%',
//     width: '100%',
//     backgroundColor: Styles.colors.darkblue,
//   },
//   imageContainer: {
//     flex: 1,
//     backgroundColor: 'blue',
//   },
//   image: {
//     flex: 1,
//     width: '100%',
//     resizeMode: 'cover',
//   },
//   avatar: {
//     width: '100%',
//     // height: 120,
//     position: 'absolute',
//   },
//   title: {
//     color: Styles.colors.black,
//     fontSize: 18,
//     fontFamily: 'Poppins-Regular',
//     alignSelf: 'center',
//     marginTop: 10,
//     marginBottom: 10,
//   },
//   text: {
//     color: Styles.colors.white,
//     fontSize: 14,
//     // lineHeight: 23.46,
//     textAlign: 'center',
//     fontFamily: 'Poppins-SemiBold',
//     marginBottom: 50,
//   },
//   inputContainer: {
//     marginBottom: Styles.spacing.padding * 2,
//   },
//   inputLabel: {
//     color: Styles.colors.green600,
//   },
//   input: {
//     color: Styles.colors.white,
//     fontSize: 18,
//     paddingVertical: Styles.spacing.padding * 0.25,
//     borderBottomWidth: 1,
//     borderColor: Styles.colors.white,
//     borderStyle: 'solid',
//   },
// });
