import React, { useContext, useState } from 'react';
import AppContext, { TaskListContext } from '../../Contexts/AppContext';

function Input() {
    const { addTask, clearList } = useContext(TaskListContext);

    const [title, setTitle] = useState("")

    const handleChange = e => {
        setTitle(e.target.value);
    }


    const handleSubmit = e => {
        e.preventDefault();
        addTask(title);
        setTitle("");
    }

    return (
        <form onSubmit={handleSubmit} className="form">
            <input
                onChange={handleChange}
                value={title}
                type="text"
                className="task-input"
                placeholder="Add task..."
                required />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">Add</button>
                <button onClick={clearList} className="btn clear-btn">Clear</button>
            </div>
        </form>
    )
}

export default Input;