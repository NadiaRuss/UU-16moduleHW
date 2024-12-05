import './styles/TaskList.css';
// useSelector помогает получать из Redux информацию
import { useDispatch, useSelector } from 'react-redux';
import { deleteTask, toggleTaskStatus } from './todoSlice';
import check from '../../assets/check.svg';
import checkOk from '../../assets/checkOk.svg';

const TaskList = () => {
    const tasks = useSelector((state) => {
        if(state.todos.filter === 'completed'){
            return state.todos.tasks.filter((task) => task.completed);
        } else if ((state.todos.filter === 'actual')){
            return state.todos.tasks.filter((task) => !task.complited);
        } else if ((state.todos.filter === 'all')){
            return state.todos.tasks;
        }

        
        // state это само хранилище store.js в котором лежит todos и в нем tasks: [] в файле todoSlise.js
    });

    const dispatch = useDispatch();

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <li key= {task.id} className='task-item'>
                    <div className='click-item' onClick={() => dispatch(toggleTaskStatus(task.id))}>             
                    <div className='check-svg'>
                    {task.completed ? <img className='img' src={checkOk}></img> : <img className='img' src={check}></img>}
                    </div>
                    <span className='task-text'>{task.text}</span>
                </div>
                <button onClick={() => dispatch(deleteTask(task.id))} className='delete-btn'>Удалить</button>
                </li>
            ))}
        </ul>
    )
}

export default TaskList;