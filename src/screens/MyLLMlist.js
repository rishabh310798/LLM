import * as React from 'react';
import { View, Alert, ImageBackground, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Styles from '../constants/Styles';
import AlphaTestIntro from '../components/AlphaTestIntro';
import PoppinsText from '../components/PoppinsText';
import { Text, TextInput } from '../components/Themed';
import Button from '../components/Button';
import InputText from '../components/InputText';
import APIManager from '../services/APIManager';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function MyLLMlist({ navigation }) {

    React.useEffect(() => {
        async function fetchData() {
            if (await AsyncStorage.getItem('token') == null) {

            } else {

            }
        }
        fetchData();
    }, []);

    const [searchText, setSearchText] = React.useState("")

    return (
        <View style={styles.container}>

            <View style={{ height: "50%" }}>
                <Image source={require('../assets/bg2.png')} style={styles.avatar} />

                <View style={{
                    marginLeft: 50,
                    marginRight: 50
                }}>
                    <PoppinsText bold={true} style={styles.title}>
                        MY Private LLMs
                    </PoppinsText>
                    <InputText
                        label=""
                        value={searchText}
                        placeholder='search'
                        onChageValue={(e) => { setSearchText(e) }}
                    />
                </View>
            </View>

            <View style={{
                marginLeft: 50,
                marginRight: 50
            }}>
                <Button bgColor={Styles.colors.gray} text='Inventory Forecaster' onPress={() => { }} />
                <Button bgColor={Styles.colors.gray500} text='Freight Logbook' onPress={() => { }} />
                <Button bgColor={Styles.colors.gray500} text='Emergent Behavior LLM' onPress={() => { }} />
                <Button bgColor={Styles.colors.skyblue} text='Create NEW' onPress={() => {
                    navigation.navigate('NameLLM')
                }} />
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
        backgroundColor: 'blue'
    },
    image: {
        flex: 1,
        width: '100%',
        resizeMode: 'cover',
    },
    avatar: {
        width: '100%',
        // height: 120,
        position: 'absolute'
    },
    title: {
        color: Styles.colors.gray500,
        fontSize: 27,
        // lineHeight: 32,
        marginBottom: Styles.spacing.padding,
        alignSelf: 'center',
        marginTop: 80,
        marginBottom: 40,
    },
    text: {
        color: Styles.colors.white,
        fontSize: 14,
        // lineHeight: 23.46,
        textAlign: 'center',
        fontFamily: "Poppins-SemiBold",
        marginBottom: 50
    },
    inputContainer: {
        marginBottom: Styles.spacing.padding * 2
    },
    inputLabel: {
        color: Styles.colors.green600
    },
    input: {
        color: Styles.colors.white,
        fontSize: 18,
        paddingVertical: Styles.spacing.padding * 0.25,
        borderBottomWidth: 1,
        borderColor: Styles.colors.white,
        borderStyle: 'solid'
    },
});