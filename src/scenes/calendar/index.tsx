import React from "react";
import CalendarComponent from "../../components/PagesComponents/Calendar/CalendarComponent";
import { TitleComponent } from "../../components/TitleComponent";

const Calendar = () => {
  return (
    <>
      <TitleComponent name="calendar" />
      <CalendarComponent />;
    </>
  );
};

export default Calendar;
