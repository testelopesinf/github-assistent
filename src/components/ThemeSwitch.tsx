import React, { useContext } from 'react';

import { MaterialIcons } from '@expo/vector-icons'
import ThemeContext from '../utils/ThemeContext';
import { AsyncStorage, View } from 'react-native';
import Constants from 'expo-constants';

const ThemeSwitch: React.FC = () => {

    const { theme, setTheme } = useContext(ThemeContext);

    const switchTheme = () => {
        const newTheme = (theme == 'light') ? 'dark' : 'light';

        setTheme(newTheme);

        AsyncStorage.setItem('@github-assistent/theme', newTheme);
    }

    return (
        <View style={{ position: 'absolute', right: 3, top: Constants.statusBarHeight + 5 }}>
            <MaterialIcons
                name="lightbulb-outline"
                size={40}
                color={(theme == 'light') ? 'black' : 'white'}
                onPress={switchTheme}
            />
        </View>
    );
};

export default ThemeSwitch;