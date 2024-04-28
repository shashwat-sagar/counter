import React from 'react'
import useDetails from '../context/Details';

const Footer = (props) => {
  const {details} = useDetails();
  return (
    <div style={{background:"gray",textAlign:"center", fontSize:"40px", width:"100%",height:"100px"}}>{details}</div>
  )
}

export default Footer