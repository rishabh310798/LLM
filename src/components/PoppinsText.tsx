import { StyleSheet, TextProps } from 'react-native';
import { Text } from './Themed';


interface PoppinsTextProps extends TextProps {
  bold?: boolean;
  regular?: boolean;
}

export default function PoppinsText(props: PoppinsTextProps) {
  const textStyles = [styles.text, props.style];
  if (props.bold) {
    textStyles.push(styles.textBold);
  } else if (props.regular) {
    textStyles.push(styles.textRegular);
  }
  return <Text {...props} style={textStyles} />;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    letterSpacing: -0.94
  },
  textBold: {
    fontFamily: 'Poppins-SemiBold'
  },
  textRegular: {
    fontFamily: 'Poppins-Regular'
  }
});
  // <string>Poppins-Black.ttf</string>
  // <string>Poppins-Bold.ttf</string>
  // <string>Poppins-ExtraLight.ttf</string>
  // <string>Poppins-Light.ttf</string>
  // <string>Poppins-Medium.ttf</string>
  // <string>Poppins-Regular.ttf</string>
  // <string>Poppins-SemiBold.ttf</string>
  // <string>Poppins-Thin.ttf</string>
  // <string>OpenSans_Condensed-Medium.ttf</string>
  // <string>OpenSans_Condensed-Regular.ttf</string>
  // <string>OpenSans_Condensed-SemiBold.ttf</string>