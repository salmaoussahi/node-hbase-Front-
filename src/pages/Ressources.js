import React from 'react'
import { useParams } from "react-router-dom";
import {useState,useEffect} from 'react'
import axios from 'axios'
import Navbar from '../component/Navbar';

export default function Ressources() {
    const routeParams = useParams();
    const [ressources,setRessources]=useState([])
    //Afficher tous les ressources au début
    useEffect(()=>{
        const getRessources = async()=>{
          try{
            const res = await axios.get("http://localhost:8000/api/ressource/"+routeParams.name);
            setRessources(res.data);
            console.log("ressources"+ressources)
          }
          catch(err){
            console.log(err)
          }
        };getRessources();
      },[])

  return (
    <div>
        <div class="header_section">
           <Navbar/>
       </div>
           <div class="services_section layout_padding">
               <div class="container">
                   <h1 class="services_taital">{routeParams.name} </h1>
                   <p class="services_text"> {ressources.map(r=>(
        <div class="col-md-4"> 
            <div class="btn_main"><a>{r.$}</a></div> 
        </div>
        ) )}</p>
                   <div class="services_section_2">
                   <div class="row">
                   
 

                       </div>
                   </div>
               </div>
           </div>

       

       
    </div>

    
    
  )
}
