import React, {useState} from "react";
import { MdDelete } from "react-icons/md";
import { MdAdd } from "react-icons/md";




function ToDoList() {

    const [task, setTask] = useState([]);

    const [newTask, setNewTask] = useState("");
    
    function handleChange(event) {
        setNewTask(event.target.value);
    }

    function addTask() {
        if (newTask.trim() === "")
            return;
        setTask (prev => { return [...prev, newTask]});
        setNewTask("");
    }

    function deleteTask (index) {
        setTask(prev => prev.filter((taskItem, i) => i !== index));

    }

    return (
        <div className="container">
            <h1>Lista de tareas</h1>
            <input type="text" value={newTask} onChange={handleChange} />
            <button onClick={addTask}><span><MdAdd className= "my-icon" /></span>
</button>
            
            <ul> {task.map((taskItem, index) => (
                <li key={index}>{taskItem} 
                <button onClick={() => deleteTask(index)}><span><MdDelete className="my-icon" /></span></button></li>
            ))}
                
            </ul>
        </div>
    );
    
}

export default ToDoList;