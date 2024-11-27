import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <nav>
          <Link to="/home">Home </Link>
          <Link to="/resources">Resources </Link>
          <Link to="/tasks">Tasks </Link>
          <Link to="/todo">To-do </Link>
        </nav>
    )
}