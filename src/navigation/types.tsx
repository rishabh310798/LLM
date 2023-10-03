import {
  CompositeScreenProps,
  NavigatorScreenParams
} from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';


declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}

// ROOT
export type RootStackParamList = {
  Home: NavigatorScreenParams<WelcomeStackParamList> | undefined;
  Profile: NavigatorScreenParams<WelcomeStackParamList> | undefined;
  Main: NavigatorScreenParams<WelcomeStackParamList> | undefined;
};
export type RootStackScreenProps<Screen extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, Screen>;

// WELCOME
export type WelcomeStackParamList = {
  Intro: undefined;
  Login: { loggedOut: boolean };
  Splash: undefined;
};
export type WelcomeStackScreenProps<
  Screen extends keyof WelcomeStackParamList
> = CompositeScreenProps<
  NativeStackScreenProps<WelcomeStackParamList, Screen>,
  NativeStackScreenProps<RootStackParamList>
>;
