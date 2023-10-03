import { StyleSheet, View } from 'react-native';
import Styles from '../constants/Styles';
import WorkSansText from './PoppinsText';

export default function AlphaTestIntro() {
  return (
    <View style={styles.container}>
      <View>
        <WorkSansText bold={true} style={styles.titleSmall}>
          Thanks for joining our Alpha Test!
        </WorkSansText>
        <WorkSansText regular={true} style={styles.text}>
          To get started record a ride in your favorite tracker
          (strava,garmin,peloton etc.)
          {'\n'}
          {'\n'}
          Any activity tracker that reports to Apple Health or Google Fitness
          will appear to be claimed in W3:Ride.
        </WorkSansText>
      </View>
      <View>
        <WorkSansText regular={true} style={styles.title}>
          What's next?
        </WorkSansText>
        <WorkSansText regular={true} style={styles.text}>
          After our Alpha test, we’ll unlock more features and prizes to unlock
          with $power and $cyclr
        </WorkSansText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: Styles.colors.black,
    paddingVertical: Styles.spacing.padding * 2,
    paddingHorizontal: Styles.spacing.padding
  },
  titleSmall: {
    color: Styles.colors.green600,
    fontSize: 12,
    textTransform: 'uppercase',
    marginBottom: Styles.spacing.padding / 2
  },
  title: {
    color: Styles.colors.green600,
    fontSize: 27,
    lineHeight: 32,
    marginBottom: Styles.spacing.padding
  },
  text: {
    color: Styles.colors.white,
    fontSize: 20,
    lineHeight: 23.46
  }
});
