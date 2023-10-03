import {
  DarkTheme,
  DefaultTheme,
  getFocusedRouteNameFromRoute,
  NavigationContainer
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect, useRef, useState } from 'react';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  AppState,
  AppStateStatus,
  Button,
  ColorSchemeName,
  Platform,
  StyleSheet,
  Text
} from 'react-native';
import { RootStackParamList } from './types';

import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Navigation({
  colorScheme
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <SafeAreaProvider>
      <NavigationContainer
        // linking={LinkingConfiguration}
        theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
      >
        <RootNavigator />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const RootStack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  // const authenticated = useAppSelector(isAuthenticated);
  // const {
  //   isOnboarded,
  //   completedOnboardingStep,
  //   loading: userLoading
  // } = useAppSelector((state) => state.user);
  // * Set default to true if some autoLogin or other utility is needed
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  // if (isLoggingIn) {
  //   return <LoadingOverlay />;
  // } else {
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <RootStack.Navigator>
          {/* <RootStack.Screen
              name="Welcome"
              component={WelcomeNavigator}
              options={{ headerShown: false }}
            />
            <RootStack.Screen
              name="Onboarding"
              component={OnboardingNavigator}
              options={{ headerShown: false, animation: 'none' }}
          /> */}
          <RootStack.Screen
            name="Home"
            component={HomeScreen}
            options={{ headerShown: false, animation: 'none' }}
          />
          <RootStack.Screen
            name="Profile"
            component={ProfileScreen}
            options={{ headerShown: false, animation: 'none' }}
          />
        </RootStack.Navigator>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
  // }

  function HomeScreen({ navigation }: any) {
    return (
      <SafeAreaProvider>
        <Button
          title="Go to Jane's profile"
          onPress={() =>
            navigation.navigate('Profile', { name: 'Jane' })
          }
        />
      </SafeAreaProvider>
    );
  };
  function ProfileScreen({ navigation, route }: any) {
    return (<SafeAreaProvider>
      <Text>This is {route.params.name}'s profile</Text>
    </SafeAreaProvider>
    );
  };
}



const styles = StyleSheet.create({
  tabBar: {
    // position: 'absolute',
    // borderRadius: 900,
    // marginVertical: Styles.spacing.padding / 2
  }
});
