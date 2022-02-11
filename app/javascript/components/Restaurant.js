import React from 'react';
import './styles/restaurant.css';
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import NavigationPanel from './NavigationPanel';
import './styles/restaurant.css'

const Restaurant = (props) => {

  const {restaurant_id, auth} = props
  const { list } = useSelector(state =>state.restaurantsReducer)
  const restaurant = list.filter(rest=>rest.id === restaurant_id)[0]
  
  return (
  
    <div className='container'>
      <NavigationPanel auth={auth}/>
      <div className="inner-container">
          <div className='restaurant'>
            <div className="rest-image">
                <img src={restaurant.image} alt="Restaurant Image" />
            </div>
            <div className="rest-details">
              <h2 style={{marginLeft:"50px", marginBottom: "20px"}}>{restaurant.name}</h2>
                <ul className="rest-ul">
                  <li className="rest-item">Description: {restaurant.description}</li>
                  <li className="rest-item">Location: {restaurant.location}</li>
                  <li className="rest-item">Rating: {restaurant.rating}/5</li>
                </ul>
            </div>
          </div>
        {auth && <NavLink to="/reserve" style={({ isActive }) =>
    isActive
      ? {
          color: 'green',
          background: '#7600dc',
        }
      : { color: '#545e6f',background: '#fff' }
  }
        onClick={e=>{
          e.preventDefault
          sessionStorage.setItem('restaurant', JSON.stringify(restaurant))
        }}>
          <button className="reserve">Reserve A Table</button>
          </NavLink> } 
        </div>        
    </div>
  )
}


export default Restaurant;
