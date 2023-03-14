import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material";
import { themeSettings } from "../theme";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

export const useColorMode = () => {
  const [mode, setMode] = useState("light");

  const colorMode = {
    toggleColorMode: () =>
      setMode((prev) => (prev === "light" ? "dark" : "light")),
  };

  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return [theme, colorMode];
};
