import React from 'react'

export default function NavbarAdmin() {
  return (
   <header>
   <div class="navbar-fixed">
     <nav class="navbar shadow-1 " style={{background: "#0C1E24",color:"white"}}>
     <img class="sidenav-logo" src="images/logo.png"  width={120} height={120}  />

       <div class="navbar-menu ml-auto">
         <a class="navbar-link" href="./">Retour à la page d'accueil</a>
      
       </div>
     </nav>
     
   </div>
 </header>
  )
}
