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
import CarrierProfile from './CarrierProfile';
import Success from './Success';
import Opps from './Opps';
import AntdesignIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import CarrierManagement from './CarrierManagement';
import { verifyotp } from '../utils/Constant';
import VerifyCode from './VerifyCode';
import BrokerPacket from './BrokerPacket';
import AtflContract from './AtflContract';
import Chat from './Chat';
import FreightChatV2 from './FreightChatV2';

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
        tabBarActiveTintColor:"#34CCFF",
        tabBarStyle: {
          height: 86,
          position: 'absolute',
          shadowColor: 'white',
          // bottom: 16,
          paddingBottom:16,
          borderTopWidth: 0,
          borderBottomWidth: 0,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={CarrierProfile}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, focused}) => {
            return (
              focused ? (
                <AntdesignIcon name="home" size={30} color="#34CCFF" />
              ) : (
                <AntdesignIcon name="home" size={30} color="black" />
              )
            );
          },
        }}
      />
      <Tab.Screen
        name="Update"
        component={CarrierManagement}
        options={{
          tabBarLabel: 'Update',
          tabBarIcon: ({color, focused}) => {
            return (
              focused ? (
                <AntdesignIcon name="download" size={30} color="#34CCFF" />
              ) : (
                <AntdesignIcon name="download" size={30} color="black" />
              )
            );
          },
        }}
      />
      <Tab.Screen
        name="Chat"
        component={FreightChatV2}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, focused}) => {
            return focused ? (
              <Ionicons name="chatbubble-outline" size={30} color="#34CCFF" />
            ) : (
              <Ionicons name="chatbubble-outline" size={30} color="black" />
            );
          },
        }}
      />
      <Tab.Screen
        name="Support"
        component={CarrierManagement}
        options={{
          tabBarLabel: 'Support',
          tabBarIcon: ({color, focused}) => {
            return (
              focused ? (
                <Ionicons name="person-outline" size={30} color="#34CCFF" />
              ) : (
                <Ionicons name="person-outline" size={30} color="black" />
              )
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
