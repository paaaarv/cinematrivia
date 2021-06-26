
import './App.css';
import Tab from './components/Tab.js'
import Heading from './components/Heading.js'
import Form from './components/Form.js'
import History from './components/History.js'

function App() {
  return (
    <div className="App">
    <Heading/>
    <Tab attribute={"Search"}/>
    <Tab attribute={"History"}/>
    </div>
  );
}

export default App;
