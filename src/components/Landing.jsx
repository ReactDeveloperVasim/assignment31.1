import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Products from "./Products"
import Nav from "./Nav";
import { Speedo } from "./Speedo";

export const Landing=()=>{
    return(
        <BrowserRouter>
        <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="about" element={<About/>} />
                <Route path="contact" element={<Contact/>} />
                <Route path="product" element={<Products />} />
                <Route path="speedo" element={<Speedo />}/>


            </Routes>
        </BrowserRouter>
    );
}