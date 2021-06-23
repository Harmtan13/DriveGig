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

  const addShiftsToUser = (shiftData) => {
    const {trips, miles, time, ...completedShift } = shiftData;
    const user = db.collection('users').doc(currentUser.uid);
    const shiftCount = currentUser.totalShifts + 1;
    console.log(shiftCount);
    user.update({
      totalShifts: shiftCount
    })

    const saveShift = async () => {
      const shift = user.collection('shifts').doc(`shift-${completedShift.id}`);

      await shift.set({...completedShift}, {merge: true});

      trips.forEach((tripData) => {
        const {time, miles, ...extractedTrip} = tripData;

        const trip = shift.collection('trips').doc(`trip-${extractedTrip.id}`);
        trip.set({...extractedTrip})
        trip.collection('stamps').doc('distance').set({...miles});
        trip.collection('stamps').doc('time').set({...time});
      })

      shift.collection('stamps').doc('distance').set({...miles});
      shift.collection('stamps').doc('time').set({...time});
    } 

    !isLoading && saveShift();
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