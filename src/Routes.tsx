import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Home from './pages/Home';
import screenOptions from './options/routes/screenOptions';
import tabBarOptions from './options/routes/tabBarOptions';

const Routes = () => {

    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator
                tabBarOptions={tabBarOptions} 
                screenOptions={({ route }) => screenOptions(route)} 
            >
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Issues" component={Home} />
                <Tab.Screen name="Repositories" component={Home} />
            </Tab.Navigator>
        </NavigationContainer>
    );
};

export default Routes;