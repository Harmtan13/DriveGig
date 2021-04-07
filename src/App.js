import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from 'react-router-dom';
import styled from 'styled-components';

import { createShift } from './helpers/CreationHelpers';
import Signup from './components/auth/Signup';
import AppRouter from './AppRouter';
import Nav from './Nav';
import './App.css';

export default function App() {
  const [shift, setShift] = useState(JSON.parse(localStorage.getItem('shift')) || createShift());
  const [shifts, setShifts] = useState(JSON.parse(localStorage.getItem('shifts')) || []);

  const shiftState = {
    shift,
    setShift,
  };

  const eraseLocalStorage = () => {
    localStorage.clear();
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
      <Nav />
      <div className = "container">
        <Switch>
          <Route exact path = "/">
            <ButtonWrapper className = "wrapper">
              <Signup />
            </ButtonWrapper>
          </Route>

          <AppRouter {...shiftState} />
        </Switch>
      </div>
    </Router>
  );
}

const ButtonWrapper = styled.div`
display: grid;
`;

const Button = styled.button`
background: ${props => props.background || 'purple'};
color: ${props => props.color || 'white'};

font-size: 20px;
margin: 20px;
padding: 30px;
`;

{ /* <h1>Welcome to Drive-Gig</h1>

<div>
  <button onClick = {eraseLocalStorage} className = "erase">
    Erase Everything
  </button>
</div>

<Link to = "/start-shift">
  <Button>
    Start Shift
  </Button>
</Link>

<Link to = "/gas">
  <Button background = "yellow" color = "black">
    Gas Fillup
  </Button>
</Link>

<Link to = "/statistics">
  <Button>
    Statistics
  </Button>
</Link> */ }