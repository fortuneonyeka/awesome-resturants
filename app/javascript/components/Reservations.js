import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { cancelReservation, loadReservation } from '../Redux/Reservations';
import NavigationPanel from './NavigationPanel';
import { NavLink } from "react-router-dom";

const Reservations = () => {
  // const bool = auth ? true : false;
  const dispatch = useDispatch();
  const redirect = useNavigate()
  const {auth} = useSelector((state => state.usersReducer))
  const  reservations  = useSelector((state => state.reservationReducer)) || [];
  const { list } = useSelector(state =>state.restaurantsReducer)
  
  useEffect(() => {
    if (reservations.length === 0) dispatch(loadReservation(auth));
    return () => null
  },[])

  const handleCancel = (e, id) =>{
    e.preventDefault()
    dispatch(cancelReservation(id, auth))
    window.location.reload()
  }

  return(
    <div className='container'>
      <NavigationPanel auth={auth}/>
      <div className='inner-container'>
        <ul>
          {reservations.map((reservation) => (
              <li className="reserve-list" key={reservation.id}>
                <div className="reservation-details">
                  <h2 style={{padding:'20px'}}>{list.filter(rest=>rest.id === reservation.resturant_id)[0].name}</h2>
                  <p style={{padding:'20px',fontSize:'20px'}}>Reservation time:{`${new Date(reservation.start_time)}`}</p>
                  <p style={{padding:'20px',fontSize:'20px'}}>Estimated end time:{`${new Date(reservation.end_time)}`}</p>
                  <button className="cancel-btn" type='button' onClick={e=>handleCancel(e,reservation.id)}>Cancel Reservation</button>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </div>
  ) 
}

export default Reservations;
