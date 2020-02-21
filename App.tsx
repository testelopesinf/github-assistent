import React, { useState, useEffect } from 'react';
import Routes from './src/Routes';
import { AsyncStorage } from 'react-native';
import ThemeContext from './src/utils/ThemeContext';

const App: React.FC = () => {

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    async function setInicialTheme() {
      const savedTheme = await AsyncStorage.getItem('@github-assistent/theme');

      if(savedTheme) setTheme(savedTheme);

    };

    setInicialTheme();

  }, []);

  const defaultContext = {
    theme: theme,
    setTheme: setTheme
  };

  return (
    <ThemeContext.Provider value={defaultContext}>
      <Routes />
    </ThemeContext.Provider>
  );
}

export default App;
