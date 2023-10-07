import React, { useState, useRef, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';



import {MdNotifications} from "react-icons/md"
import { CgProfile } from 'react-icons/cg';
 
function Header(props) {
 
    const navigate = useNavigate();
    const dropdownRef = useRef(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
     
    useEffect(() => {
      function handleClickOutside(event) {
          if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
              setDropdownOpen(false);
          }
      }

      document.addEventListener("mousedown", handleClickOutside);
      
      return () => {
          document.removeEventListener("mousedown", handleClickOutside);
      };
  }, [dropdownOpen]);
    function logMeOut() {
        axios({
            method: "POST",
            url:"https://check-e107.onrender.com/logout",
        })
        .then((response) => {
            props.token()
            localStorage.removeItem('email')
            navigate("/");
        }).catch((error) => {
            if (error.response) {
                console.log(error.response)
                console.log(error.response.status)
                console.log(error.response.headers)
            }
        })
    }
     
    const logged = localStorage.getItem('email');
     
    return(
  
<header className="text-gray-300 body-font bg-black ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center mb-4 md:mb-0">
      
      <a href="/" className="ml-3 text-xl">Elfspace</a>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <button className="mr-5 hover:border-2 hover:border-blue-500  hover:text-blue-700 p-2 rounded" onClick={() => navigate("/resources")}>
        Resources
      </button>
      <button className="mr-5 hover:border-2 hover:border-blue-500  hover:text-blue-700 p-2 rounded" onClick={() => navigate("/about")}>
        About
      </button>
      <button className="mr-5 hover:border-2 hover:border-blue-500  hover:text-blue-700 p-2 rounded" onClick={() => navigate("/help")}>
        Help
      </button>
      <button className="mr-5 hover:border-2 hover:border-blue-500  hover:text-blue-700 p-2 rounded" onClick={() => navigate("/notifications")}>
        <MdNotifications />
      </button>
     
      <div className="relative inline-block text-left mr-5">
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="hover:text-indigo-500">
          <div className="flex flex-row">

          <CgProfile />
          <i className="fa fa-angle-down ml-2"></i>
          </div>
        </button>

        {dropdownOpen && (
  <div ref={dropdownRef} className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-md bg-black bg-opacity-90 text-white ring-1 ring-purple-500 ring-opacity-5 z-50">
    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
    <a href="/profile" className="block px-4 py-2 text-sm" role="menuitem">
  <span className="border-0 hover:border-b-2 hover:border-dashed hover:border-gray-200">Bookmarks</span>
</a>
<a href="/profile" className="block px-4 py-2 text-sm" role="menuitem">
  <span className="border-0 hover:border-b-2 hover:border-dashed hover:border-gray-200">Your Rating</span>
</a>
<a href="/profile" className="block px-4 py-2 text-sm" role="menuitem">
  <span className="border-0 hover:border-b-2 hover:border-dashed hover:border-gray-200">History</span>
</a>
<a href="/profile" className="block px-4 py-2 text-sm" role="menuitem">
  <span className="border-0 hover:border-b-2 hover:border-dashed hover:border-gray-200">Personalisation</span>
</a>
<a href="/profile" className="block px-4 py-2 text-sm" role="menuitem">
  <span className="border-0 hover:border-b-2 hover:border-dashed hover:border-gray-200">settings</span>
</a>
<a  onClick={logMeOut}  className="block px-4 py-2 text-sm" role="menuitem">
  <span onClick={logMeOut} className="border-0 hover:border-b-2 hover:border-dashed hover:border-gray-200">Log Out</span>
</a>


    </div>
  </div>
)}

      </div>
    </nav>
    
  </div>
</header>



    )
}
 
export default Header;
