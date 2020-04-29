import React, {useState} from 'react'
import { 
  Route,
  Switch
} from 'react-router-dom'
import StartTrip from './StartTrip';
import Pickup from './Pickup';
import Departure from './Departure';
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
            path='/shift/trip'
            render = {() => (
              <StartTrip
                {...tripState}
              />
            )}
          />
        
          <Route
            path='/shift/trip/pickup'
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
