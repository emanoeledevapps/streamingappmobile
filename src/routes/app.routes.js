import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Entypo, FontAwesome } from '@expo/vector-icons';

const {Navigator, Screen} = createBottomTabNavigator();
const Stack = createNativeStackNavigator()

import { Home } from "../pages/Home";
import { DetailContent } from "../pages/DetailContent";
import { Player } from "../pages/Player";
import { Profile } from "../pages/Profile";

export function HomeRoutes(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='DetailContent'
                component={DetailContent}
                options={{
                    headerShown: false
                }}
            />

            <Stack.Screen
                name='Player'
                component={Player}
                options={{
                    headerShown: false
                }}
            />
        </Stack.Navigator>
    )
}

export function AppRoutes(){
    return(
        <Navigator
            screenOptions={{
                tabBarStyle:{
                    backgroundColor: '#2E2E2E',
                },
                tabBarActiveTintColor:'white',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Screen
                name='Initial'
                component={HomeRoutes}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color}) => <Entypo name="home" size={25} color={color}/>
                }}
            />

            <Screen
                name='Search'
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Buscar',
                    tabBarIcon: ({color}) => <FontAwesome name="search" size={25} color={color} />
                }}
            />

            <Screen
                name='Profile'
                component={Profile}
                options={{
                    headerShown: false,
                    tabBarLabel: 'Perfil',
                    tabBarIcon: ({color}) => <FontAwesome name="user-circle-o" size={25} color={color} />
                }}
            />
        </Navigator>
    )
}