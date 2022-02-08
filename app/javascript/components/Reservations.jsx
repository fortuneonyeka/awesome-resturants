import React from 'react';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { loadReservation } from '../redux/Missions/missions';

const Reservations = () => {
  const dispatch = useDispatch();
  const reservations = useSelector((state => state.reservationReducer));
  useEffect(() => {
    if (reservations.length === 0) dispatch(loadReservation());
    return () => null
  },[])
  return(
    <container>
      <div>
        <h2>Reservation</h2>
        <h2>Reservation Starts</h2>
        <h2>Reservation Ends</h2>
      </div>

      <div>
        {Reservations.map((reservation) => (
          <ul key={reservation.reservation_id}>
            <li>{reservation.name}</li>
            <li>{reservation.start_time}</li>
            <li>{reservation.end_time}</li>
          </ul>
        ))}
      </div>
    </container>
  ) 
}

export default Reservations;
