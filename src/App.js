import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import styled from 'styled-components';

import AuthRouter from './components/auth/AuthRouter';
import ShiftRouter from './components/shift/shiftRouter';
import Nav from './Nav';
import './App.css';

export default function App() {
  const [currentUser, setCurrentUser] = useState();

  const appState = {
    currentUser,
    setCurrentUser,
  };

  return (
    <Router>
      {/* <Link to = "/"><h1>DriveGig</h1></Link> */}

      <div className = "container">
        <Switch>
          <Route path = "/">
            <AuthRouter {...appState} />
            <ShiftRouter {...appState} />
          </Route>
        </Switch>
      </div>
      <Nav />
    </Router>
  );
}