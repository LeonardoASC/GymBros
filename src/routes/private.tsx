import { createStackNavigator } from '@react-navigation/stack';

import { FirstAccess } from '../screens/private/firstaccess';

const Stack = createStackNavigator();


export function Private() {
    return (
        <Stack.Navigator
            initialRouteName="FirstAccess"
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="FirstAccess" component={FirstAccess} />
        </Stack.Navigator>
    );
}