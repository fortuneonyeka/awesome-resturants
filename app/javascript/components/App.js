import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import LogIn from './login';
import SignUp from './signup';
import Reservations from './Reservations'
import store from '../Redux/configureStore';
import Restaurant from "./Restaurant";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <nav>
            <NavLink to='/login'>Log In</NavLink>
            <NavLink to='/signup'>Sign Up</NavLink>
            <NavLink to='/reservations'>Reservations</NavLink>
          </nav>
          <Routes>
            <Route path='/login' element = {<LogIn />}/>
            <Route path='/signup' element = {<SignUp />}/>
            <Route path='/reservations' element = {<Reservations />}/>
          </Routes>
          <Restaurant />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;