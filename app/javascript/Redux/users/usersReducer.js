import { useSelector } from "react-redux";

// Constants
const LOGIN_URL = 'v1/auth/login.json';
const SIGNUP_URL = 'v1/signup.json';

const POST_CREATE_USER = 'redux/users/usersReducer/POST_CREATE_USER'
const POST_CREATE_USER_SUCCESS = 'redux/users/usersReducer/POST_CREATE_USER_SUCCESS'
const POST_CREATE_USER_FAIL = 'redux/users/usersReducer/POST_CREATE_USER_FAIL'

const GET_USER_LOGIN = 'redux/users/usersReducer/GET_USER_LOGIN'
const GET_USER_LOGIN_SUCCESS = 'redux/users/usersReducer/GET_USER_LOGIN_SUCCESS'
const GET_USER_LOGIN_FAIL = 'redux/users/usersReducer/GET_USER_LOGIN_FAIL'

const LOGOUT = 'redux/users/usersReducer/LOGOUT'

// Actions
export const createUser = () => ({
    type: POST_CREATE_USER
})

export const createUserSuccess = (message, auth) => ({
    type: POST_CREATE_USER_SUCCESS,
    message,
    auth
})

export const createUserFail= (error) => ({
    type: POST_CREATE_USER_FAIL,
    error
})

export const getUserLogin = () => ({
    type: GET_USER_LOGIN
})

export const getUserLoginFail = (error) => ({
    type: GET_USER_LOGIN_FAIL,
    error
})

export const getUserLoginSuccess = (message,auth) => ({
    type: GET_USER_LOGIN_SUCCESS,
    message,
    auth
})

export const logOut = () => ({
    type: LOGOUT
})

// Reducer

const usersReducer = (state = {}, action)=> {
    switch(action.type){
        case POST_CREATE_USER: return { ...state, creating:true }
        case POST_CREATE_USER_SUCCESS: return { ...state, creating: false, message: action.message, auth: action.auth, error: undefined }
        case POST_CREATE_USER_FAIL: return { ...state, creating: false, error: action.error }
        case GET_USER_LOGIN: return { ...state, logging:true }
        case GET_USER_LOGIN_FAIL: return {...state, logging: false, error: action.error}
        case GET_USER_LOGIN_SUCCESS: return {...state, logging:false, message: action.message, auth: action.auth, error: undefined}
        case LOGOUT: return {...state, auth: undefined}
        default: return state
    }
}

export default usersReducer

// Action Creators

export const requestLogin = (user) => async(dispatch) =>{
    dispatch(getUserLogin())

    fetch(LOGIN_URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({user: user})
    })
    .then(response => response.json())
    .then(data =>{
       dispatch(getUserLoginSuccess(data.message, data['auth_token']))
    })
    .catch(e => dispatch(getUserLoginFail(e)))
  }

export const requestSignUp = (user) => async(dispatch) =>{
dispatch(createUser())

    fetch(SIGNUP_URL, {
        method: 'POST',
        headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({user: user})
    })
    .then(response => response.json())
    .then(data =>{
        if(data.error){dispatch(createUserFail(data.error))}
        else{dispatch(createUserSuccess(data.message, data['auth_token']))}
    })
}