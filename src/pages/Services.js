import React from 'react'
import Navbar from '../component/Navbar'
import {useState,useEffect} from 'react'
import axios from 'axios'

export default function Services() {
    const [ressources,setRessources]=useState([])
    //Afficher tous les ressources au début
    useEffect(()=>{
        const getRessources = async()=>{
          try{
            const res = await axios.get("http://localhost:8000/api/ressource/");
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
                    <h1 class="services_taital">Services </h1>
                    <p class="services_text">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration</p>
                    <div class="services_section_2">
                    <div class="row">
                    
  
                        {ressources.map(r=>(
                            (r == "Restaurant" ?
                            <div class="col-md-4"> 
                                <div><img src="images/restaurant.jpg" class="services_img"/></div>   
                                <div class="btn_main"><a href={'services/'+r}>{r}</a></div> 
                            </div>
                            :<></>
                            )                                                 
                            ))}

                        {ressources.map(r=>(
                            (r == "Hotel" ?
                            <div class="col-md-4"> 
                                <div><img src="images/hotels.jpg" class="services_img"/></div>   
                                <div class="btn_main"><a href={'services/'+r}>{r}</a></div> 
                            </div>
                            :<></>
                            )                                                 
                            ))}

                        {ressources.map(r=>(
                            (r == "Transport" ?
                            <div class="col-md-4"> 
                                <div><img src="images/transport.jpg" class="services_img"/></div>   
                                <div class="btn_main"><a href={'services/'+r}>{r}</a></div> 
                                
                            </div>
                            :<></>
                            )                                                 
                            ))}

                        {ressources.map(r=>(
                            (r == "Visiteguidee" ?
                            <div class="col-md-4"> 
                                <div><img src="images/visite.jpg" class="services_img"/></div>   
                                <div class="btn_main"><a href={'services/'+r}>{r}</a></div> 
                            </div>
                            :<></>
                            )                                                 
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        
    </div>
  )
}
