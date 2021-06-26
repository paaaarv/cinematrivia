
import './App.css';
import Tab from './components/Tab.js'
import Heading from './components/Heading.js'
import History from './components/History.js'
import Form from './components/Form.js'

function App() {
  return (
    <div className="App">
    <Heading/>
    <Tab attribute={"Search"} section={<Form/>}/>
    <Tab attribute={"History"} section = {<History/>}/>
    <Form/>
    </div>
  );
}

export default App;
