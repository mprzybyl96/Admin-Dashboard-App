import React from "react";
import { useState } from "react";
import { CalendarApi, formatDate } from "@fullcalendar/core";
import FullCalendar from "@fullcalendar/react"; // must go before plugins
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import interactionPlugin from "@fullcalendar/list";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import { tokens } from "../../theme";
import { CalendarContext, DateComponent } from "@fullcalendar/core/internal";
import { TitleComponent } from "../../components/TitleComponent";
import { eventNames } from "process";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [currentEvents, setCurrentEvents] = useState<any>([]);

  const handleDataClick = (selected: any) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi: CalendarApi = selected.view.calendar;

    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr} - ${title}`,
        title,
        start: selected.startStr,
        end: selected.endSte,
        allDay: selected.AllDay,
      });
    }
  };

  const handleEventClick = (selected: any) => {
    if (window.confirm("sure?")) {
      selected.evnet.remove();
    }
  };

  return (
    <Box m="40px">
      <TitleComponent
        title={"Calendar"}
        subtitle={"Events of yours"}
      ></TitleComponent>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box
          flex="1 1 20%"
          p="15px"
          borderRadius="4px"
          sx={{
            backgroundColor: `${colors.primary[400]}`,
          }}
        >
          <Typography variant="h5">Events</Typography>
          <List>
            {currentEvents.map((next: any) => {
              <ListItem
                key={next.id}
                sx={{
                  backgroundColor: colors.greenAccent[500],
                  m: "10px 0",
                  borderRadius: "2px",
                }}
              >
                <ListItemText
                  primary={next.title}
                  secondary={
                    <Typography>
                      {formatDate(next.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                />
              </ListItem>;
            })}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
