import React, {useState} from 'react'
import { 
  Route,
  Switch
} from 'react-router-dom'
import StartTrip from './02-StartTrip';
import Pickup from './03-Pickup';
import Departure from './04-Departure';
import EndTrip from './EndTrip';

export default function Trip({shift, setShift}) {
  const [trip, setTrip] = useState(JSON.parse(localStorage.getItem('trip')) || { orderProvider: '',
    odometer: [],
    driveTime: [],
    waitTime: [],
    pay: {
      provider: '',
      tip: '',
      total: ''
    }
  });

  const tripState = {
    trip, 
    setTrip
  }

  return (
    <>
      <Switch>
          <Route
            exact
            path='start-trip'
            render = {() => (
              <StartTrip
                {...tripState}
              />
            )}
          />
        
          <Route
            path='/start-trip/pickup'
            render = {() => (
              <Pickup
                {...tripState}
              />
            )}
          />

          <Route
            path='/shift/trip/departure'
            render = {() => (
              <Departure
                {...tripState}
              />
            )}
          />

          <Route
            path='/shift/trip/delivery'
            render = { () => (
              <EndTrip
                {...tripState}
              />
            )}
          />
      </Switch>
    </>
  )
}
