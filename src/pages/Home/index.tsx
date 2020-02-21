import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import Constants from 'expo-constants';

import ThemeSwitch from '../../components/ThemeSwitch';
import ThemeContext from '../../utils/ThemeContext';

import backgrounds from '../../styles/backgrounds';
import colors from '../../styles/colors';
import homeStyles from './home.styles';

const Home: React.FC = () => {

    const { theme } = useContext(ThemeContext);

    return (
        <View style={[homeStyles.background, backgrounds[theme].main]}>
            <ThemeSwitch />
            <View style={homeStyles.center}>
                <Text style={[homeStyles.title, colors[theme].fontColor]}>Github Assistent</Text>
            </View>
        </View>
    );
};

export default Home;