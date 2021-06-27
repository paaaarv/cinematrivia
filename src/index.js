import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heading from './components/Heading.js'
import History from './components/History.js'
import Form from './components/Form.js'
import ContentContainer from './components/ContentContainer.js'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

ReactDOM.render((
    <Router>
        <div>
            <Route path="/" component={Heading}/>
            <Route exact path="/search" component={Form}/>
            <Route exact path="/history" component={History}/>
            <Route exact path="/trivia" component={ContentContainer}/>
        </div>
    </Router>
),
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
