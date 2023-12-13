import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "@expo/vector-icons/Ionicons";

// Import your screens here
import Login from '../screens/login';
import SignUp from '../screens/signup';
import Home from '../screens/homeScreen/home';
import ResetPassword from '../screens/resetPassword/resetPassword';
import ResetOtp from '../screens/resetPassword/ResetOtp';
import CreateNewPaasword from '../screens/resetPassword/CreateNewPaasword';
import Favourite from '../screens/Favourite';
import Cart from '../screens/Cart';
import Profile from '../screens/Profile';



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function AuthStack () {
  return (
    <Stack.Navigator
      initialRouteName="Login" 
    >
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login}  />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="ResetOtp" component={ResetOtp} />
      <Stack.Screen name="CreateNewPaasword" component={CreateNewPaasword} />
    </Stack.Navigator>
  );
}


function TabStack() {
  return (

      <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: { paddingBottom: 10 },
        // tabBarActiveBackgroundColor: "rgba(19, 80, 232, 0.3)",
        tabBarStyle: { padding: 10, height: 70 },
      }}
      
      >
        <Tab.Screen 
        name="Home" 
        component={Home}
          options={{
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
        name="Favourite" 
        component={Favourite} 
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart-outline" color={color} size={size} />
          ),
        }}
        />
        <Tab.Screen 
        name="Profile" 
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-outline" color={color} size={size} />
          ),
        }}

         />
      </Tab.Navigator>

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
    initialRouteName="MainContent"
     
     >

      <Stack.Screen name="AuthStack" component={AuthStack} options={{ headerShown: false}}  />
      <Stack.Screen name='MainContent' component={TabStack}  options={{ headerShown: false }} />

      <Stack.Group name="CartStack" >

      </Stack.Group>

      <Stack.Screen name='Cart' component={Cart}/>
    


     </Stack.Navigator>
        

    )
}