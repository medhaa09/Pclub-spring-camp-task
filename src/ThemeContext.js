import React, { createContext, useState, useMemo, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// Creating a context for managing theme
export const ThemeContext = createContext({
  toggleTheme: () => {},
});
// Wrapper component for providing theme to the entire application
export const ThemeProviderWrapper = ({ children }) => {
  // State for managing the current theme mode (dark or light)
  const [mode, setMode] = useState('dark');
  // Creating a MUI theme based on the current theme mode
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
        },
      }),
    [mode]
  );
// Effect for updating CSS variables based on the theme mode
  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty(
      '--background-color-dark', 
      theme.palette.mode === 'dark' ? 'black' : 'rgb(239, 239, 239)'
    );
    root.style.setProperty(
        '--background-color-dark-container', 
        theme.palette.mode === 'dark' ? '#2d2d2d' : 'rgb(255, 255, 255)'
      );
    root.style.setProperty(
      '--text-color-dark', 
      theme.palette.mode === 'dark' ? '#fff' : '#000'
    );
    
  }, [theme]);
  //toggling between dark and light themes
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'));
  };
 //the theme and toggle function to the entire application using context and MUI ThemeProvider
  return (
    <ThemeContext.Provider value={{ toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
