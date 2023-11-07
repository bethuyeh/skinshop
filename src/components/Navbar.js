import { useState } from "react";
import {Link} from "react-router-dom"
import {FaShoppingBag} from "react-icons/fa"
import skin1 from ".././images/skin1.png"

 function Navbar() {
    const [navbar, setNavbar] = useState(false);

    return (
        <nav className="w-full bg-navbar z-50 fixed ">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex">
                <div>
                    <div className="flex items-center justify-between py-3  md:block">
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
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 items-center justify-evenly pb-3 mt-8 md:flex md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                      <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0 text-white">
                        <li ><Link to="new">New</Link></li>
                        <li ><Link to="skincare">Skincare</Link></li>
                        <li ><Link to="body">Body</Link></li>
                        <li><Link to="hair">Hair</Link></li>
                      </ul>

                      <div className="md:ml-4 md:mt-0 sm:ml-0 sm:mt-2">
                        <FaShoppingBag style={{color:"white"}}/>
                      </div>
                    </div>
                    
                </div>
            </div>
        </nav>
    );
}

export default Navbar