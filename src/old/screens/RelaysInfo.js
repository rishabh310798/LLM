import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Styles from '../../constants/Styles';
import Button from '../../components/Button';
import APIManager from '../../services/APIManager';
import { getallrelays } from '../../utils/Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RelaysInfo({ route, navigation }) {

    const [relaysList, setRelaysList] = React.useState([])

    const item = route.params;

    React.useEffect(async () => {
    }, []);


    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Your Relays Information</Text>
            {/* <Text style={styles.headerText}>You have Total {relaysList.length} Relays</Text> */}
            <Text>relayId : {item?.relayId}</Text>
            <Text>content : {item?.content}</Text>
            <Text>description : {item?.description}</Text>

            <Button
                // style={{ width: '90%' }}
                text="Signout"
                bgColor={Styles.colors.yellow2}
                onPress={async () => {
                    await AsyncStorage.removeItem('token');
                    navigation.navigate('Welcome')
                }}
            />
        </View>
    );

}



const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Styles.colors.gray500,
        padding: 30,
    },
    headerText: {
        width: '100%',
        fontSize: 30,
        fontFamily: "Poppins-Bold"
    },

    heading: {
        fontSize: 18,
        fontWeight: '600',
        marginBottom: 13,
    },
    card: {
        backgroundColor: 'white',
        borderRadius: 8,
        paddingVertical: 45,
        paddingHorizontal: 25,
        width: '100%',
        marginVertical: 10,
    },
    shadowProp: {
        shadowColor: '#171717',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },
    elevation: {
        elevation: 20,
        shadowColor: '#52006A',
    },


});