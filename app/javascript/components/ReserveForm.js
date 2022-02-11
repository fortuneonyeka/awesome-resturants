/* eslint-disable camelcase */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { addReservation } from '../Redux/Reservations';
import './styles/form.css'

const ReserveForm = (props) => {

  const [date, setDate] = useState(new Date());

  const { restaurant } = props

  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  var hh = today.getHours();
  var min = today.getMinutes();
  if(dd<10){
    dd='0'+dd
  } 
  if(mm<10){
    mm='0'+mm
  }
  if(hh<10){
    hh='0'+hh
  }
  if(min<10){
    min='0'+min
  }
  today = yyyy+'-'+mm+'-'+dd+'T'+hh+':'+min;

  const dispatch = useDispatch();
  const redirect = useNavigate();

  const handleChange = (e) => {
    e.stopPropagation()
    setDate(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      start_time: new Date(Date.parse(date)),
      end_time: new Date(Date.parse(date)+3600000),
      resturant_id: restaurant.id,
    };

    dispatch(addReservation(data, sessionStorage.getItem('auth')));
    redirect('/reservations')
  };

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <h2>Make a Reservation for {restaurant.name}</h2>
        <div id='form-body'>

            <label htmlFor="start">Start Date :</label>
            <input className=''
            onChange={
              e=>handleChange(e)}
            type="datetime-local" id="start"
            min={today}
            name="start"/>

          <button type='submit'>
            Reserve
          </button>

        </div>
        <Link className='link' to={`/${restaurant.id}`}><p className='link'>Back</p></Link>
      </form>
    </>
  );
};

export default ReserveForm;