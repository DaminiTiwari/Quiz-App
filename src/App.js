import React from 'react';
import Home from './components/Home';
import Question from './components/Question';
import './styles/app.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="app">
    <Router >
 <Switch>

 <Route exact path='/' component={Home} />
 <Route path='/question' component={Question} />

 </Switch>
 </Router>

    </div>
  );
}

export default App;
