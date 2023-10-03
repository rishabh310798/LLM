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
export default function FilesUploaded({ navigation }) {

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

            <View style={{ height: "40%" }}>
                <Image source={require('../assets/bg4.png')} style={styles.avatar} />

                <View style={{
                    marginLeft: 50,
                    marginRight: 50
                }}>
                    <PoppinsText bold={true} style={styles.title}>
                        Files Uploaded
                    </PoppinsText>
                    <InputText
                        label=""
                        value={searchText}
                        placeholder='search'
                        onChageValue={(e) => { setSearchText(e) }}
                    />            //-
                </View>
            </View>
            <Image source={require('../assets/check.png')} style={{
                width: 60,
                height: 60,
                alignItems: 'center',
                alignContent: 'center',
                alignSelf: "center",
            }} />
            <PoppinsText bold={true} style={[styles.title, { color: Styles.colors.black, marginTop: 10, marginBottom: 10, fontSize: 16 }]}>
                File Uploaded Successfully.
            </PoppinsText>


            <View style={{
                marginLeft: 50,
                marginRight: 50
            }}>

                <Button bgColor={Styles.colors.gray} text='Recent Files' onPress={() => { }} />
                <Button bgColor={Styles.colors.gray} text='CarrierPAcket.pdf' onPress={() => { }} />
                <Button bgColor={Styles.colors.gray500} text='equiptment_list.xls' onPress={() => { }} />
                <Button bgColor={Styles.colors.gray500} text='BOLS.pdf' onPress={() => {
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
        fontSize: 24,
        // lineHeight: 32,
        marginBottom: Styles.spacing.padding,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 10,
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