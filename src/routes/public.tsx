import { createStackNavigator } from '@react-navigation/stack';

import { Presentation } from '../screens/public/presentation'; 
import { Login } from '../screens/public/login';
import { Register } from '../screens/public/register';

const Stack = createStackNavigator();


export function Public() {
    return (
        <Stack.Navigator
            initialRouteName="Presentation"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Presentation" component={Presentation} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
    );
}