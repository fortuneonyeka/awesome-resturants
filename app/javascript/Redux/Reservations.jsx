const URL = 'v1/reservations';

//Action types
const CREATE_RESERVATION = 'LOAD_RESERVATION'
const LOAD_RESERVATION = 'LOAD_RESERVATION'
const CANCEL_RESERVATION = 'LOAD_RESERVATION'

const initialState = {
  Name: '',
  start_time: '',
  end_time: ''
}

//reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case  LOAD_RESERVATION:
      return action.state;
      case CREATE_RESERVATION: {
        const newState = state.map((reservation) => {
          if (reservation.reservation_id !== action.payload) return reservation;
          return { ...reservation, reserved: true };
        });
        return newState;
  }
    case CANCEL_RESERVATION: {
      const newState = state.map((reservation) => {
        if (reservation.reservation_id !== action.payload) return reservation;
        return { ... reservation, reserved: false}
      })
      return newState
    }
    default:
      return state
  }
}

//actions creators
export const loadReservation = () => async(dispatch) =>{
  const response = fetch(URL)
  const data = await response.json()
  const state = data.map((reservation) => ({
    name: reservation.name,
    start_time: reservation.start_time,
    end_time: reservation.end_time,
  }));
  dispatch({ type: LOAD, state });
}

export const CreateReservation = (payload) => ({
  type: CREATE_RESERVATION,
  payload
});

export const cancelReservation = (payload) => ({
  type: CANCEL_RESERVATION,
  payload
})
