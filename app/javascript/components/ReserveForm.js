/* eslint-disable camelcase */
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import reservations from '../components/Reservations'

const ReserveForm = () => {
  const [minDate, setMinDate] = useState(new Date().toISOString().split('T')[0]);
  const [maxDate, setMaxDate] = useState(new Date());
  const startDate = new Date().toISOString().split('T')[0];

  const dispatch = useDispatch();
  const redirect = useNavigate();
  const { resturant_id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    const select = document.querySelector('select').value;
    const start_date = document.querySelector('#start').value;
    const data = {
      start_date,
      resturant_id,
    };
    dispatch(reservations(data));
    redirect('/reservation');
  };

  return (
    <>
    <div className="container">
    <h1 className="form-title">BOOK A RESTAURANT HERE TODAY</h1>
    <div className="baar" />
            <p className="description">
              Welcome to Awesome Restaurant,with us be rest assured to book the best restaurant for your "DINNER, COFFEE CHAT, MEET UP and so on". Reservation is just a click away😉👍.
            </p>
      <form className="reserve-form" onSubmit={(e) => handleSubmit(e)}>
      <div className="reserve-wrapper">
                <div className="reserve-date">
        <Wrapper>
          <DateContainer>
            <Label htmlFor="start">Start Date :</Label>
            <Input
              type="datetime"
              id="start"
              name="start_date"
              defaultValue={startDate}
              min={startDate}
              max={maxDate}
              onChange={(e) => {
                const parseDate = new Date(e.target.value);
                parseDate.setDate(parseDate.getDate() + 1);
                const date = parseDate.toISOString().split('T')[0];
                setMinDate(date);
              }}
              required
            />
          </DateContainer>
          
        </Wrapper>
        </div>
        </div>
        <div className="reserve-btn">
        <button className="btn" type={submit}>
          Reserve
        </button>
        </div>
      </form>
      </div>
    </>
  );
};

export default ReserveForm;