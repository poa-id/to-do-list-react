import Item from '../Item';
import React, { useContext } from 'react';
import { TaskListContext } from '../../Contexts/AppContext';


const List = () => {
    const { tasks } = useContext(TaskListContext);
    return (
        <div>
            {tasks.length ? (
                <ul className='list' >
                    {tasks.map(task => {
                        return <Item task={task} key={task.id} />
                    })}
                </ul>
            ) : (
                <div className="no-tasks">Way to go! You've got no tasks left.</div>
            )}
        </div>
    )
}

export default List;