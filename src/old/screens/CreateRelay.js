import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Styles from '../../constants/Styles';
import Button from '../../components/Button';
import InputText from '../../components/InputText';
import APIManager from '../../services/APIManager';
import { createrelay } from '../../utils/Constant';
import Card from '../../components/Card';

export default function CreateRelay({ navigation }) {

    const [content, setcontent] = React.useState("")
    const [description, setdescription] = React.useState("")
    const [message, setMessage] = React.useState("");

    React.useEffect(async () => {

    }, []);

    function validatedata() {
        if (content === "") {
            setMessage("content required!!")
            return false
        }
        else if (description === "") {
            setMessage("description required!!")
            return false
        } else {
            setMessage("")
            return true
        }
    }

    function createNewRelay() {
        APIManager.postAPI(
            createrelay,
            {
                "content": content,
                "description": description
            },
            null,
            true
        ).then(async (response) => {
            navigation.navigate('AccountSetup')
        });
    }

    return (
        <View style={styles.container}>
            {/* <Text style={styles.headerText}>Create a Relay</Text> */}
            {/* Monetize By US Bank */}
            {/* Monetize By  Lightning payments */}

            {/* Account Number */}
            {/* Routing Number */}

            {/* wallet public key */}
            {/* link out to stripe */}

            <Card>
                <InputText
                    label="content"
                    value={content}
                    onChageValue={(e) => { setcontent(e) }}
                />
                <InputText
                    label="description"
                    value={description}
                    onChageValue={(e) => { setdescription(e) }}
                />
            </Card>
            {!!message ?
                <Text style={{ color: Styles.colors.red500 }}>{message}</Text> : <></>}
            <Button
                style={{ width: '90%' }}
                text="Create Relay"
                bgColor={Styles.colors.yellow2}
                onPress={() => {
                    if (validatedata()) {
                        createNewRelay()
                    }
                }}
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