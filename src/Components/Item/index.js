import React, { useContext } from 'react';
import { TaskListContext } from '../../Contexts/AppContext';


const Item = ({ task }) => {
    const { removeTask } = useContext(TaskListContext)


    return (
        <li className='list-item'>
            <span className='text-item'>{task.title}</span>
            <div className='trashcan'>
                <button onClick={() => removeTask(task.id)} className="btn-delete item-btn">
                    Del
                </button>
            </div>
        </li>
    )
}

export default Item;