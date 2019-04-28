import React from 'react';
import { createStackNavigator, HeaderBackButton } from 'react-navigation';
import { Drawer } from './Drawer';
import ItemDetailsScreen from '../screens/ItemDetailsScreen';
import ItemSearchScreen from '../screens/ItemSearchScreen';
import LoginScreen from '../screens/LoginScreen';
import RegistrationScreen from '../screens/RegistrationScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';

export const App = createStackNavigator(
    {
        Drawer: { 
            screen: Drawer
        },

        Login: {
            screen: LoginScreen
        },

        Registration: {
            screen: RegistrationScreen
        },

        ForgotPassword: {
           screen: ForgotPasswordScreen
        },

        ItemDetails: {
            screen: ItemDetailsScreen
        },

        ItemSearch: {
            screen: ItemSearchScreen
        }
    },
    {
        initialRouteName: "Login",
        headerMode: "none"
    }
)
