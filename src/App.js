// import logo from './logo.svg';
import './App.css';
import TaskList from './components/taskList'
import Author from './components/author'
import Clock from './components/clock';
import Calculator from './components/calculator'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <TaskList />
        <Author name="杜东振" />
        <Clock />
        <Calculator />
      </header>
    </div>
  );
}

export default App;
