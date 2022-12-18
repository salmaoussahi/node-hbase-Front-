import React,{useState,useEffect} from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import NavbarAdmin from '../../component/NavbarAdmin';
import SidebarAdmin from '../../component/SidebarAdmin';


export default function DetailRestaurant() {
  const [isOpen, setIsOpen] = useState(false);
  const routeParams = useParams();
  const [restaurant,setRestaurant]=useState([])
//Afficher tous les restaurant au début
useEffect(()=>{
  console.log("routeParams"+routeParams)
    const getRestaurant = async()=>{
      try{
        const res = await axios.get("http://localhost:8000/api/ressource/restaurant/"+routeParams.name);
        setRestaurant(res.data);
        console.log("restaurant"+restaurant)
      }
      catch(err){
        console.log(err)
      }
    };getRestaurant();
  },[])
  return (
    <body class="layout-under-navbar">  
      <NavbarAdmin/>
      <SidebarAdmin/>
    <main className='mx-5'>
    <div><a style={{color:"blue"}} href="../allRestaurant">- Retour -</a></div>
    <div class="grix xs2">
      <div>
        <div class="card white rounded-2 shadow-1 mx-auto" style={{maxWidth:600}}>
          <div class="card-image">
            <img src="https://picsum.photos/800/600?random=1" class="responsive-media" alt="laptop"/>
          </div>
        </div> 
      </div>



      <div>
        <div className='container mx-5 my-5'>
          {restaurant.map(r=>(
            
            (r.column == "Restaurant:description" ? 
            <div class="form-field">
              <label for="name">{r.column}</label>
              <textarea disabled type="text" id="textarea" class="form-control" placeholder={r.$}/>
            </div>      
            :
            <div class="form-field">
              <label for="name">{r.column}</label>
              <input type="text" id="name" class="form-control rounded-1" placeholder={r.$} name="name" disabled />
            </div> 
            )                  
              ))}
          {restaurant.map(r=>(
            (r.column == "Restaurant:name" ? 
            <a type="submit" class="btn rounded-1 success" href={'../updateRestaurant/'+r.$} >Modifier</a>     
            :
            <></>
            ) 
          ))}
          
        </div>
      </div>
    </div>
    
      
    

    </main>

    
</body>

  )
}
