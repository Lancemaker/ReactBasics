import React from "react";
import {Routes, Route} from "react-router-dom";
import Home from './Pages/Home'
import Contact from "./Pages/Contact";
import Table from "./Pages/Table";
const Router = ()=>{
    return (
        <Routes>         
            <Route path="/" element={<Home/>}/>  
            <Route path="/table" element={<Table/>}/>  
            <Route path="/contact" element={<Contact/>}/>                 
        </Routes>
    )
}
export default Router