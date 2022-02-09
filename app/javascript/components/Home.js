import React from "react";
import { useDispatch, useSelector } from "react-redux";
import NavigationPanel from "./NavigationPanel";
import { Link } from "react-router-dom";

const Home = (props) => {
    const {bool} = props
    const dispatch = useDispatch();

    const { list } = useSelector(state => state.restaurantsReducer)

    return(
        <div>
            <NavigationPanel auth={bool}/>
            <h1>OUR RESTAURANTS</h1>
            {list ?(
                list.map((restaurant)=><Link to={`/${restaurant.id}`} key={restaurant.id}>{restaurant.name}</Link>)
            ):(<div>LOADING...</div>)}
        </div>
    )
}

export default Home;