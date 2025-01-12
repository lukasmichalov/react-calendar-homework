import React, { useState } from 'react';
import styles from './Calendar.module.css';
// Bootstrap
import DatePicker from '../../components/DatePicker/DatePicker';

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const year = date.getFullYear();
  const month = date.getMonth();
  const dayOfMonth = date.getDate();
  const firstDayOfMonth = (new Date(year, month, 1).getDay() + 6) % 7;
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysArray = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    daysArray.push('');
  }
  for (let i = 1; i <= daysInMonth; i++) {
    daysArray.push(i);
  }

  return (
    <div className={styles.container}>
      <DatePicker setDate={setDate}></DatePicker>
      <div className={styles.calendarGrid}>
        {['Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota', 'Neděle'].map(day => (
          <div key={day} className={styles.calendarHeader}>{day}</div>
        ))}
        {daysArray.map((day, index) => (
          <div key={index} className={[styles.calendarDay, day === dayOfMonth && styles.current].join(" ")}>
            <div className={styles.calendarDayContent}>{day}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Calendar;
