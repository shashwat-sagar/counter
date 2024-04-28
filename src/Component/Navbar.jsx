import React from 'react'
import NavItems from './NavItems'
import useDetails from '../context/Details';

const Navbar = () => {
  const {details} = useDetails();
  
  return (
    <div style={{background:"red", textAlign:"center", fontSize:"40px"}}>
       
        <NavItems name={details}/>
    </div>
  )
}

export default Navbar