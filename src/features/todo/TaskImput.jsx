import { useState } from 'react';
import './styles/TaskInput.css';
import { useDispatch } from 'react-redux';
import { addTask } from './todoSlice';

const TaskInput = () => {

    const [task, setTask] = useState('');

    const dispatch = useDispatch();

    const  handleSubmit = (event) => {
        event.preventDefault()
        if(task.trim()){
            dispatch(addTask(task))
            setTask('')
        }
    };
    return(
        
        <form onSubmit={handleSubmit} className="input-form">
            <input type="text" 
            placeholder="Новая задача"
            className="task-input"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            />
            <button className='submit-btn' type="submit">Добавить</button>
        </form>
    )
}

export default TaskInput