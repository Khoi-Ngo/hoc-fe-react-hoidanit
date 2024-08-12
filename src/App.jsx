
import './app_style.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';

const App = () => {
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">TODO list app - ReactJS</div>
        <TodoNew />
        <TodoData />
        <div className='todo-image'>
          <img src={reactLogo} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App
