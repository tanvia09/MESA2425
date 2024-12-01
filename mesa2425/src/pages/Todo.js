import React, { useState, useEffect } from 'react';
import '../styles/Todo.css';

const Todo = ({ tasks }) => {
  const [taskList, setTaskList] = useState(tasks);

  const getTimeRemaining = (dueDate) => {
    const now = new Date();
    const timeRemaining = dueDate - now;
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    if (timeRemaining < 0) {
      return 'Expired';
    }
    return `${hours}h ${minutes}m`;
  };

  const toggleComplete = (index) => {
    setTaskList((prevTasks) => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index].completed = !updatedTasks[index].completed;
      return updatedTasks;
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTaskList([...taskList]); // Re-render every second to update countdown
    }, 1000);
    return () => clearInterval(interval);
  }, [taskList]);

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <ul className="todo-list">
        {taskList.map((task, index) => (
          <li key={index} className={`todo-item ${task.completed ? 'completed' : ''}`}>
            <p>{task.task} (Due: {task.date} at {task.time})</p>
            <p>Countdown: {getTimeRemaining(task.dueDate)}</p>
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? 'Mark Incomplete' : 'Mark Completed'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
