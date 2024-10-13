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
                headerShown: true,
                // headerTransparent: true,
                headerTitle: '',
                headerTintColor: '#ffffff',
                headerStyle: {
                    backgroundColor: '#000',
                }, 
            }}
        >
            <Stack.Screen name="Presentation" component={Presentation} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
}