import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import Home from './src/pages/Home';
import ListaPost from './src/pages/ListaPost';
import LoginScreen from './src/pages/LoginScreen';

const Stack = createStackNavigator();

function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="ListPosts" component={ListaPost} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigator;
