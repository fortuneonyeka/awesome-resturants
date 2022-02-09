import React from "react";
import { useSelector } from "react-redux";
import NavigationPanel from "./NavigationPanel";
import { Link } from "react-router-dom";

const Home = (props) => {
    const {bool} = props

    const { list } = useSelector(state => state.restaurantsReducer)

    return(
        <div>
            <NavigationPanel auth={bool}/>
            <h1>OUR RESTAURANTS</h1>
            {list ?(
                list.map((restaurant)=>{
                return (<div key={restaurant.id}> 
                    <h2>{restaurant.name}</h2>
                    <Link 
                    to={`/${restaurant.id}`}>
                    See Restaurant
                    </Link>
                </div>)
               
            })
            ):(<div>LOADING...</div>)}
        </div>
    )
}

export default Home;