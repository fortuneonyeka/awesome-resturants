import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { createUserFail, requestSignUp } from '../Redux/users/usersReducer';
import './styles/form.css';

const SignUp = () => {
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [confirm, setConfirm] = useState('');

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
    
    const handleConfirm= (e) => {
        e.stopPropagation();
        setConfirm(e.target.value);
    }   

    const handleSubmit = (e) => {
        e.preventDefault()
        if(confirm !== pass){
            dispatch(createUserFail("Password Confirmation doesn't match password"));return null;
        }

        const user = {
            name: name,
            password_digest: pass
        }

        dispatch(requestSignUp(user))
    }

    return(
        <form onSubmit={e=>handleSubmit(e)}>
            <div id='form-body'>
                <label >Name:</label>
                <input type="text" id="Name" name="Name" onChange={e=>handleName(e)} minLength={2} maxLength={20}/>

                <label >Password:</label>
                <input type="password" id="password" name="password" onChange={e=>handlePass(e)} minLength={4}/>

                <label >Confirm Password:</label>
                <input type="password" id="confirm" name="confirm" onChange={e=>handleConfirm(e)}/>

                <button type='submit'>Sign Up</button>
            </div>
            <div>
                <Link to='/login'>Or Log in instead</Link>
                <Link to='/'>Back</Link>
            </div>
            
        </form>
    )
}

export default SignUp;