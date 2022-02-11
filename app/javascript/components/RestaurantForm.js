import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addRestaurant } from "../Redux/restaurants/restaurantsReducer";
import './styles/form.css'
import './styles/restaurant.css'

const RestaurantForm = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(1)
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')
    const redirect = useNavigate()
    const dispatch = useDispatch()
    const handleChange = (e) =>{
        e.stopPropagation()
        switch(e.target.id){
            case 'name': setName(e.target.value)
            case 'description': setDescription(e.target.value)
            case 'rating': setRating(e.target.value)
            case 'location': setLocation(e.target.value)
            case 'image': setImage(e.target.value)
            default: return
        }
    }
    const handleSubmit=(e)=>{
        e.preventDefault()

        const data = {
            name,
            description,
            rating,
            location,
            image
        }

        dispatch(addRestaurant(data))
        redirect('/')
    }

    return(
    <div className="container">
        <form className="restaurant-form" onSubmit={e=>handleSubmit(e)}>
            <h2>Add your Restaurant</h2>
            <div id="add-form">
            <label htmlFor="name">Name</label>
            <input type='text' id="name" name='name' placeholder="Enter your Restaurnat name" onChange={e=>handleChange(e)}/>

            <label htmlFor="description">Description</label>
            <textarea name="description" maxLength={500} id="description" onChange={e=>handleChange(e)} placeholder='Tell us about your restaurant'/>

            <label htmlFor="location">Address</label>
            <input type='text' id="location" name='location' placeholder="Enter your business location" onChange={e=>handleChange(e)}/>

            <label htmlFor="rating">Rating</label>
            <input type='number' id="rating" name='rating' min={1} max={5} onChange={e=>handleChange(e)}/>

            <label htmlFor="image">Image URL</label>
            <input type='text' id="image" name='image' placeholder="Enter an image URL" onChange={e=>handleChange(e)}/>
            <button type='submit'>Create Restaurant</button>
            </div>
            <Link to='/'><p className='link'>Back</p></Link>

        </form>
    </div>
    )
}

export default RestaurantForm;