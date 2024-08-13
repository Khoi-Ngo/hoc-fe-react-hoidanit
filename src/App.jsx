import './app_style.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';
import { useState } from 'react';

const App = () => {
  const [todoList, setTodoList] = useState([]);

  const addNewTodo = (newItem) => {
    setTodoList([...todoList, { id: todoList.length + 1, value: newItem }]);
  }

  return (
    <>
      <div className="todo-container">
        <div className="todo-title">TODO list app - ReactJS</div>
        <TodoNew addNewTodo={addNewTodo} />


        {
          todoList.length > 0 ? (
            <TodoData todoList={todoList} />
          ) : null
        }

        {
          todoList.length <= 0 ? (
            <div className='todo-image' style={{}}>
              <img src={reactLogo} className='logo' alt="React Logo" />
            </div>
          ) : null
        }
      </div>
    </>
  );
}

export default App;
