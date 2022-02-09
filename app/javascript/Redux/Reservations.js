const URL = '/v1/reservations';

//Action types
const CREATE_RESERVATION = 'LOAD_RESERVATION'
const LOAD_RESERVATION = 'LOAD_RESERVATION'
const CANCEL_RESERVATION = 'LOAD_RESERVATION'

const initialState = []
  

//reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case  LOAD_RESERVATION:
      return action.state;
      case CREATE_RESERVATION: {
        const newState = [...state, action.payload]
        return newState;
  }
    case CANCEL_RESERVATION: {
      const newState = state.filter(reservation =>{reservation.id !== action.payload}) 
        return newState
    }
    default:
      return state
  }
}

//actions creators
export const loadReservation = (auth) => async(dispatch) =>{
  const response = await fetch(URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${auth}`,
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
  })
  
    const data = await response.json()
    console.log(data);
    const state = data.reservations
    dispatch({ type: LOAD_RESERVATION, state });
}


export const CreateReservation = (payload) => ({
  type: CREATE_RESERVATION,
  payload
});

export const cancelReservation = (payload) => ({
  type: CANCEL_RESERVATION,
  payload
})
