import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.css";
import "./styles.css";
import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotFoundPageComponent } from "./components/NotFoundPageComponent";
import { ContactsInformationComponent } from "./components/DataComponents/ContactsInformationComponent";
import { ManageTeamComponent } from "./components/DataComponents/ManageTeamComponent";
import { InvoicesBalancesComponent } from "./components/DataComponents/InvoicesBalancesComponent";
import { ProfileFormComponent } from "./components/PagesComponents/ProfileFormComponent";
import { CalendarComponent } from "./components/PagesComponents/CalendarComponent";
import { FaqPageComponent } from "./components/PagesComponents/FaqPageComponent";
import { BarChartComponent } from "./components/ChartsComponents/BarChartComponent";
import { LineChartComponent } from "./components/ChartsComponents/LineChartComponent";
import { PieChartComponent } from "./components/ChartsComponents/PieChartComponent";
import { GeographyChartComponent } from "./components/ChartsComponents/GeographyChartComponent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  // main
  { path: "/", element: <App />, errorElement: <NotFoundPageComponent /> },
  {
    path: "/data/manage-team",
    element: <ContactsInformationComponent />,
  },
  // data
  {
    path: "/data/manage-team",
    element: <ManageTeamComponent />,
  },
  {
    path: "/data/invoices-balances",
    element: <InvoicesBalancesComponent />,
  },
  // pages
  {
    path: "/pages/profile-form",
    element: <ProfileFormComponent />,
  },
  {
    path: "/pages/calendar",
    element: <CalendarComponent />,
  },
  {
    path: "/pages/faq",
    element: <FaqPageComponent />,
  },
  // charts
  {
    path: "/charts/bar-chart",
    element: <BarChartComponent />,
  },
  {
    path: "/charts/line-chart",
    element: <LineChartComponent />,
  },
  {
    path: "/charts/pie-chart",
    element: <PieChartComponent />,
  },
  {
    path: "/charts/geography-chart",
    element: <GeographyChartComponent />,
  },
]);

root.render(<RouterProvider router={router}></RouterProvider>);
