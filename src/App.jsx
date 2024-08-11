import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

//component = html + css + js
const MyComponent = () => {
  return (
    <div>Khoi Ngo dang hoc reacjs for client mindset</div>
  );
}

const App = () => {
  const [count, setCount] = useState(0);

  const hello = () => {
    console.log(`Arrow function in an arrow function`);
  }
  hello();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Test change something in the code - Hello world</h1>
      <div>
        <MyComponent />
      </div>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
