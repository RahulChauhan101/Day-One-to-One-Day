import React, { createContext } from "react";
import { COLORS } from "./colors";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ COLORS }}>
      {children}
    </ThemeContext.Provider>
  );
};
