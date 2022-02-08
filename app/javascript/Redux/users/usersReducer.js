// Constants
const POST_CREATE_USER = 'redux/users/usersReducer/POST_CREATE_USER'
const POST_CREATE_USER_SUCCESS = 'redux/users/usersReducer/POST_CREATE_USER_SUCCESS'
const POST_CREATE_USER_FAIL = 'redux/users/usersReducer/POST_CREATE_USER_FAIL'

const GET_USER_LOGIN = 'redux/users/usersReducer/GET_USER_LOGIN'
const GET_USER_LOGIN_SUCCESS = 'redux/users/usersReducer/GET_USER_LOGIN_SUCCESS'
const GET_USER_LOGIN_FAIL = 'redux/users/usersReducer/GET_USER_LOGIN_FAIL'

// Actions
export const createUser = () => ({
    type: POST_CREATE_USER
})

export const createUserSuccess = (message) => ({
    type: POST_CREATE_USER_SUCCESS,
    message
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

export const getUserLoginSuccess = (message) => ({
    type: GET_USER_LOGIN,
    message
})



// Reducer

const usersReducer = (state = {}, action)=> {
    switch(action.type){
        case POST_CREATE_USER: return { ...state, creating:true }
        case POST_CREATE_USER_SUCCESS: return { ...state, creating: false, message: action.message }
        case POST_CREATE_USER: return { ...state, creating: false, error: action.error }
        case GET_USER_LOGIN: return { ...state, logging:true }
        case GET_USER_LOGIN_FAIL: return {...state, logging: false, error: action.error}
        case GET_USER_LOGIN: return {...state, logging:false, message: action.message}
        default: return state
    }
}

export default usersReducer