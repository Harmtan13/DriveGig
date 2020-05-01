import React, { useState } from 'react';
  import {
  BrowserRouter as Router, 
  Route,
  Switch 
  } from 'react-router-dom'
import {Link} from 'react-router-dom';
import styled from 'styled-components';

import createShift from './helpers/CreateShift';
import AppRouter from './AppRouter';
import Nav from './Nav';
import './App.css';

export default function App() {
  const [shift, setShift] = useState(JSON.parse(localStorage.getItem('shift')) || createShift());

  const shiftState = {
    shift, 
    setShift
  }

  return (
    <Router>
      <Nav/>
      <div className="container">
        <Switch>
          <Route exact path='/'>
            <ButtonWrapper className='wrapper'>
              <h1>Welcome to Drive-Gig</h1>

              <Link to='/start-shift'>
                <Button>
                  Start Shift
                </Button>
              </Link>

              <Link to='/gas'>
                <Button background="yellow" color='black'>
                  Gas Fillup
                </Button>
              </Link>

              <Link to='/statistics'>
                <Button>
                  Statistics
                </Button>
              </Link>
            </ButtonWrapper>
          </Route>

          <AppRouter {...shiftState}/>
        </Switch>
      </div>
    </Router>
  );
}

const ButtonWrapper = styled.div`
display: grid;
`

const Button = styled.button`
background: ${props => props.background || 'purple'};
color: ${props => props.color || 'white' };

font-size: 20px;
margin: 20px;
padding: 30px;
`