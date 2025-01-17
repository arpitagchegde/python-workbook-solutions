import React, { useState } from 'react';


function ToDoList() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');


    const addTask = () => {
        if (task) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };


    return (
        <div>
            <h2>To-Do List</h2>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Enter a task"
            />
            <button onClick={addTask}>Add</button>
            <ul>
                {tasks.map((t, index) => (
                    <li key={index}>{t}</li>
                ))}
            </ul>
        </div>
    );
}


export default ToDoList;