import { render } from "node-sass";
import React, { useState } from "react";

const RestaurantForm = () => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [rating, setRating] = useState(1)
    const [location, setLocation] = useState('')
    const [image, setImage] = useState('')

    const handleChange = (e) =>{
        e.stopPropagation()
        switch(e.target.id){
            case 'name': setName(e.value.target)
            case 'description': setDescription(e.value.target)
            case 'rating': setRating(e.value.target)
            case 'location': setLocation(e.value.target)
            case 'image': setImage(e.value.target)
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

        console.log(data);
    }

    return(
    <div className="container">
        <form className="restaurant-form" onSubmit={e=>handleSubmit(e)}>

            <label htmlFor="name"/>
            <input type='text' id="name" name='name' placeholder="Enter your Restaurnat name"/>

            <label htmlFor="description"/>
            <textarea name="description" maxLength={500} id="description"/>

            <label htmlFor="location"/>
            <input type='text' id="location" name='location' placeholder="Enter your business location"/>

            <label htmlFor="rating"/>
            <input type='number' id="rating" name='rating' min={1} max={5}/>

            <label htmlFor="image"/>
            <input type='text' id="image" name='image' placeholder="Enter an image URL"/>
            
        </form>
    </div>
    )
}

export default RestaurantForm;