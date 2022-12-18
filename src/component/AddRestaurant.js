import React,{useState,useEffect} from 'react'
import axios from 'axios'

export default function AddRestaurant() {
    const [restaurant,setRestaurant]=useState({
        name:"",
        description:"",
        lien:"",
        image:"",
      });

      const handleChange=(e)=>{setRestaurant((prev)=>({...prev,[e.target.name]:e.target.value}))};
      const handleClick = async e =>{
        e.preventDefault()
        try{
          console.log(restaurant.name)
          await axios.post("http://localhost:8000/api/ressource/restaurant/",restaurant)
          alert("book added successfully")
        }catch(err){
          console.log(err)
        }
      }
  return (
    <div>
            <input type="text" class="form-control" placeholder="name" name="name" onChange={handleChange}></input> 
            <br />
            <input type="text" class="form-control" placeholder="description" name="description" onChange={handleChange}></input> 
            <br />
            <input type="text" class="form-control" placeholder="lien" name="lien" onChange={handleChange}></input> 
            <br />
            <input type="text" class="form-control" placeholder="image" name="image" onChange={handleChange}></input> 
            <br />
            <button type="submit" class="btn btn-primary" onClick={handleClick}>Add</button>


    </div>
  )
}
