import { createContext } from 'react';

interface Theme {
    theme: string,
    setTheme: React.Dispatch<React.SetStateAction<string>>
}

const ThemeContext = createContext<Theme>(null);

export default ThemeContext;
