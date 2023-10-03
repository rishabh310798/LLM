import { GestureResponderEvent, Image, Pressable, StyleSheet, TextInputProps, TextProps, TouchableOpacity } from 'react-native';
import { TextInput, View } from './Themed';
import Styles from '../constants/Styles';
import PoppinsText from './PoppinsText';
import React from 'react';

interface TextInputDataProps
// extends TextInputProps
{
    label?: string;
    value?: string;
    placeholder?: string;
    isPassword?: boolean
    isNumeric?: boolean
    bol?: boolean
    onChageValue: (value: string) => any;
}

export default function InputText({ label,
    value,
    placeholder,
    isPassword = false,
    isNumeric = false,
    onChageValue,
    bol = true
}: TextInputDataProps) {
    // const textStyles = [styles.textWhite, props.style];
    // if (props.bgColor == Styles.colors.yellow1 || props.bgColor == Styles.colors.yellow2) {
    //     textStyles.push(styles.textBlack);
    // } else if (props.bgColor == Styles.colors.blue1 || props.bgColor == Styles.colors.blue2 || props.bgColor == Styles.colors.blue3) {
    //     textStyles.push(styles.textWhite);
    // }

    // const onPressHandler = (event: GestureResponderEvent) => {
    //     props.onPress(event);
    // };

    // const [value, setValue] = React.useState(props?.value);

    // React.useEffect(() => {
    //     // props.onChageValue('aaaa')
    // }, [value]);

    const [hidePassword, sethidePassword] = React.useState(true)
    function managePasswordVisibility() {
        sethidePassword(!hidePassword)
    };

    return (
        <View style={[styles.inputContainer]}>
            {!!label &&
                <PoppinsText style={styles.inputLabel}>{label}</PoppinsText>}

            {isPassword ?
                <TextInput
                    value={value}
                    onChangeText={(v: string) => onChageValue(v)}
                    style={styles.input}
                    secureTextEntry={hidePassword}
                    // autoCompleteType="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    returnKeyType="send"
                    placeholder={placeholder}
                    
                    
                />

                // <View style={[styles.container, { backgroundColor: 'red' }]}>
                //     <TextInput
                //         value={value}
                //         onChangeText={(v: string) => onChageValue(v)}
                //         style={styles.input}
                //         secureTextEntry={hidePassword}
                //         autoCompleteType="password"
                //         autoCapitalize="none"
                //         autoCorrect={false}
                //         returnKeyType="send"
                //     />
                //     <TouchableOpacity
                //         activeOpacity={0.8}
                //         style={styles.visibilityBtn}
                //         onPress={() => { managePasswordVisibility() }}
                //     >
                //         <Image
                //             source={
                //                 hidePassword
                //                     ? require('../../old/assets/view.png')
                //                     : require('../../old/assets/hide.png')
                //             }
                //             style={styles.btnImage}
                //         />
                //     </TouchableOpacity>
                // </View>
                :
                <TextInput
                    keyboardType={isNumeric ? "number-pad" : "default"}
                    value={value}
                    onChangeText={(v: string) => onChageValue(v)}
                    style={styles.input}
                    placeholder={placeholder}
                    
                />
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'nowrap',
        marginTop: 10,
    },
    inputFlex: {
        alignSelf: 'stretch',
        width: '100%',
        padding: 0,
        backgroundColor: '#ddd'
    },
    visibilityBtn: {
        position: 'absolute',
        right: 9,
        height: 25,
        width: 25,
        padding: 0,
        marginTop: 21,
    },
    btnImage: {
        height: 20,
        width: 20
    },

    inputContainer: {
        marginBottom: Styles.spacing.padding * 0.5,
        width: '100%',
        backgroundColor: Styles.colors.white,
    },
    inputLabel: {
        color: Styles.colors.label,
        fontSize: 14,
        marginTop: 4,
        marginBottom: 4
    },
    input: {
        color: Styles.colors.inputtext,
        fontSize: 14,
        padding: Styles.spacing.padding * 0.8,
        borderWidth: 0.5,
        borderColor: Styles.colors.gray600,
        borderRadius: 10,
        borderStyle: 'solid',
        backgroundColor: Styles.colors.gray500,
        fontFamily: "OpenSans_Condensed-Medium",
    },

    textWhite: {
        color: Styles.colors.white
    },
    textBlack: {
        color: Styles.colors.black
    }
});
