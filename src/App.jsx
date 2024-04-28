import { Routes, Route, BrowserRouter } from "react-router-dom";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import React, { useEffect } from "react";
import { DetailsContextProvider } from "./context/Details.js";
export default function App() {
  const [name, setName] = React.useState();
  const [number, setNumber] = React.useState("");
  const [details, setDetails] = React.useState();
 console.log(details)
  return (
    <DetailsContextProvider value={{ details, setDetails }}>
      <BrowserRouter>
        
        <Navbar name={name} />
        <Routes>
          <Route path="/" element={<Home name={name} number={number} />} />
          <Route path="/contact" element={<Contact number={number} />} />
        </Routes>
        <Footer name={name} />
      </BrowserRouter>
    </DetailsContextProvider>
  );
}
