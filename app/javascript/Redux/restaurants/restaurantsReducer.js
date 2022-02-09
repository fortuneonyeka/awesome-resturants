// Constants
const URL = '/v1/restaurants'
const GET_RESTAURANTS = '/redux/restaurants/restaurantsReducer/GET_RESTAURANTS'
const GET_RESTAURANTS_SUCCESS = '/redux/restaurants/restaurantsReducer/GET_RESTAURANTS_SUCCESS'
const GET_RESTAURANTS_FAIL = '/redux/restaurants/restaurantsReducer/GET_RESTAURANTS_FAIL'

// Actions

const getRestaurants = () => ({
    type: GET_RESTAURANTS
})

const getRestaurantsSuccess = (payload) => ({
    type: GET_RESTAURANTS_SUCCESS,
    payload
})

const getRestaurantsFail= (payload) => ({
    type: GET_RESTAURANTS_FAIL,
    payload
})

const restaurantsReducer = (state = {}, action)=>{
    switch(action.type){
        case GET_RESTAURANTS: return {...state, loading:true}
        case GET_RESTAURANTS_SUCCESS: return {...state, loading:false, list: action.payload}
        case GET_RESTAURANTS_FAIL: return {...state, loading:false, error: action.payload}
        default: return state;
    }
}

export const requestRestaurants = () => async(dispatch) =>{
    dispatch(getRestaurants())
    fetch(URL, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      .then(response => response.json())
      .then(data =>{
          console.log(data)
         dispatch(getRestaurantsSuccess(data.restaurants))
      })
      .catch(e => dispatch(getRestaurantsFail(e)))
}

export default restaurantsReducer;