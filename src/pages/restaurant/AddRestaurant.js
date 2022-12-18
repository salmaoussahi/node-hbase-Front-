import React,{useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from '../../component/Navbar';
import NavbarAdmin from '../../component/NavbarAdmin';
import SidebarAdmin from '../../component/SidebarAdmin';

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
    <body class="layout-under-navbar">
      <NavbarAdmin/>
      <SidebarAdmin/>
      
      <main className='mx-5'>
      
      <div class="grix xs2">
        <div><h1>Ajouter un restaurant</h1></div>
        <div><a style={{color:"blue"}} href="./allRestaurant">- Retour -</a></div>
      </div>
      <div className='container mx-5 my-5'>
        <div class="form-field">
          <label for="name">Nom du restaurant</label>
          <input type="text" id="name" class="form-control rounded-1" placeholder="Nom du restaurant" name="name" onChange={handleChange}/>
        </div>

        <div class="form-field">
          <label for="name">Description du restaurant</label>
          <input type="text" id="name" class="form-control rounded-1" placeholder="Description du restaurant" name="description" onChange={handleChange}/>
        </div>

        <div class="form-field">
          <label for="name">Itinéraire du restaurant</label>
          <input type="text" id="name" class="form-control rounded-1" placeholder="Itinéraire du restaurant" name="lien" onChange={handleChange}/>
        </div>

        <div class="form-field">
          <label for="name">Image</label>
          <input type="text" id="name" class="form-control rounded-1" placeholder="Image" name="image" onChange={handleChange}/>
        </div>

        <button type="submit" class="btn rounded-1 success" onClick={handleClick}>Ajouter</button>
      </div>
        
      </main>
      
     
      
    </body>
  )
}
