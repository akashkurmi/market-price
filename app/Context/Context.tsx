"use client";
import { createContext } from "react";
import Property from "@/properties.json";

export const ThemeContext = createContext(Property);

export const Context = ({ children }: any) => {
  const Properties = Property as any;

  return (
    <ThemeContext.Provider value={Properties}>{children}</ThemeContext.Provider>
  );
};

export default Context;
