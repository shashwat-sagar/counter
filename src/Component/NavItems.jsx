import React from 'react'
import Button from './Button'
import useDetails from '../context/Details';

const NavItems = () => {
  const {details} = useDetails();
  return (
    <div>
        <ul style={{listStyle:"none"}}>
            <li>{details}</li>
            <li>{details}</li>
            <li>{details}</li>
            
        </ul>
        <Button />
    </div>
  )
}

export default NavItems