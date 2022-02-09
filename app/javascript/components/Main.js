// /* eslint-disable no-alert, no-console */
// import * as React from 'react';
// import {
//   useEffect,
// } from 'react';
// import {
//   Link,
//   useRouteMatch,
// } from 'react-router-dom';
// // import style from './carousel.css';
// import { Carousel } from 'react-responsive-carousel';


// // import style from './main.module.scss';

// const Main = () => {
//   // const {
//   //   data: restaurants,
//   //   error,
//   //   isLoading,
//   //   refetch,
//   // } = useGetRestaurantsQuery();

//   // useEffect(() => {
//   //   refetch();
//   // }, []);

//   // const { url } = useRouteMatch();

//   // if (isLoading) {
//   //   return <div>Loading...</div>;
//   // }
//   // if (error) {
//   //   return (
//   //     <div>
//   //       Oops, this error occured:
//   //       {error}
//   //     </div>
//   //   );
//   // }

//   // const backgroundStyling = (url) => (
//   //   {
//   //     background: `url('${url}')`,
//   //     backgroundSize: 'cover',
//   //     backgroundPosition: 'center',
//   //   }
//   // )

//   function restaurantList(restaurants) {
//     // eslint-disable-next-line no-nested-ternary
//     const divider = window.innerWidth < 1580 ? (window.innerWidth < 1150 ? 1 : 2) : 3;
//     const restaurantsBlockList = [];
//     let restaurantsBlock = [];
//     for (let i = 0; i < restaurants.length; i += 1) {
//       restaurantsBlock.push(
//         <div key={restaurants[i].id}>
//           <div
//             // style={backgroundStyling(restaurants[i])}
//             // className={style.restaurantImage}
//           />
//           <br />
//           <h2>{restaurants[i].name}</h2>
//           <br />
//           <p>
//             {restaurants[i].name}
//             {' '}
//             Best place to eat!!
//             {' '}
//             {restaurants[i].type}
//           </p>
//           <br />
//           <Link
//             key={restaurants[i].id}
//             href="/#"
//             to={`${url}restaurants/${restaurants[i].id}`}
//           >
//             See details
//           </Link>
//         </div>,
//       );
//       if ((i + 1) % divider === 0) {
//         restaurantsBlockList.push(restaurantsBlock);
//         restaurantsBlock = [];
//       }
//     }
//     if (restaurants.length > 0) {
//       restaurantsBlockList.push(restaurantsBlock);
//     }
//     const carouselBlocks = [];
//     restaurantsBlockList.forEach((block) => {
//       restaurantBlocks.push(
//         <div>{block}</div>,
//       );
//     });
//     return <Carousel 
//     // className={style.carousel}
//     >{carouselBlocks}</Carousel>;
//   }

//   return (
//     <div 
//     // className={style.container}
//     >
//       <h1>Restaurants</h1>
//       <p>Pick one of our Restaurants!</p>
//       <div>
//         {restaurantsList(restaurants)}
//       </div>
//     </div>
//   );
// };

// export default Main;

import React, { useEffect } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import LogIn from './login';
import SignUp from './signup';
import Reservations from './Reservations';
import { useDispatch, useSelector } from 'react-redux';
import { requestRestaurants } from "../Redux/restaurants/restaurantsReducer";
import Home from './Home';
import { getUserLoginSuccess } from '../Redux/users/usersReducer';


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
      {list && (list.map(restaurant =><Route key={restaurant.id} path={`/${restaurant.id}`} element = {<h1>{restaurant.name}</h1>}/>))}
    </Routes>
  </BrowserRouter>)
}



export default Main
