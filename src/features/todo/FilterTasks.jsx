import './styles/FilterTasks.css';
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from './todoSlice'

const FilterTasks = () => {
    const dispatch = useDispatch()

    return (
        <select 
        className="filter-select" 
        onChange= {(e) => {
            dispatch(setFilter(e.target.value))
         }} >
            <option value="all">Все</option>
            <option value="completed">Выполненные</option>
            <option value="actual">Не выполненные</option>
        </select>
    )
}
export default FilterTasks;