import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { requestLogin } from '../Redux/users/usersReducer';
import { useSelector } from 'react-redux';
import './form.css';

const LogIn = () => {
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const { auth } = useSelector(store => store.usersReducer);
    if(auth){window.location.href = "/";}

    const dispatch = useDispatch();
    const handleName = (e) => {
        e.stopPropagation();
        setName(e.target.value);
    }

    const handlePass= (e) => {
        e.stopPropagation();
        setPass(e.target.value);
    }  

    const handleSubmit = (e) => {
        e.preventDefault()

        const user = {
            name: name,
            password_digest: pass
        }
        
        dispatch(requestLogin(user))

    }

    return(
        <form onSubmit={e=>handleSubmit(e)}>
            <div id='form-body'>
                <label >Name:</label>
                <input type="text" id="Name" name="Name" onChange={e=>handleName(e)} minLength={2} maxLength={20}/>

                <label >Password:</label>
                <input type="password" id="password" name="password" onChange={e=>handlePass(e)} minLength={4}/>

                <button type='submit'>Log In</button>
            </div>
        </form>
    )
}

export default LogIn;