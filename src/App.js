import React from 'react';
import {
  BrowserRouter as Router, 
  Route,
  Switch
} from 'react-router-dom'
import './App.css';
import {Link} from 'react-router-dom';

import Home from './components/Home';
import Shift from './components/shift/Shift';
import Gasform from './components/gas/GasForm';
import Stats from './components/stats/Stats';

function App() {
  return (
    <>
    <Router>
      <header>
        <Link to='/'>
          <h1>DriveGig</h1>
        </Link>
      </header>

      <div className='container'>
        <Switch>
          <Route exact path='/' component = {Home}/>
          <Route path='/shift' component={Shift}></Route>
          <Route path='/gas' component={Gasform}></Route>
          <Route path='/statistics' component={Stats}></Route>
        </Switch>
      </div>
    </Router>
    </>
  );
}


export default App;