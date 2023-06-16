import FullCalendar from "@fullcalendar/react";
import { Box } from "@mui/material";
import React from "react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";

const handleDateClick = (selected: any) => {
  const title = prompt("Please enter a new title for your event");
  const calendarApi = selected.view.calendar;

  calendarApi.unselect();

  if (title) {
    calendarApi.addEvent({
      id: `${selected.dateStr} - ${title}`,
      title,
      start: selected.startStr,
      end: selected.endSte,
    });
  }
};

const handleEventClick = (selected: any) => {
  if (window.confirm("are you sure you want to remove an event?")) {
    selected.event.remove();
  }
};

interface Props {
  events: [];
  setCurrentEvents: (events: any) => void;
}

const CustomCalendar: React.FC<Props> = ({ events, setCurrentEvents }) => {
  return (
    <Box flex="1 1 100%" ml="15px">
      <FullCalendar
        editable
        selectable
        selectMirror
        dayMaxEventRows
        height="75vh"
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin, listPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
        initialView="dayGridMonth"
        select={handleDateClick}
        eventClick={handleEventClick}
        eventsSet={(events) => setCurrentEvents(events)}
        initialEvents={events}
      />
    </Box>
  );
};

export default CustomCalendar;
