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
        <header className="App-header">
          <h1 className="App-title">Mindlink</h1>
          <h3 className="App-subtitle">Your productivity companion</h3>
        </header>

        {/* Menu */}
        <nav className="App-nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/resources">Resources</Link></li>
            <li><Link to="/tasks">Tasks</Link></li>
            <li><Link to="/todo">Todo</Link></li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/tasks" element={<Tasks addTaskToTodoList={addTaskToTodoList} />} />
          <Route path="/todo" element={<Todo tasks={tasks} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
