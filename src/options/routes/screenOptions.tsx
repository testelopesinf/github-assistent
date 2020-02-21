import React from 'react';
import { Octicons, FontAwesome } from '@expo/vector-icons';
import { BottomTabNavigationOptions } from '@react-navigation/bottom-tabs';
import { RouteProp } from '@react-navigation/native';

const screenOptions = (route: RouteProp<Record<string, object>, string>): BottomTabNavigationOptions => {
    return {
        tabBarIcon: ({ color, size }): JSX.Element => {
            const { name } = route;

            switch (name) {
                case 'Home': return <FontAwesome name={'home'} size={size} color={color} />;

                case 'Repositories': return <Octicons name={'repo'} size={size} color={color} />;

                case 'Issues': return <Octicons name={'issue-opened'} size={size} color={color} />;

            }

        }
    }
};

export default screenOptions