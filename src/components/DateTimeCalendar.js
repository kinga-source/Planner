import React from 'react';
import { Calendar, Views, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';

const events = [
  {
    id: 11,
    title: 'birthday party',
    start: new Date(2020, 10, 11, 7, 0, 0),
    end: new Date(2020, 10, 11, 12, 0, 0),
  },
  {
    id: 16,
    title: 'SPOTKANIE O PRACE',
    start: new Date(2020, 8, 3, 15, 30, 0),
    end: new Date(2020, 8, 3, 19, 0, 0),
  },
];

const localizer = momentLocalizer(moment);

export default function DateTimeCalendar() {
  return (
    <Calendar
      events={events}
      step={15}
      timeslots={8}
      localizer={localizer}
      defaultView={Views.DAY}
      defaultDate={new Date()}
    />
  );
}
