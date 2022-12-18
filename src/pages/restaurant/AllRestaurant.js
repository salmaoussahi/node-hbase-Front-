import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import NavbarAdmin from '../../component/NavbarAdmin'
import SidebarAdmin from '../../component/SidebarAdmin'


export default function AllRestaurant() {
const [restaurants,setRestaurants]=useState([])
//Afficher tous les restaurant au début
useEffect(()=>{
    const getRestaurants = async()=>{
      try{
        const res = await axios.get("http://localhost:8000/api/ressource/restaurant/");
        setRestaurants(res.data);
      }
      catch(err){
        console.log(err)
      }
    };getRestaurants();
  },[])

    //Supprimmer un restaurant
    const handleClickDelete = async (key,e) =>{
        console.log(key)
        try{
          await axios.delete(`http://localhost:8000/api/ressource/restaurant/${key}`) 
          const res = await axios.get("http://localhost:8000/api/ressource/restaurant/");
          setRestaurants(res.data);
          console.log("restaurants"+restaurants)
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
        <div><h1>Gestion des Restaurant</h1></div>
        <div><a class="btn success" style={{background: "#0C1E24",color:"white"}} href="./addRestaurant">Ajouter un restaurant</a></div>
       </div>
      
    <br/>
    <div class="table-responsive">
  <table class="table table-hover">
    <thead>
      <tr>
        <th>#</th>
        <th>Nom du restaurant</th>
        <th>Supprimer le restaurant</th>
        <th>Plus de détail</th>
      </tr>
    </thead>
    <tbody>
    {restaurants.map(r=>(
            <tr key={r.key}>
                <td>{r.key}</td>
                <td>{r.$}</td>
                <td><button class="btn error" onClick={e => handleClickDelete(r.key)} >Supprimer</button></td>
                <td><a class="btn success" href={'./detailRestaurant/'+r.$}>+ Détail</a></td>
            </tr>
            
        ))}
      
    </tbody>
  </table>
</div>
    
    </main>

   
    <script src="https://cdn.jsdelivr.net/npm/axentix@2.2.1/dist/axentix.min.js"></script>
  </body>
    
    
  )
}
