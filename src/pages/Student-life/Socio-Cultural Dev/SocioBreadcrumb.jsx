import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";



const SocioBread = () => {
    return (
<div>
    <div className=" title w-full h-48 py-10  text-white bg-orange-500">
     <h1 className="lg:text-5xl text-3xl font-medium text-center ">Socio-Cultural Development</h1>
     <h1 className="text-center font-bold mt-5 flex items-center gap-1 justify-center">Home <FaArrowRight/> School-life <FaArrowRight/> <span className="font-medium ">Co-Curriculam</span> </h1>
   </div>
   <div className="Addmision-section">
     <div className="Addmission-bg">
       <h1></h1>
       <nav className="breadcrumb">
         <Link to="/">Home</Link> &gt;{" "}
         <Link to="">School-life</Link> &gt;{" "}
         <Link>Socio-Cultural Development</Link> 
       </nav>
     </div>
   </div>
   </div>
   );
   };

   export default SocioBread;