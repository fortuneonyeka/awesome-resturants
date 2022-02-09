import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadReservation } from '../Redux/Reservations';
import NavigationPanel from './NavigationPanel';
import { NavLink } from "react-router-dom";

const Reservations = () => {
  // const bool = auth ? true : false;
  const dispatch = useDispatch();
  const {auth} = useSelector((state => state.usersReducer))
  const  reservations  = useSelector((state => state.reservationReducer)) || [];
  useEffect(() => {
    if (reservations.length === 0) dispatch(loadReservation(auth));
    return () => null
  },[])
  return(
    <div>
      <NavigationPanel auth={auth}/>
      <div>
        <h2>Restuarant</h2>
        <h2>Reservation Starts</h2>
        <h2>Reservation Ends</h2>
      </div>

      <div>
        {reservations.map((reservation) => (
          <ul key={reservation.reservation_id}>
            <li>Restaurant-Name</li>
            <li>{reservation.start_time}</li>
            <li>{reservation.end_time}</li>
            {' '}
            { reservation.reserved? (<button>Cancel</button>) : ""}
          </ul>
        ))}
      </div>
    </div>
  ) 
}

export default Reservations;
