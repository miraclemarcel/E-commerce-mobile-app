import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';

// Import your screens here
import Login from '../screens/login';
import SignUp from '../screens/signup';
import Home from '../screens/home';
import ResetPassword from '../screens/resetPassword/resetPassword';
import ResetOtp from '../screens/resetPassword/ResetOtp';
import CreateNewPaasword from '../screens/resetPassword/CreateNewPaasword';

import { Text, View } from 'react-native';

const Stack = createStackNavigator();


function AuthStack () {
  return (
    <Stack.Navigator
      initialRouteName="Login" 
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login}  />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ResetOtp" component={ResetOtp} />
      <Stack.Screen name="CreateNewPaasword" component={CreateNewPaasword} />
    </Stack.Navigator>
  );
}






export default function NavigationScreens () {
    return (
     <Stack.Navigator 
     screenOptions={{
      headerTitle: "",
      headerTransparent: true,
      headerTintColor: "white",
      headerLeftContainerStyle: { paddingLeft: 20 },
      headerStyle: { backgroundColor: "transparent" },
    }}
    initialRouteName="AuthStack"
     
     >

      <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false, headerTitle: '' }}  />
      {/* <Stack.Screen name="MainContent" component={TabNavigator} options={{ headerShown: false }} /> */}
      


     </Stack.Navigator>
        

    )
}