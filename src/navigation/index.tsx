import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { Image } from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import logo from '../assets/images/logo.png'; 
const Stack = createNativeStackNavigator(); // {Navigator, screen}
const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='UserProfile' screenOptions={{headerShown: true}}>
            <Stack.Screen 
                name='Feed'
                component={HomeScreen}/>
            <Stack.Screen
                name='UserProfile'
                component={ProfileScreen}
                options={{headerTitle: HeaderTitle}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}

const HeaderTitle = () => {
    return (
        <Image source={logo} resizeMode='contain' style={{width: 150, height: 40}} />
    )
}
export default Navigation;