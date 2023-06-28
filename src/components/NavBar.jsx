import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa"
import {Link} from "react-scroll"
import { HiCode } from 'react-icons/hi';
import { HiChevronLeft } from 'react-icons/hi';


function NavBar() {

  const[nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "sobre",
    },
    {
      id: 3,
      link: "portfolio",
    },
    {
      id: 4,
      link: "experiência",
    },
    {
      id: 5,
      link: "contato",
    },
  ];
  
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white
     bg-black fixed">

      <div className="flex items-center cursor-pointer mt-2">
      <HiChevronLeft className="text-3xl text-white-500" />
        <h1  className="text-5xl font-signature  mr-3 ">Lima</h1>
        <HiCode className="text-3xl text-white-500 mr-80" />
      </div>

    

  

      <ul className="hidden md:flex">
        {links.map(({id, link}) =>(
            <li 
            key={id}
            className="px-4 cursor-pointer capitalize font-medium
            text-white-500 hover:scale-105 duration-200">
             <Link to={link} smooth duration={500}>
              {link}
              </Link>
             </li>
        ))}
        
      </ul>

      <div 
      onClick={() => setNav(!nav)}
      className="cursor-pointer  pr-4 z-10 text-white-500 md:hidden absolute right-3">
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav &&(
        <ul className="flex flex-col justify-center items-center absolute
        top-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
 
        {links.map(({id, link}) =>(
             <li 
             key={id}
             className="px-4 cursor-pointer capitalize py-6 text-4xl">
              <Link 
              onClick={() => setNav(!nav)}
              to={link} smooth duration={500}>
              {link}
              </Link>
              </li>
         ))}
 
 
       </ul>

      )}


      

     </div>
  )
}

export default NavBar