import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../dashboard";
import { ContactsInformationComponent } from "../../components/DataComponents/ContactsInformationComponent";
import { BarChartComponent } from "../../components/ChartsComponents/BarChartComponent";
import { GeographyChartComponent } from "../../components/ChartsComponents/GeographyChartComponent";
import { LineChartComponent } from "../../components/ChartsComponents/LineChartComponent";
import { PieChartComponent } from "../../components/ChartsComponents/PieChartComponent";
import { InvoicesBalancesComponent } from "../../components/DataComponents/InvoicesBalancesComponent";
import { ManageTeamComponent } from "../../components/DataComponents/ManageTeamComponent";
import { NotFoundPageComponent } from "../../components/NotFoundPageComponent";
import { CalendarComponent } from "../../components/PagesComponents/CalendarComponent";
import { FaqPageComponent } from "../../components/PagesComponents/FaqPageComponent";
import { ProfileFormComponent } from "../../components/PagesComponents/ProfileFormComponent";

export const MainView = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Dashboard />}
            errorElement={<NotFoundPageComponent />}
          ></Route>
          <Route
            path="/data/manage-team"
            element={<ManageTeamComponent />}
          ></Route>
          <Route
            path="/data/contacts-information"
            element={<ContactsInformationComponent />}
          ></Route>
          <Route
            path="/data/invoices-balances"
            element={<InvoicesBalancesComponent />}
          ></Route>
          <Route
            path="/pages/profile-form"
            element={<ProfileFormComponent />}
          ></Route>
          <Route path="/pages/calendar" element={<CalendarComponent />}></Route>
          <Route path="/pages/faq" element={<FaqPageComponent />}></Route>
          <Route
            path="/charts/bar-chart"
            element={<BarChartComponent />}
          ></Route>
          <Route
            path="/charts/line-chart"
            element={<LineChartComponent />}
          ></Route>
          <Route
            path="/charts/pie-chart"
            element={<PieChartComponent />}
          ></Route>
          <Route
            path="/charts/geography-chart"
            element={<GeographyChartComponent />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
