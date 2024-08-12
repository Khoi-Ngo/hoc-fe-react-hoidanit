
import './app_style.css';
import TodoData from './components/todo/TodoData';
import TodoNew from './components/todo/TodoNew';
import reactLogo from './assets/react.svg';


const App = () => {

  const testInheritVar1 = `Khoi Ngo1`;
  const testInheritVar2 = `Khoi Ngo2`;
  const testInheritVar3 = `Khoi Ngo3`;
  const testInheritVar4 = `Khoi Ngo4`;
  const testInheritVar5 = `Khoi Ngo5`;
  const someOtherData = { address: `tphcm`, country: `vietnam` };

  const addNewTodo = (str) => {
    alert(`Call me ${str}`);
  }
  return (
    <>
      <div className="todo-container">
        <div className="todo-title">TODO list app - ReactJS</div>
        <TodoNew
          addNewTodo={addNewTodo} />
        <TodoData
          name={[testInheritVar1, testInheritVar2, testInheritVar3, testInheritVar4, testInheritVar5]}
          someOtherData={someOtherData}
        // style={{ color: 'red', backgroundColor: 'blue', padding: '10px' }} ???
        />
        <div className='todo-image' style={{}}>
          <img src={reactLogo} className='logo' />
        </div>
      </div>
    </>
  )
}

export default App
