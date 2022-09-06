import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider } from 'native-base';

import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import HomeStack from './HomeStack';
import CreatePin from './CreatePin';
import PinSuccess from './PinSuccess';
import History from './History';
import Details from './Details';
import SearchReceiver from './SearchReceiver';
import InputAmount from './InputAmount';
import Confirmation from './Confirmation';
import PinConfirmation from './PinConfirmation';
import TransferSuccess from './TransferSuccess';
import TransferFailed from './TransferFailed';
import Profile from './Profile';
import PersonalInformation from './PersonalInformation';
import ChangePassword from './ChangePassword';
import ChangePin from './ChangePin';
import AddPhoneNumber from './AddPhoneNumber';
import ManagePhoneNumber from './ManagePhoneNumber';
import Notification from './Notification';
import ForgotPassword from './ForgotPassword';
import ResetPassword from './ResetPassword';

const Stack = createNativeStackNavigator();

function Main() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen
            options={{ headerShown: false }}
            name="HomeStack"
            component={HomeStack}
          />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="CreatePin" component={CreatePin} />
          <Stack.Screen name="PinSuccess" component={PinSuccess} />
          <Stack.Screen name="Details" component={Details} />
          <Stack.Screen name="SearchReceiver" component={SearchReceiver} />
          <Stack.Screen name="InputAmount" component={InputAmount} />
          <Stack.Screen name="Confirmation" component={Confirmation} />
          <Stack.Screen name="PinConfirmation" component={PinConfirmation} />
          <Stack.Screen name="TransferSuccess" component={TransferSuccess} />
          <Stack.Screen name="TransferFailed" component={TransferFailed} />
          <Stack.Screen name="Profile" component={Profile} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
          <Stack.Screen name="ChangePin" component={ChangePin} />
          <Stack.Screen name="AddPhoneNumber" component={AddPhoneNumber} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="ResetPassword" component={ResetPassword} />
          <Stack.Screen
            name="ManagePhoneNumber"
            component={ManagePhoneNumber}
          />
          <Stack.Screen name="Notification" component={Notification} />
          <Stack.Screen
            name="PersonalInformation"
            component={PersonalInformation}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

export default Main;
