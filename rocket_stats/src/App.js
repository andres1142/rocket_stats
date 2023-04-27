import Header from './Components/Header';
import API from "./Components/Body/API";
import LauchesPerYear from "./Components/Body/LauchesPerYear";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <API/>
        <LauchesPerYear/>
    </div>
  );
}

export default App;
