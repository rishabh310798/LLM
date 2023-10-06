import * as React from 'react';
import {View, Text, StyleSheet, Image, ScrollView} from 'react-native';
import Styles from '../constants/Styles';
import Button from '../components/Button';
import PoppinsText from '../components/PoppinsText';

export default function Home({navigation}) {
  return (
    // <View style={styles.container}>
    //   <ScrollView>
    //     <Image
    //       source={require('../assets/bg4.png')}
    //       style={styles.backgroundImage}
    //     />
    //     <View style={styles.loginForm}>
    //       <Text style={styles.text}>ET POC</Text>
    //       <View
    //         style={{
    //           margin: 20,
    //           marginTop: 200,
    //           backgroundColor: Styles.colors.white,
    //           padding: 30,
    //           borderRadius: 10,
    //         }}>
    //         <Text bold={true} style={styles.title}>
    //           Carrier Management Application
    //         </Text>
    //         <Image
    //           source={require('../assets/main.png')}
    //           style={{
    //             width: 220,
    //             height: 220,
    //             alignItems: 'center',
    //             alignContent: 'center',
    //             alignSelf: 'center',
    //           }}
    //         />
    //       </View>
    //       <View
    //         style={{
    //           marginTop: 50,
    //           alignItems: 'center',
    //           alignContent: 'center',
    //           alignSelf: 'center',
    //         }}>
    //         <Text
    //           style={{
    //             fontSize: 20,
    //             textAlign: 'center',

    //             fontFamily: 'Poppins-Regular',
    //           }}>
    //           <Text style={{fontWeight: 'bold'}}>”Reputation Protection“</Text>{' '}
    //           own your profile, build your reputation and carry it with you
    //           everywhere. We give you all the tools to build, protect and grow
    //           your driver reputation. You choose the pace you want to go. But,
    //           the sooner you build you profile the faster you will build your
    //           reputation.
    //         </Text>
    //       </View>
    //     </View>
    //   </ScrollView>
    //   <Button
    //     bgColor={Styles.colors.blue}
    //     text="Log in"
    //     onPress={() => {
    //       navigation.navigate('Login');
    //       // console.log("aaa :: ", editableUsername)
    //     }}
    //   />

    //   <Button
    //     bgColor={Styles.colors.blue}
    //     text="Sign up"
    //     onPress={() => {
    //       navigation.navigate('SignUp');
    //     }}
    //   />
    // </View>
    <View style={styles.container}>
      <Image source={require('../assets/ep1.png')} style={styles.avatar} />
      <PoppinsText bold={true} style={styles.title}>
        ET POC
      </PoppinsText>
      <ScrollView>
        <View
          style={{
            margin: 20,
            marginTop: 180,
            backgroundColor: Styles.colors.white,
            padding: 30,
            borderRadius: 10,
                   
          }}
          elevation={10}>
          <PoppinsText bold={true} style={styles.text}>
            Carrier Management Application
          </PoppinsText>
          <Image
            source={require('../assets/main.png')}
            style={{
              width: 200,
              height: 120,
              alignItems: 'center',
              alignContent: 'center',
              alignSelf: 'center',
            }}
          />
        </View>
      </ScrollView>
      <View
        style={{
          marginLeft: 10,
          marginRight: 20,
        }}>
        <Button
          bgColor={Styles.colors.skyblue}
          text="sign up"
          texttransform='uppercase'
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        />
        <Button
          bgColor={Styles.colors.skyblue}
          text="Login"
          texttransform='uppercase'
          onPress={() => {
            navigation.navigate('Login');
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
    color: Styles.colors.gray500,
    fontSize: 27,
    // lineHeight: 32,
    marginBottom: Styles.spacing.padding,
    // alignSelf: 'center',
    marginTop: 70,
    marginLeft: 80,
    marginRight: 50,
    fontWeight: 'bold'
  },
  text: {
    color: Styles.colors.black,
    fontSize: 30,
    fontWeight:'bold',
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
});
