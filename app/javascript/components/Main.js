import React, { useEffect } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import LogIn from './login';
import SignUp from './signup';
import Reservations from './Reservations';
import { useDispatch, useSelector } from 'react-redux';
import { requestRestaurants } from "../Redux/restaurants/restaurantsReducer";
import Home from './Home';
import { getUserLoginSuccess } from '../Redux/users/usersReducer';
import Restaurant from "./Restaurant";
import ReserveForm from './ReserveForm';


const Main = () => {
  const { auth } = useSelector(store => store.usersReducer)
  const bool = auth ? true : false;
  const dispatch = useDispatch()

  useEffect(()=>{
    const auth = sessionStorage.getItem('auth')
    if(auth){dispatch(getUserLoginSuccess('Logged In',auth))}
    dispatch(requestRestaurants())
  },[])

  const { list } = useSelector(state =>state.restaurantsReducer)

  return(
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element = {<Home bool={bool} />}/>
      <Route path='/login' element = {<LogIn />}/>
      <Route path='/signup' element = {<SignUp />}/>
      {auth && <Route path='/reservations' element = {<Reservations />}/>}
      {list && (list.map(restaurant =><Route key={restaurant.id} path={`/${restaurant.id}`} element = {<Restaurant restaurant_id={restaurant.id} auth={auth}/>}/>))}
      <Route path='/reserve' element={
      <ReserveForm restaurant={JSON.parse(sessionStorage.getItem('restaurant'))} />
      }/>
    </Routes>
  </BrowserRouter>)
}



export default Main
