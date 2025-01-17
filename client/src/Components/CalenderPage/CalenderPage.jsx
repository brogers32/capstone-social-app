import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CalenderPage.css';

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div className="calendar-page">
      <h1>Calendar</h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  );
};

export default CalendarPage;