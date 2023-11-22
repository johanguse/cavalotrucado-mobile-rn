import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from '@react-navigation/drawer';

import HeaderComponent from '../components/HeaderComponent';
import CustomDrawerContent from '../components/CustomDrawerContent';
import SplashScreen from "../screens/SplashScreen";
import HomeScreen from "../screens/HomeScreen";
import VehicleDetailScreen from "../screens/VehicleDetailScreen";
import Dashboard from '../screens/Dashboard';
import Posts from '../screens/Posts';
import Media from '../screens/Media';
import Pages from '../screens/Pages';
import Comments from '../screens/Comments';
import Appearance from '../screens/Appearance';
import Plugins from '../screens/Plugins';
import Users from '../screens/Users';
import Settings from '../screens/Settings';
import Tools from '../screens/Tools';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            drawerContent={CustomDrawerContent}
            screenOptions={{
                headerShown: false,
            }}
        >
            <Drawer.Screen name="RootHomeScreen" component={HomeScreen} />
            <Drawer.Screen name="Dashboard" component={Dashboard} />
            <Drawer.Screen name="Posts" component={Posts} />
            <Drawer.Screen name="Media" component={Media} />
            <Drawer.Screen name="Pages" component={Pages} />
            <Drawer.Screen name="Comments" component={Comments} />
            <Drawer.Screen name="Appearance" component={Appearance} />
            <Drawer.Screen name="Plugins" component={Plugins} />
            <Drawer.Screen name="Users" component={Users} />
            <Drawer.Screen name="Settings" component={Settings} />
            <Drawer.Screen name="Tools" component={Tools} />
        </Drawer.Navigator>
    );
}

const AppNavigation = () => {

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="SplashScreen">
                <Stack.Screen
                    name="VehicleDetailScreen"
                    component={VehicleDetailScreen}
                    options={{
                        headerShown: false,
                    }}
                />
                <Stack.Screen
                    name="HomeScreen"
                    component={DrawerNavigator}
                    options={{
                        header: () => <HeaderComponent />
                    }}
                />
                <Stack.Screen
                    name="SplashScreen"
                    component={SplashScreen}
                    options={{
                        headerShown: false,
                    }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
export default AppNavigation;

