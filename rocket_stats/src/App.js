import Header from './Components/Header';
import API from "./Components/Body/API";
import LaunchesPerYear from "./Components/Body/LaunchesPerYear";
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <API/>
        <LaunchesPerYear/>
    </div>
  );
}

export default App;
