import React, {useState} from "react";

export default function ToDoList() {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("");

    const handleInputChange = (e) => {
        setNewTask(e.target.value)
    }

    const addTask = () => {
        if (newTask.trim() !== "") {
            setTasks(t => ([...t, newTask]));
            setNewTask("");
        }
    }

    const deleteTask = (index) => {
        const updatedTasks = tasks.filter((_, i) => i !== index);
        setTasks(updatedTasks);
    }

    const moveTaskUp = (index) => {
        if (index > 0) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index-1]] = [updatedTasks[index-1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    const moveTaskDown = (index) => {
        if (index < tasks.length - 1) {
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index+1]] = [updatedTasks[index+1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
    
        <>
            <div className="to-do-list">
                <h1>To-Do-List</h1>
                <div>
                    <input 
                        type="text" 
                        placeholder="Enter a task..."
                        value={newTask}
                        onChange={(e) => handleInputChange(e)}
                    />
                    <button 
                        className="add-button"
                        onClick={addTask}>
                        Add
                    </button>
                </div>

                <ol>
                    {tasks.map((task,index) => 
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button 
                                onClick={() => deleteTask(index)}
                                className="delete-button"
                            >
                                Delete
                            </button>
                            <button 
                                onClick={() => moveTaskUp(index)}
                                className="move-button"
                            >
                                Up
                            </button>
                            <button 
                                onClick={() => moveTaskDown(index)}
                                className="move-button"
                            >
                                Down
                            </button>
                        </li>
                    )}
                </ol>

            </div>
        </>

    );

}