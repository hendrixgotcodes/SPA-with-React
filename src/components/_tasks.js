import React from 'react';
import { FaTimes } from "react-icons/fa";

const Task = ({tasks, onDelete, onToggle})=>{

    return (
        <div>
            {tasks.map((task) => (
                <div key={task.id}  className={`tasks ${task.reminder===true ? 'reminder' : ''}`} onDoubleClick={()=>{onToggle(task.id)}}>
                    <h3>
                        {task.text}
                        <FaTimes className="fa" onClick={()=>{onDelete(task.id)}}/>
                    </h3>
                    <p>{task.day}</p>
                </div>
            ))}
        </div>
    )

}

export default Task;