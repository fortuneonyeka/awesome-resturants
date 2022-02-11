// Constants
const URL = '/v1/restaurants'
const GET_RESTAURANTS = '/redux/restaurants/restaurantsReducer/GET_RESTAURANTS'
const GET_RESTAURANTS_SUCCESS = '/redux/restaurants/restaurantsReducer/GET_RESTAURANTS_SUCCESS'
const GET_RESTAURANTS_FAIL = '/redux/restaurants/restaurantsReducer/GET_RESTAURANTS_FAIL'
const REMOVE_RESTAURANT = '/redux/restaurants/restaurantsReducer/REMOVE_RESTAURANT'
const ADD_RESTAURANT = '/redux/restaurants/restaurantsReducer/ADD_RESTAURANT'
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
        case ADD_RESTAURANT: return {...state, list: [...state.list, action.payload]}
        case REMOVE_RESTAURANT: return {...state, list: (
            state.list.filter(rest=>rest.id!== action.payload)
        )}
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

export const addRestaurant = (data) => async(dispatch) =>{
    fetch(URL, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })
      .then(response => response.json())
      .then(data =>{
          console.log(data)
      })
      dispatch({type: ADD_RESTAURANT, payload: data})
}

export const removeRestaurant = (id) => async(dispatch) =>{
    fetch(`${URL}/${id}.json`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
      })
      dispatch({type: REMOVE_RESTAURANT, payload: id})
}

export default restaurantsReducer;