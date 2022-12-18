import React,{useState,useEffect} from 'react'
import { useParams } from "react-router-dom";

import axios from 'axios'
import NavbarAdmin from '../../component/NavbarAdmin';
import SidebarAdmin from '../../component/SidebarAdmin';

export default function UpdateRestaurant() {
  const routeParams = useParams();

    const [restaurant,setRestaurant]=useState({
        name:"",
        description:"",
        lien:"",
        image:"",
      });

      
      const handleChange=(e)=>{setRestaurant((prev)=>({...prev,[e.target.name]:e.target.value}))};
      const handleClick = async e =>{

        console.log(routeParams.name)
        e.preventDefault()
        try{
          console.log('kkkkkkk1')
          await axios.put("http://localhost:8000/api/ressource/restaurant/"+routeParams.name,restaurant)
          console.log('kkkkkkk2 ')
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
        <div><h1>Modifier le restaurant</h1></div>
        <div><a style={{color:"blue"}} href="../allRestaurant">- Retour -</a></div>
      </div>
      <div className='container mx-5 my-5'>
        {/* <div class="form-field">
          <label for="name">Nom du restaurant</label>
          <input type="text" id="name" class="form-control rounded-1" placeholder="Nom du restaurant" name="name" onChange={handleChange}/>
        </div> */}

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

        <button type="submit" class="btn rounded-1 success" onClick={handleClick}>Modifier</button>
      </div>
        
      </main>
      
     
      
    </body>
  )
}
