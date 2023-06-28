import TopBar from "./scenes/global/TopBar";
import SidebarLayout from "./scenes/global/Sidebar";

import Dashboard from "./scenes/dashboard";
import ManageTeam from "./scenes/team";
import Contacts from "./scenes/contacts";
import Invoices from "./scenes/invoices";

import ProfileForm from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";

import BarChart from "./scenes/barChart";
import LineChart from "./scenes/lineChart";
import PieChart from "./scenes/pieChart";
import GeoChart from "./scenes/geoChart";

import { ColorModeContext } from "./hooks/themeHook";
import { useColorMode } from "./hooks/themeHook";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";
import { NotFoundPageComponent } from "./components/NotFoundPageComponent";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export const App = () => {
  const [theme, colorMode] = useColorMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <BrowserRouter>
            <div className="app">
              <SidebarLayout />
              <main className="content">
                <TopBar />
                <div className="main-view">
                  <Routes>
                    <Route
                      path="/"
                      element={<Dashboard />}
                      errorElement={<NotFoundPageComponent />}
                    ></Route>
                    <Route
                      path="/data/manage-team"
                      element={<ManageTeam />}
                    ></Route>
                    <Route
                      path="/data/contacts-information"
                      element={<Contacts />}
                    ></Route>
                    <Route
                      path="/data/invoices-balances"
                      element={<Invoices />}
                    ></Route>

                    <Route
                      path="/pages/profile-form"
                      element={<ProfileForm />}
                    ></Route>
                    <Route
                      path="/pages/calendar"
                      element={<Calendar />}
                    ></Route>
                    <Route path="/pages/faq" element={<FAQ />}></Route>

                    <Route
                      path="/charts/bar-chart"
                      element={<BarChart />}
                    ></Route>
                    <Route
                      path="/charts/line-chart"
                      element={<LineChart />}
                    ></Route>
                    <Route
                      path="/charts/pie-chart"
                      element={<PieChart />}
                    ></Route>
                    <Route
                      path="/charts/geography-chart"
                      element={<GeoChart />}
                    ></Route>
                  </Routes>
                </div>
              </main>
            </div>
          </BrowserRouter>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};
