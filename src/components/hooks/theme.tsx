import React, { createContext, useState, useContext } from "react";
import dark from "../../styles/themes/Dark";
import light from "../../styles/themes/Light";

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
  children?: React.ReactNode;
}

interface ITheme {
  title: string;
  colors: {
    primary: string;
    secondary: string;
    tertiary: string;

    font: string;
    white: string;
    black: string;
    gray: string;

    success: string;
    info: string;
    warning: string;
  };
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);
const ThemeProvider: React.FC<IThemeContext> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem("@Atend-Pro:theme");
    if (themeSaved) {
      return JSON.parse(themeSaved);
    } else {
      return dark;
    }
  });
  const toggleTheme = () => {
    if (theme.title === "dark") {
      setTheme(light);
      localStorage.setItem("@Atend-Pro:theme", JSON.stringify(light));
    } else {
      setTheme(dark);
      localStorage.setItem("@Atend-Pro:theme", JSON.stringify(dark));
    }
  };
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);
  return context;
}

export { ThemeProvider, useTheme };
