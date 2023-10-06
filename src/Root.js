import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyLLMlist from './screens/MyLLMlist';
import NameLLM from './screens/NameLLM';
import FileUploadPage from './screens/FileUploadPage';
import FileUploadPromptPage from './screens/FileUploadPromptPage';
import FreightLogbook from './screens/FreightLogbook';
import Success from './screens/Success';
import Opps from './screens/Opps';
import FileNotCompatible from './screens/FileNotCompatible';
import CarrierProfile from './screens/CarrierProfile';
import FilesUploaded from './screens/FilesUploaded';
import YourSupport from './screens/YourSupport';
import Home from './screens/Home';
import HomeV2 from './screens/HomeV2';
import SignUp from './screens/SignUp';
import Login from './screens/Login';
import VerifyCode from './screens/VerifyCode';
import CarrierHome from './screens/CarrierHome';
import CarrierManagement from './screens/CarrierManagement';
import BrokerPacket from './screens/BrokerPacket';

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
             <Stack.Screen name="CarrierHome" component={CarrierHome} options={{ title: "CarrierHome", headerShown: false }} />

            {/* <Stack.Screen name="Home" component={Home} options={{ title: "Home", headerShown: false }} /> */}
            <Stack.Screen name="HomeV2" component={HomeV2} options={{ title: "Home", headerShown: false }} />
            <Stack.Screen name="SignUp" component={SignUp} options={{ title: "SignUp", headerShown: false }} />
            <Stack.Screen name="Login" component={Login} options={{ title: "Login", headerShown: false }} />
            

            <Stack.Screen name="Verifycode" component={VerifyCode} options={{ title: "Verifycode", headerShown: false }} />
            <Stack.Screen name="CarrierProfile" component={CarrierProfile} options={{ title: "CarrierProfile", headerShown: false }} />
            <Stack.Screen name="FilesUploaded" component={FilesUploaded} options={{ title: "FilesUploaded", headerShown: false }} />
            <Stack.Screen name="YourSupport" component={YourSupport} options={{ title: "YourSupport", headerShown: false }} />
            <Stack.Screen name="CarrierManagement" component={CarrierManagement} options={{ title: "YourSupport", headerShown: false }} />
            <Stack.Screen name="BrokerPacket" component={BrokerPacket} options={{ title: "BrokerPacket", headerShown: false }} />


            <Stack.Screen name="MyLLMlist" component={MyLLMlist} options={{ title: "MyLLMlist", headerShown: false }} />
            <Stack.Screen name="NameLLM" component={NameLLM} options={{ title: "NameLLM", headerShown: false }} />
            <Stack.Screen name="FileUploadPromptPage" component={FileUploadPromptPage} options={{ title: "FileUploadPromptPage", headerShown: false }} />
            <Stack.Screen name="FileUploadPage" component={FileUploadPage} options={{ title: "FileUploadPage", headerShown: false }} />
            <Stack.Screen name="FreightLogbook" component={FreightLogbook} options={{ title: "FreightLogbook", headerShown: false }} />
            <Stack.Screen name="Success" component={Success} options={{ title: "Success", headerShown: false }} />
            <Stack.Screen name="Opps" component={Opps} options={{ title: "Opps", headerShown: false }} />
            <Stack.Screen name="FileNotCompatible" component={FileNotCompatible} options={{ title: "FileNotCompatible", headerShown: false }} />
        </Stack.Navigator>
    );
}

export default function Root() {
    return (
        <NavigationContainer>
            {/* <OldMyStack /> */}
            <MyStack />
        </NavigationContainer>
    );
}
