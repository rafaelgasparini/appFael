import 'react-native-gesture-handler';
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const Stack = createStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: '#7159c1',
                },
                headerTintColor: '#FFF',
                gestureEnabled: true,
            }}>
                <Stack.Screen name="SignIn" component={SignIn} options={{headerShown: false}}/>
                <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
