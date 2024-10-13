import { createStackNavigator } from '@react-navigation/stack';

import { Login } from '../screens/public/login';
import { Register } from '../screens/public/register';

const Stack = createStackNavigator();


export function Private() {
    return (
        <Stack.Navigator
            initialRouteName="Presentation"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}