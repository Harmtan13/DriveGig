import React, { useState, useEffect } from 'react';
import {
  Route,
  Redirect,
  Switch,
  Link,
} from 'react-router-dom';
import { auth, db } from './Firebase';

import Gasform from './components/gas/GasForm';
import Stats from './components/stats/Stats';
import AuthRouter from './components/auth/AuthRouter';
import ShiftRouter from './components/shift/00-shiftRouter';
import Nav from './Nav';
import './App.css';

export default function App() {
  const [currentUser, setCurrentUser] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [stage, setStage] = useState(localStorage.getItem('stage') || '');

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        const userDetails = await db.collection('users').doc(user.uid).get();
        setCurrentUser({ ...user, ...userDetails.data() });
        setIsLoading(false);
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    localStorage.setItem('stage', stage);
  }, [stage]);

  const addShiftsToUser = (shifts) => {
    !isLoading && db.collection('users').doc(currentUser.uid).update({
      shifts
    })
  }

  const authState = {
    auth,
    db,
    setIsLoading,
  };

  const appState = {
    currentUser,
    setStage,
    stage,
  };

  console.log(!!currentUser);

  return (
    <div className = "container">
      <header>
        <h1><Link to = "/">DriveGig</Link></h1>
      </header>
      <Switch>
        {
          !isLoading
          && (
            <>
              <Route path = "/">
                <ShiftRouter 
                  {...appState}
                  addShiftsToUser = {addShiftsToUser}  
                />
              </Route>
              
              <Route path = "/account">
                <AuthRouter {...appState} {...authState} />
              </Route>

              <Route path = "/resume-shift">
                {stage ? <Redirect to = {stage} /> : <Redirect to = "/active-shift/start" />}
              </Route>

              <Route path = "/input-expenses">
                <Gasform />
              </Route>

              <Route path = "/statistics">
                <Stats />
              </Route>
            </>
          )
        }
      </Switch>
      <Nav />
    </div>
  );
}