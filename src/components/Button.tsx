import { GestureResponderEvent, Pressable, StyleSheet, TextProps, TouchableOpacity } from 'react-native';
import { Text } from './Themed';
import Styles from '../constants/Styles';

interface ButtonPropss extends TextProps {
    text: string;
    bgColor: string;
    fontSize: number;
    fontWeight?: any;
    onPress: (event: GestureResponderEvent) => void;
}

export default function Button(props: ButtonPropss) {
    const textStyles = [styles.textWhite];
    if (props.bgColor == Styles.colors.yellow1 || props.bgColor == Styles.colors.yellow2) {
        textStyles.push(styles.textBlack);
    } else if (props.bgColor == Styles.colors.blue1 || props.bgColor == Styles.colors.blue2 || props.bgColor == Styles.colors.blue3) {
        textStyles.push(styles.textWhite);
    }
    else if (props.bgColor == Styles.colors.gray || props.bgColor == Styles.colors.gray500) {
        textStyles.push(styles.textBlack);
    }

    const onPressHandler = (event: GestureResponderEvent) => {
        props.onPress(event);
    };

    return (
        <Pressable style={[{ backgroundColor: props.bgColor }, styles.buttonView, props.style]}
            onPress={onPressHandler}
        >
            <Text style={[textStyles, styles.button, {fontSize: props.fontSize , fontWeight:props.fontWeight}]}>{props.text}</Text>
        </Pressable>
    )
}

const styles = StyleSheet.create({

    buttonView: {
        width: '100%',
        borderRadius: 10,
        padding: 4,
        margin: 6
    },
    button: {
        alignSelf: 'center',
        padding: 10,
        fontFamily: "Poppins-SemiBold",
        fontSize: 14,
        textTransform: 'uppercase'
    },
    textWhite: {
        color: Styles.colors.white
    },
    textBlack: {
        color: Styles.colors.black
    }
});
