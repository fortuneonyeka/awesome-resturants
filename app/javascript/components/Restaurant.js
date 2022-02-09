import React from 'react';
import './restaurant.css';
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";




const Restaurant = (props) => {
  // const resturant = "Tantalizer"
  // const start_time = "10/02/2022"
  // const end_time = "11/02/2022"
  const {restaurant_id} = props
  const { list } = useSelector(state =>state.restaurantsReducer)
  const restaurant = list.filter(rest=>rest.id === restaurant_id)[0]
  console.log(restaurant);
  console.log(restaurant_id);

  return (
  
    <div>
      <NavLink to='/'>Restaurants</NavLink>
      <div className="rest-conatiner">
        <div className="rest-image">
            <img src="https://img.theculturetrip.com/wp-content/uploads/2018/03/1950222.jpg" alt="Restaurant 1 Image" />
        </div>
        <div className="rest-details">
          <h3 style={{marginLeft:"50px", marginBottom: "20px"}}>{restaurant.name}</h3>
            <ul className="rest-ul">
              <li className="rest-item">Description: {restaurant.description}</li>
            </ul>
            <p>{restaurant.rating}</p>
        </div>
        </div>
        
    </div>
  )
}

export default Restaurant;
