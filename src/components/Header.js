import React, { useState, useRef, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

// import { icons, } from "react-icons";
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
    //     <nav className="bg-gray-100 p-4">
    //     <div className="container mx-auto">
    //         <div className="flex justify-between items-center">
    //             <a href="#" className="text-xl font-bold">jiraiya</a>
                
    //             {/* This is your mobile button, we'll use some basic toggling logic */}
    //             <button className="lg:hidden flex items-center p-2">
    //                 <svg className="w-6 h-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24">
    //                     <path d="M4 6h16M4 12h16m-7 6h7"></path>
    //                 </svg>
    //             </button>

    //             {/* Navbar content */}
    //             <div className="hidden lg:flex space-x-4">
    //                 <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
    //                 <a href="#" className="text-gray-700 hover:text-gray-900">About</a>
    //                 {
    //                     !logged ?
    //                         <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Login</button>
    //                         :
    //                         <button onClick={logMeOut} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
    //                 }
    //             </div>
    //         </div>
    //     </div>
    // </nav>
//     <header className="text-gray-600 body-font">
//   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
//     <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
//       <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
//         <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//       </svg>
//       <span className="ml-3 text-xl">Tailblocks</span>
//     </a>
//     <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
//       <button className="mr-5 hover:text-gray-900" onClick={() => navigate("/resources")}>
//         Resources
//       </button>
//       <button className="mr-5 hover:text-gray-900" onClick={() => navigate("/about")}>
//         About
//       </button>
//       <button className="mr-5 hover:text-gray-900" onClick={() => navigate("/help")}>
//         Help
//       </button>
//       <button className="mr-5 hover:text-gray-900" onClick={() => navigate("/notifications")}>
//         <MdNotifications />
//       </button>
//       <button className="mr-5 hover:text-gray-900" onClick={() => navigate("/profile")}>
//       <CgProfile />
//       </button>
//     </nav>
//     {/* <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Logout
//       <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} className="w-4 h-4 ml-1" viewBox="0 0 24 24">
//         <path d="M5 12h14M12 5l7 7-7 7" />
//       </svg>
//     </button> */}
//     {
//                        !logged ?
//                         <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">Login</button>
//                            :
//                             <button onClick={logMeOut} className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">Logout</button>
//                     }
//   </div>
// </header>
<header className="text-gray-300 body-font bg-nebula-blue ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a className="flex title-font font-medium items-center mb-4 md:mb-0">
      
      <a href="/" className="ml-3 text-xl">Elfspace</a>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
      <button className="mr-5 bg-nebula-blue hover:bg-nebula-blue-light" onClick={() => navigate("/resources")}>
        Resources
      </button>
      <button className="mr-5 bg-nebula-blue hover:bg-nebula-blue-light" onClick={() => navigate("/about")}>
        About
      </button>
      <button className="mr-5 bg-nebula-blue hover:bg-nebula-blue-light" onClick={() => navigate("/help")}>
        Help
      </button>
      <button className="mr-5 bg-nebula-blue hover:bg-nebula-blue-light" onClick={() => navigate("/notifications")}>
        <MdNotifications />
      </button>
      {/* <button className="mr-5 hover:text-indigo-500" onClick={() => navigate("/profile")}>
      <CgProfile />
      </button> */}
      <div className="relative inline-block text-left mr-5">
        <button onClick={() => setDropdownOpen(!dropdownOpen)} className="hover:text-indigo-500">
          <CgProfile />
        </button>

        {dropdownOpen && (
  <div ref={dropdownRef} className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-md bg-black bg-opacity-90 text-white ring-1 ring-purple-500 ring-opacity-5 z-50">
    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <a href="/profile" className="block px-4 py-2 text-sm hover:bg-purple-700 hover:text-gray-200" role="menuitem">Bookmarks</a>
      <a href="/settings" className="block px-4 py-2 text-sm hover:bg-purple-700 hover:text-gray-200" role="menuitem">Your Rating</a>
      <a href="/settings" className="block px-4 py-2 text-sm hover:bg-purple-700 hover:text-gray-200" role="menuitem">Downloads</a>
      <a href="/settings" className="block px-4 py-2 text-sm hover:bg-purple-700 hover:text-gray-200" role="menuitem">History</a>
      <a href="/settings" className="block px-4 py-2 text-sm hover:bg-purple-700 hover:text-gray-200" role="menuitem">Personalisation</a>
      <a href="/settings" className="block px-4 py-2 text-sm hover:bg-purple-700 hover:text-gray-200" role="menuitem">settings</a>

      <a onClick={logMeOut} className="block px-4 py-2 text-sm hover:bg-purple-700 hover:text-gray-200 cursor-pointer" role="menuitem">Logout</a>
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