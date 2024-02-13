
import React, { useEffect, useState } from 'react'
import PagePrincipal from './PagePrincipal/PagePrincipal';
import { Route ,Routes } from 'react-router-dom';
import Contact from '../src/contact/Contact';
import Navbar from '../src/componment/Navbar';
import Register from './Register/Register';
import Footer from './footer/Footer';
import Market from './MarketPlace.js/Market';
import Market2 from './Market2/Market2';
import Login from './Login/Login';
  import { auth } from './firebase';

export default function App() {

  const[ userName , setUserName] = useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if(user) {
        setUserName(user.displayName);
      }else setUserName("");

    });
  },[])


  return (
    <div>
      
      <Navbar/>
      
      <Routes>
      <Route path='/' element={<PagePrincipal name={userName}/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/Market' element={<Market/>} />
      <Route path='/Market2' element={<Market2/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Register' element={<Register/>} />
      
      
    </Routes>
    <Footer/>
  
    </div>
    
  )
}
