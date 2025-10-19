import React, { use } from "react";
import { NavLink } from "react-router";
import { FaUser } from "react-icons/fa";
import { AuthContext } from "../../Provider/Authprovider";

const Navbar = () => {
  
  const {user,Logout} = use(AuthContext)
  const handleLogout = () => {
    Logout()
    .then(() => {
      console.log('log out done');
    }).catch((error) => {
      console.log(error);
    })
  }
  return (
    <div>
      <nav className="max-w-[1300px] items-center justify-between mx-auto flex mt-6 bg-white py-4 px-2 rounded-[5px]">
        <div className="flex gap-5 font-medium ">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/career">Career</NavLink>
        </div>
        <div  className="flex items-center gap-3">
          <FaUser size={24} color="#333" />
          {
            user ? <button onClick={handleLogout} className='bg-[#d72050] text-white py-2 px-2 rounded-[5px]'>Logout</button> : <NavLink to="/login" className='bg-[#d72050] text-white py-2 px-2 rounded-[5px]'>Login</NavLink>
          }
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
