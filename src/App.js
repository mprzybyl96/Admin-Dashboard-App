import React from "react";
import TopBar from "./scenes/global/TopBar";
import SidebarLayout from "./scenes/global/Sidebar";
import { ColorModeContext } from "./hooks/themeHook";
import { useColorMode } from "./hooks/themeHook";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";

export const App = () => {
  const [theme, colorMode] = useColorMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <div className="app">
            <SidebarLayout />
            <main className="content">
              <TopBar />
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
