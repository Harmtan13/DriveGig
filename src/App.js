import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import styled from 'styled-components';

import { createShift } from './helpers/CreationHelpers';
import AuthRouter from './components/auth/AuthRouter';
import AppRouter from './AppRouter';
import Nav from './Nav';
import './App.css';

export default function App() {
  const [currentUser, setCurrentUser] = useState();
  const [shift, setShift] = useState(JSON.parse(localStorage.getItem('shift')) || createShift());
  const [shifts, setShifts] = useState(JSON.parse(localStorage.getItem('shifts')) || []);

  const shiftState = {
    shift,
    setShift,
    currentUser,
    setCurrentUser,
  };

  useEffect(() => {
    if (shift.completed) {
      localStorage.clear();
      localStorage.setItem('shifts', JSON.stringify([...shifts, shift]));
      setShifts([...shifts, shift]);
    }
  }, [shift]);

  return (
    <Router>
      {/* <Link to = "/"><h1>DriveGig</h1></Link> */}

      <div className = "container">
        <Switch>
          <Route path = "/">
            <AuthRouter {...shiftState} />
            <AppRouter {...shiftState} />
          </Route>
        </Switch>
      </div>
      <Nav />
    </Router>
  );
}


const Button = styled.button`
background: ${props => props.background || 'purple'};
color: ${props => props.color || 'white'};

font-size: 20px;
margin: 20px;
padding: 30px;
`;