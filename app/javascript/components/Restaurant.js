import React from 'react';
import './restaurant.css';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import NavigationPanel from './NavigationPanel';

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
        {auth && <Link to="/reserve" 
        onClick={e=>{
          e.preventDefault
          sessionStorage.setItem('restaurant', JSON.stringify(restaurant))
        }}>
          Make a reservation
          </Link> } 
        </div>        
    </div>
  )
}


export default Restaurant;
