import React from "react";
import { useSelector } from "react-redux";
import NavigationPanel from "./NavigationPanel";
import { Link } from "react-router-dom";

const Home = (props) => {
    const {bool} = props

    const { list } = useSelector(state => state.restaurantsReducer)

    return(
        <div className="container">
            <NavigationPanel auth={bool}/>
            <div className="inner-container">
                <h1 className="res-head">OUR RESTAURANTS</h1>
                <div className="carousel">
                    {list ?(
                    list.map((restaurant)=>{
                    return (<div key={restaurant.id} className="rest-card"> 
                        <img className="tinypic" src={restaurant.image} alt="Restaurant 1 Image" />
                        <div className="card-inner">
                            <h2 className="name">{restaurant.name}</h2>
                            <Link className="see-res"
                            to={`/${restaurant.id}`}>
                            See Restaurant
                            </Link>
                        </div>
                    </div>)
                
                })
                ):(<div>LOADING...</div>)}
                </div>
            </div>
        </div>
    )
}

export default Home;