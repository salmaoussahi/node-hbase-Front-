import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import NavbarAdmin from '../component/NavbarAdmin'
import SidebarAdmin from '../component/SidebarAdmin'

export default function Admin() {
   
  return (
   <body class="layout-under-navbar">
   
    <NavbarAdmin/>

    <main>
    <h1>Se Connecter</h1>
    <div className='container mx-5 my-5'>
        <div class="form-field">
          <label for="name">Email</label>
          <input type="text" id="name" class="form-control rounded-1" placeholder="Email" name="name" />
        </div>

        <div class="form-field">
          <label for="name">Mot de passe</label>
          <input type="password" id="name" class="form-control rounded-1" placeholder="Mot de passe" name="name" />
        </div>
        <a type="submit" class="btn rounded-1 success" href='./allRestaurant' >Se Connecter</a>

    </div>
    </main>

   
  </body>
  )
}
