import React from 'react'

export default function Navbar() {
  return (
    <div>
        <div class="header_section">
         <div class="header_main">
          
            <div class="container-fluid">
               <div class="logo"><a href="index.html"><img src="images/logo.png"/></a></div>
               <div class="menu_main">
                  <ul>
                     <li class="active"><a href="./">Home</a></li>
                     <li><a href="./admin">Admin</a></li>
                     <li><a href="./services">Services</a></li>
                     {/* <li><a href="./blog">Blog</a></li> */}
                     <li><a href="./contact">Contactez-nous</a></li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
    </div>
  )
}
