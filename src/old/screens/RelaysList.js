import * as React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import Styles from '../../constants/Styles';
import Button from '../../components/Button';
import APIManager from '../../services/APIManager';
import { getallrelays } from '../../utils/Constant';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function RelaysList({ navigation }) {

    const [relaysList, setRelaysList] = React.useState([])

    React.useEffect(async () => {
        getRelaysList()
    }, []);

    function getRelaysList() {
        APIManager.getAPI(
            getallrelays
        ).then(async (response) => {
            // await AsyncStorage.setItem('token', response.access_token);
            // navigation.navigate('AccountSetup')
            setRelaysList(response.data.rows)
        });
    }

    const RelayItem = ({ item }) => {
        return (
            <TouchableOpacity onPress={() => {
                navigation.navigate('RelaysInfo', item)
            }}>
                <View style={{
                    padding: 4,
                    margin: 2,
                    backgroundColor: "#e8e6e6"
                }}>
                    <Text>relayId : {item?.relayId}</Text>
                    <Text>content : {item?.content}</Text>
                    <Text>description : {item?.description}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    const renderItem = ({ item }) => (
        <RelayItem item={item} />
    );
    return (
        <View style={styles.container}>
            {/* <ScrollView > */}
            <Text style={styles.headerText}>You have Total </Text>
            <Text style={styles.headerText}>{relaysList.length} Relays</Text>
            <FlatList
                data={relaysList}
                renderItem={renderItem}
                keyExtractor={item => item.relayId}
                scrollEnabled={false}
            />
            <Button
                style={{ width: '80%' }}
                text="Create Relay"
                bgColor={Styles.colors.yellow2}
                onPress={() => navigation.navigate('CreateRelay')}
            />
            <Button
                style={{ width: '80%' }}
                text="Signout"
                bgColor={Styles.colors.yellow2}
                onPress={async () => {
                    await AsyncStorage.removeItem('token');
                    navigation.navigate('Welcome')
                }}
            />


            {/* </ScrollView> */}
        </View>
    );



}



const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: Styles.colors.gray500,
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