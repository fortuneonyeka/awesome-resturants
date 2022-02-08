import React, {useState} from 'react';
import './form.css';

const LogIn = () => {
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleName = (e) => {
        e.stopPropagation();
        setName(e.target.value);
    }

    const handlePass= (e) => {
        e.stopPropagation();
        setPass(e.target.value);
    }  

    const handleSubmit = (e) => {
        // Replace by proper API requests
        e.preventDefault()

        const user = {
            name: name,
            password_digest: pass
        }
        console.log(user);
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