import React from 'react'
import useDetails from '../context/Details';

const Button = (props) => {
  const {details} = useDetails();
  const {setDetails} = useDetails();

  const handleClick = () => {
    setDetails("Button Clicked")
  }
  return (
    <button onClick={handleClick}>{details}</button>
  )
}

export default Button