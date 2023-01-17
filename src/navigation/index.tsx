import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CommentsScreen from '../screens/CommentsScreen/CommentsScreen';
import BottomTabNavigator from './BottomTabNavigator';
const Stack = createNativeStackNavigator(); // {Navigator, screen}

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home' screenOptions={{headerShown: true}}>
            <Stack.Screen 
                name='Home'
                component={BottomTabNavigator}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name='Comments'
                component={CommentsScreen}
                options={{title: 'Profile'}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
};

export default Navigation;