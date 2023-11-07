

import React,{useState} from 'react'
import  { Link } from 'react-router-dom'
import {FaShoppingBag} from "react-icons/fa"
import skin1 from ".././images/skin1.png"

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <div className='flex justify-between items-center bg-navbar px-14 '>
      <div >
        <img alt='logohere' src={skin1} width="100px" height="70px"/>
      </div>
      <div className="md:hidden">
        <button
          className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
          onClick={() => setNavbar(!navbar)}
        >
          {navbar ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
            ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      <div
                        className={`flex-1 justify-between pb-3 mt-8 md:flex items-center md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >  
      <ul className='flex justify-evenly space-x-5 text-white' >
        <li ><Link to="new">New</Link></li>
        <li ><Link to="skincare">Skincare</Link></li>
        <li ><Link to="body">Body</Link></li>
        <li><Link to="hair">Hair</Link></li>
      </ul>
      <div>
        <FaShoppingBag style={{color:"white"}}/>
      </div>
    </div>                    
    </div>
  )
}

export default Navbar