import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Resources from './pages/Resources';
import Todo from './pages/Todo';
import Tasks from './pages/Tasks';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTaskToTodoList = (task) => {
    setTasks((prevTasks) => [...prevTasks, task]);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <div className="App-header">
          <img src="/images/textbox.png" alt="" width="100" height="50"></img>
          <div className="overlay-text">
            <h1>Mindlink</h1>
            <h3>Your productivity companion</h3>
          </div>
        </div>

        <div className="App-base">

        </div>
        
        {/* Routes */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/tasks" element={<Tasks addTaskToTodoList={addTaskToTodoList} />} />
          <Route path="/todo" element={<Todo tasks={tasks} />} />
        </Routes>

        {/* Menu */}
        <nav className="App-nav">
          <ul>
            <li><Link to="/home"><img src="/images/home-icon.png" alt="" width="50" height="50"></img></Link></li>
            <li><Link to="/resources"><img src="/images/camera-icon.png" alt="" width="50" height="50"></img></Link></li>
            <li><Link to="/tasks"><img src="/images/calendar-icon.png" alt="" width="50" height="50"></img></Link></li>
            <li><Link to="/todo"><img src="/images/todo-icon.png" alt="" width="50" height="50"></img></Link></li>
          </ul>
        </nav>
      </BrowserRouter>
    </div>
  );
}

export default App;
