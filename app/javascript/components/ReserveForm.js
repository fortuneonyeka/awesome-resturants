/* eslint-disable camelcase */
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import reservations from '../components/Reservations'

const Form = styled.form`
  padding: 0.5rem;
  border-radius: 20px 0 20px 0;
  width: 100%;
  min-height: 20vh;
  background-color: #ffefd5;
  text-decoration: none;
  text-align: center !important;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;
const Wrapper = styled.div`
  display: flex;
  ${mobile({
    flexDirection: 'column',
  })};
  `;

const DateContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0.5rem;
`;

const Input = styled.input.attrs((props) => ({
  type: props.type,
  id: props.id,
  name: props.name,
  value: props.value,
  min: props.min,
  max: props.max,
}))`
  border-radius: 20px;
  width: 100%;
  padding: 0.5rem;
  `;

const Label = styled.label`
  font-family: 'Urbanist', 'Arial', sans-serif;
  color: #f6a40e;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  padding: 0.5rem;
  `;

const Filter = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  margin-top: 1rem;
`;

const FilterTitle = styled.span`
  font-family: 'Urbanist', 'Arial', sans-serif;
  color: #f6a40e;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  padding-left: 2rem;
  width: 100%;
`;

const SelectCity = styled.select`
    background-color: white;
    color: grey;
    height: 40px !important;
    border-radius: 20px;
    background-color: white;
    font-size: 16px;
`;

const SubmitButton = styled.button.attrs((props) => ({
  type: props.type,
}))`
  margin: 1rem 0 0.5rem 0;
  align-self: center;
  padding: 0.5rem;
  border-radius: 20px;
  width: 150px;
  background-color: #f6a40e;
  text-decoration: none;
  text-align: center;
  color: white;
  transition: all 0.5s ease-in-out;
  &:hover {
    color: black;
    background-color: #ffefd5;
    border: 1px solid #f6a40e;
  }`;


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
    const end_date = document.querySelector('#end').value;
    const data = {
      start_date,
      end_date,
      user_id,
      resturant_id,
    };
    dispatch(reservations(data));
    redirect('/reservation');
  };

  return (
    <>
      <Form onSubmit={(e) => handleSubmit(e)}>
        <Wrapper>
          <DateContainer>
            <Label htmlFor="start">Start Date :</Label>
            <Input
              type="date"
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
          <DateContainer>
            <Label htmlFor="start">End Date :</Label>
            <Input
              type="date"
              id="end"
              name="end_date"
              defaultValue={minDate}
              min={minDate}
              onChange={(e) => {
                const parseDate = new Date(e.target.value);
                parseDate.setDate(parseDate.getDate() - 1);
                const date = parseDate.toISOString().split('T')[0];
                setMaxDate(date);
              }}
              required
            />
          </DateContainer>
        </Wrapper>
        <SubmitButton type="submit">
          Reserve
        </SubmitButton>
      </Form>
    </>
  );
};

export default ReserveForm;