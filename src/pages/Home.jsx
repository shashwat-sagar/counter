import React, {useState} from 'react'
import useDetails from '../context/Details';

const Home = (props) => {
const {setDetails} = useDetails();
  const [name2, setName2] = useState();
  const [email, setEmail] = useState("s@mmail.com");
  const [phone, setPhone] = React.useState("1234567890");
  const handleSubmit = (event) => {
    event.preventDefault();
    setEmail("3");
    setPhone("65746876876");
   setDetails(event.target[0].value)
  }

  return (
    <>
      <h1>{props.name}</h1>
      <p>{email}</p>
      <h2>{phone}</h2>
      <p>Welcome to our website</p>
      <form onSubmit={handleSubmit} style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
        <input style={{height:"30px", width:"300px"}} type="text" placeholder="Name" value={name2} onChange={(e)=> setName2(e.target.value)} />
        <input style={{height:"30px", width:"300px"}} type="text" placeholder="email" value={email} onChange={(e)=> setEmail(e.target.value)}/>
        <button style={{height:"30px", width:"300px"}}>Clear All</button>
      </form>
    </>
  )
}

export default Home