import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import InputText from '../../components/InputText';
import Styles from '../../constants/Styles';
import Button from '../../components/Button';

export default function ForgotPassword({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Forgot Password</Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Styles.colors.white,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        alignItems: 'center',
        alignContent: 'center'
    },
    headerText: {
        width: '100%',
        fontSize: 30,
        fontFamily: "Poppins-Bold"
    },

});