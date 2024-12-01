import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles
import '../styles/Tasks.css';

const Tasks = ({ addTaskToTodoList }) => {
  const [task, setTask] = useState('');
  const [time, setTime] = useState('');
  const [date, setDate] = useState(new Date());

  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (task && time) {
      addTaskToTodoList({
        task,
        date: date.toDateString(),
        time,
        dueDate: new Date(`${date.toDateString()} ${time}`), // Store full date and time
      });
      setTask('');
      setTime('');
    }
  };

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  // Disable past dates and ensure all dates have black text
  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      // Disable past dates (white style for past dates)
      if (date < new Date()) {
        return 'react-calendar__tile--disabled';
      }
    }
    return null;
  };

  return (
    <div className="tasks-container">
      <h2>Create a Task</h2>
      <form onSubmit={handleTaskSubmit} className="task-form">
        <input
          type="text"
          placeholder="Enter Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)} // Handle time input change
        />
        <button type="submit">Add Task</button>
      </form>

      <h3>Select Date</h3>
      <div className="calendar-container">
        <Calendar
          onChange={handleDateChange}
          value={date}
          className="calendar"
          tileClassName={tileClassName}
        />
      </div>
    </div>
  );
};

export default Tasks;
