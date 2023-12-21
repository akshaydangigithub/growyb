import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import BootstrapTheme from "@fullcalendar/bootstrap";
import { EventInput } from "@fullcalendar/core";

interface CalendarProps {
  onDateClick: (arg: any) => void;
  onEventClick: (arg: any) => void;
  events: EventInput[];
}

const Calendar = ({ onDateClick, onEventClick, events }: CalendarProps) => {
  const handleDateClick = (arg: any) => {
    onDateClick(arg);
  };

  const handleEventClick = (arg: any) => {
    onEventClick(arg);
  };

  return (
    <div>
      {/* <FullCalendar
        plugins={[
          dayGridPlugin,
          interactionPlugin,
          timeGridPlugin,
          listPlugin,
          BootstrapTheme,
        ]}
        initialView="dayGridMonth"
        handleWindowResize={true}
        themeSystem="bootstrap"
        buttonText={{
          today: "Today",
          month: "Month",
          week: "Week",
          day: "Day",
          list: "List",
          prev: "Prev",
          next: "Next",
        }}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
        }}
        dayMaxEventRows={1}
        editable={true}
        selectable={true}
        droppable={true}
        // events={events}
        dateClick={handleDateClick}
        eventClick={handleEventClick}
      /> */}
    </div>
  );
};

export default Calendar;
