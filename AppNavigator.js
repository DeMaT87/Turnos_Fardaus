import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./Screens/LoginScreen";
import ClientDashboard from "./Screens/ClientDashboard";
import AdminDashboard from "./Screens/AdminDashboard";
import LoadingScreen from "./Screens/LoadingScreen";


const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Loading">
                <Stack.Screen name="Loading" component={LoadingScreen} />
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="ClientDashboard" component={ClientDashboard} />
                <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

