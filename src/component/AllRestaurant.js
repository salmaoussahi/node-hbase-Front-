import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'


export default function AllRestaurant() {
const [restaurants,setRestaurants]=useState([])
//Afficher tous les restaurant au début
useEffect(()=>{
    const getRestaurants = async()=>{
      try{
        const res = await axios.get("http://localhost:8000/api/ressource/restaurant/");
        setRestaurants(res.data);
        console.log("restaurants"+restaurants)
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
    <div>
          <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Handle</th>
            
            </tr>
        </thead>
        <tbody>
        {restaurants.map(book=>(
            <tr key={book.key}>
                <td>{book.key}</td>
                <td>{book.$}</td>
                <td><button type="button" onClick={e => handleClickDelete(book.key)} >supprimer</button></td>
            </tr>
            
        ))}
        </tbody>
    </div>
    
  )
}
