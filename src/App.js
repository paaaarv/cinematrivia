
import './App.css';
import Tab from './components/Tab.js'
import Heading from './components/Heading.js'
import History from './components/History.js'
import Form from './components/Form.js'
import ContentContainer from './components/ContentContainer.js'
import {BrowserRouter as Router, Route} from 'react-router-dom'

function App() {
  return (
      <Router>
          <div>
              <Route path="/" component={Heading}/>
              <Route exact path="/search" component={Form}/>
              <Route exact path="/history" component={History}/>
              <Route path='/trivia/:movieId' component={ContentContainer}/>
          </div>
      </Router>
  );
}

export default App;
