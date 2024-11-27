import Header from '../components/Header'
import 'react-calendar/dist/Calendar.css';

export default function Tasks() {

    return (
        <div>
            <Header />
            <h2>Create a task</h2>
            <label for="taskName">Task: </label>
            <input type="text" id="taskName" name="taskName" required/>
            <label for="time">Time:</label>
            <input type="datetime-local" id="taskTime" name="taskTime" required/>
            <button type="submit">Submit</button>

            <h2>Tasks:</h2>
            <ul id="taskList"></ul>
        </div>
    )
}