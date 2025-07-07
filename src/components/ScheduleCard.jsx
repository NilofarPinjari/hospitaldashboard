import { useState } from 'react';
import './ScheduleCard.css';

const MONTHS = ['Jan','Feb','Mar','Apr','May','Jun',
                'Jul','Aug','Sep','Oct','Nov','Dec'];
const DAYS   = ['MON','TUE','WED','THU','FRI','SAT','SUN'];

export default function ScheduleCard() {

  const [date, setDate] = useState(new Date(2023, 0, 19));
  const [showPicker, setShowPicker] = useState(false);

  const monday = new Date(date);
  monday.setDate(date.getDate() - ((date.getDay() + 6) % 7));  

  const changeWeek  = dir => setDate(d => new Date(d.getFullYear(), d.getMonth(), d.getDate() + dir * 7));
  const changeYear  = dir => setDate(d => new Date(d.getFullYear() + dir, d.getMonth(), d.getDate()));
  const pickMonth   = m   => setDate(d => new Date(d.getFullYear(), m, 1));

  return (
    <div className="schedulecard">

      <div className="tophead">
      <h4>{MONTHS[date.getMonth()]} {date.getFullYear()}</h4>
      <button className="menu-btn" onClick={() => setShowPicker(!showPicker)}>⋯</button>

      {showPicker && (
        <div className="picker">
        <div className="year">
        <button className="arrow" onClick={() => changeYear(-1)}>&#10094;</button>
            <span>{date.getFullYear()}</span>
            <button className="arrow" onClick={() => changeYear(1)}>&#10095;</button>
            </div>

            <ul className="month">
            {MONTHS.map((m, i) => (
            <li key={m}
            className={i === date.getMonth() ? 'active' : ''}
            onClick={() => pickMonth(i)}>
            {m}
            </li>
            ))}
            </ul>
           </div>
        )}
      </div>

      <div className="dateline">
        <button className="arrow" onClick={() => changeWeek(-1)}>&#10094;</button>

        <div className="daterow">
          {Array.from({ length: 7 }).map((_, i) => {
            const day = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate() + i);
            const isActive = day.toDateString() === date.toDateString();

            return (
              <span key={i}
                    className={isActive ? 'active-date' : ''}
                    onClick={() => setDate(day)}>
                <p>{DAYS[i]}</p>
                {String(day.getDate()).padStart(2, '0')}
              </span>
            );
          })}
        </div>

        <button className="arrow" onClick={() => changeWeek(1)}>&#10095;</button>
      </div>

      
      <div className="appointmentlist">
        <div className="appointment">
          <img className="image" src="/doctor1.png" alt="Geoffrey Burke" />
          <div className="info">
            <span className="time">10:00 – 10:30 am</span>
            <span className="name">Geoffrey Burke</span>
            <span className="note">Knee replacement</span>
          </div>
        </div>

        <div className="appointment current">
          <img className="image" src="/doctor4.jpg" alt="Richard Manning" />
          <div className="info">
            <span className="time">12:00 – 01:00 pm</span>
            <span className="name">Richard Manning</span>
            <span className="note">General follow-up</span>
          </div>
        </div>

        <div className="appointment">
          <img className="image" src="/doctor3.jpg" alt="Shawn Saunders" />
          <div className="info">
            <span className="time">02:00 – 02:30 pm</span>
            <span className="name">Shawn Saunders</span>
            <span className="note">Cat-scan check</span>
          </div>
        </div>

        <div className="appointment">
          <img className="image" src="/doctor1.png" alt="Shawn Saunders" />
          <div className="info">
            <span className="time">02:00 – 02:30 pm</span>
            <span className="name">Shawn Saunders</span>
            <span className="note">Cat-scan check</span>
          </div>
        </div>
      </div>
    </div>
  );
}
