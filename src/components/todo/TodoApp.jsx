// TodoApp.js
import TodoData from './TodoData';
import TodoNew from './TodoNew';
import { useState } from 'react';
import reactLogo from '../../assets/react.svg';
import './TodoApp.css'; // Import the CSS file
import checklistImage from '../../assets/checklist-co-hoi-trong-SWOT.jpg'; // Updated import

const TodoApp = () => {
    const [todoList, setTodoList] = useState([]);

    const addNewTodo = (newItem) => {
        setTodoList([...todoList, { id: todoList.length + 1, value: newItem }]);
    };

    const deleteTodo = (id) => {
        setTodoList(todoList.filter(item => item.id !== id));
    };

    return (
        <div className="todo-container">
            <div className="todo-title">TODO list app - ReactJS</div>
            <TodoNew addNewTodo={addNewTodo} />
            {todoList.length > 0 ? (
                <TodoData todoList={todoList} deleteTodo={deleteTodo} />
            ) : (
                <div className="todo-image">
                    <img src={checklistImage} className="logo" alt="React Logo" />
                </div>
            )}
        </div>
    );
};

export default TodoApp;