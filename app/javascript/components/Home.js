import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { requestRestaurants } from "../Redux/restaurants/restaurantsReducer";

const Home = () => {

    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(requestRestaurants())
    },[]);

    const { list } = useSelector(state => state.restaurantsReducer)

    return(
        <div>
            <h1>OUR RESTAURANTS</h1>
            {list ?(
                list.map((restaurant)=><div key={restaurant.id}>{restaurant.name}</div>)
            ):(<div>LOADING...</div>)}
        </div>
    )
}

export default Home;