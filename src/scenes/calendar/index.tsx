import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import { TitleComponent } from "../../components/TitleComponent";
import Events from "./Events";
import CustomCalendar from "./CustomCalendar";

const Calendar = () => {
  const title = "CALENDAR";
  const subtitle = "Calendar with your events";
  const initialEvents = [
    {
      id: "1234",
      title: "all day event",
      date: "2023-06-14",
    },
    {
      id: "4321",
      title: "timed event",
      date: "2023-06-25",
    },
  ];

  const [currentEvents, setCurrentEvents] = useState<any>(initialEvents);

  return (
    <Box m="20px">
      <TitleComponent title={title} subtitle={subtitle}></TitleComponent>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        <Events events={currentEvents} />
        <CustomCalendar
          setCurrentEvents={setCurrentEvents}
          events={currentEvents}
        />
      </Box>
    </Box>
  );
};

export default Calendar;
