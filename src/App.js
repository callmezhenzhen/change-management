import './App.css'
import AddChange from './components/addChange'
import { Link } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav style={
          {
            borderBottom: "solid 1px",
            paddingBottom: "1rem"
          }
        }>
          <Link to="/change-detail">go change detail</Link>
        </nav>
        <AddChange />
      </header>
    </div>
  );
}

export default App;
