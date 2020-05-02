import React, {useState} from 'react'
import { 
  Route,
  Switch
} from 'react-router-dom';
import StartTrip from './02-StartTrip';
import Pickup from './03-Pickup';
import Departure from './04-Departure';
import EndTrip from './06-EndTrip';

export default function TripRouter({shift, setShift}) {
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
      <Route exact path='/shift/start-trip'>
        <StartTrip {...tripState}/>
      </Route>

      <Route path='/shift/pickup'>
        <Pickup {...tripState} />
      </Route>

      <Route path='/shift/departure'>
        <Departure {...tripState} />
      </Route>
    
      <Route path='/shift/delivery'>
        <EndTrip {...tripState} />
      </Route>
    </>
  )
}
