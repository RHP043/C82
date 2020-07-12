import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import WelcomeScreen from '../screens/WelcomeScreen';
import BookRequestScreen from '../screens/BookRequestScreen';
import BookDonateScreen from '../screens/BookDonateScreen';
import {createAppContainer,createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

export const AppTabNavigator = createBottomTabNavigator({
    DonateBooks:{
        screen:BookDonateScreen,
        navigationOptions:{
            tabBarLabel:"Donate Books"
        }
    },
    RequestBooks:{
        screen:BookRequestScreen,
        navigationOptions:{
            tabBarLabel:"Request Books"
        }
    }
})
