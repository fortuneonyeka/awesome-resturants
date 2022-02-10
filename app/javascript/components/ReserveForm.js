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
      <form onSubmit={(e) => handleSubmit(e)}>
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
        <button type={submit}>
          Reserve
        </button>
      </form>
    </>
  );
};

export default ReserveForm;