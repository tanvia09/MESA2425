import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Resources from './pages/Resources';
import Todo from './pages/Todo';
import Tasks from './pages/Tasks';
import './App.css';

function App() {
  return (
    <div>
      
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/todo" element={<Todo />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
