import { View, StyleSheet, StyleProp, ViewStyle } from 'react-native';

type CardProps = {
    children: any; // ReactNode is the explicit type, but is broken for some reason as of 07/12/2022
    style?: StyleProp<ViewStyle>;
};

export default function Card({ children, style }: CardProps) {
    return (
        <View style={[style, styles.card, styles.shadowProp, styles.elevation]}>
            {children}
        </View>);
}

const styles = StyleSheet.create({

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
