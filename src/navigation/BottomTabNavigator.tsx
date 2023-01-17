import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import colors from '../theme/colors'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import HomeStackNavigator from './HomeStackNavigator';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                tabBarActiveTintColor: colors.primary,
            }}
        >
            <Tab.Screen 
                name='HomeStack'
                component={HomeStackNavigator}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons name='home-filled' size={size} color={color} />
                )}}
            />
            <Tab.Screen 
                name='Search'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialIcons name='search' size={size} color={color} />
                )}}
            />
            <Tab.Screen
                name='Upload'
                component={HomeScreen}
                options={{
                    headerShown: false,
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name='plus-circle-outline' size={size} color={color} />
                )}}
            />
            <Tab.Screen 
                name='Notifications'
                component={HomeScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name='heart-outline' size={size} color={color} />
                )}}
            />
            <Tab.Screen 
                name='MyProfile'
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name='user-circle-o' size={size} color={color} />
                )}}
            />
        </Tab.Navigator>
    )
  }
  
  export default BottomTabNavigator