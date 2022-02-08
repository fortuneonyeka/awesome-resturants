import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import LogIn from './components/login';
import SignUp from './components/signup';
import Reservations from './Reservations'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <NavLink to='/login'>Log In</NavLink>
          <NavLink to='/signup'>Sign Up</NavLink>
          <NavLink to='/reservations'>Sign Up</NavLink>
        </nav>
        <Routes>
          <Route path='/login' element = {<LogIn />}/>
          <Route path='/signup' element = {<SignUp />}/>
          <Route path='/reservations' element = {<Reservations />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;