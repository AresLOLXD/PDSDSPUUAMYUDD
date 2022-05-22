import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import Home from './src/screens/home';
import colors from './src/styles/colors';

const Stack = createStackNavigator();

const App = () => {
    return (
        <NavigationContainer theme={theme}>
            <StatusBar
                backgroundColor={colors.background}
                barStyle="dark-content"
            />
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name="Home" component={Home}></Stack.Screen>
            </Stack.Navigator>
        </NavigationContainer>
    );
};


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: colors.background,
        text: colors.onBackground,
    },
};

export default App;
