import React from 'react'
import Button from './Button'

const NavItems = (props) => {
  return (
    <div>
        <ul style={{listStyle:"none"}}>
            <li>{props.name}</li>
            <li>{props.name}</li>
            <li>{props.name}</li>
            
        </ul>
        <Button name={props.name} />
    </div>
  )
}

export default NavItems