import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Styles from '../../constants/Styles';
import Button from '../../components/Button';

export default function AccountSetup({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Financial Account Setup</Text>
            {/* Monetize By US Bank */}
            {/* Monetize By  Lightning payments */}

            {/* Account Number */}
            {/* Routing Number */}

            {/* wallet public key */}
            {/* link out to stripe */}
            <Button
                style={{ width: '90%' }}
                text="Confirm"
                bgColor={Styles.colors.yellow2}
                onPress={() => navigation.navigate('RelaysList')}
            />
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