import React, { useState, useEffect } from 'react';
import { AsyncStorage, Text, View } from 'react-native';
import ThemeContext from './src/utils/ThemeContext';
import ThemeSwitch from './src/components/ThemeSwitch';
import backgrounds from './src/styles/backgrounds';

const App: React.FC = () => {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    async function setInicialTheme() {
      const savedTheme = await AsyncStorage.getItem('@github-assistent/theme');

      if (savedTheme) setTheme(savedTheme);

    };

    setInicialTheme();

  }, []);

  const defaultContext = {
    theme: theme,
    setTheme: setTheme
  };

  return (
    <ThemeContext.Provider value={defaultContext}>
      <View style={[{ flex: 1 }, backgrounds[theme].main]}>
        <ThemeSwitch />
      </View>
    </ThemeContext.Provider >
  );
}

export default App;
