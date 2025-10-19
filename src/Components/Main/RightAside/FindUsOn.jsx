import React from 'react'
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const FindUsOn = () => {
   return (
    <div className="w-full max-w-sm mx-auto mt-3 ">
      <h2 className="text-2xl font-medium mb-4 ">Find Us On</h2>

      <div className="flex flex-col gap-3 shadow-md bg-white rounded-[5px] p-5">
 

 

        {/* Facebook Login */}
        <button className="flex items-center justify-center gap-2 border border-blue-600 rounded-lg py-2 hover:bg-blue-50 transition">
          <FaFacebook className="text-blue-600 text-xl" />
          <span className="font-medium text-gray-700">Login with Facebook</span>
        </button>

        {/* Twitter Login */}
        <button className="flex items-center justify-center gap-2 border border-sky-500 rounded-lg py-2 hover:bg-sky-50 transition">
          <FaTwitter className="text-sky-500 text-xl" />
          <span className="font-medium text-gray-700">Login with Twitter</span>
        </button>

        {/* Instagram Login */}
        <button className="flex items-center justify-center gap-2 border border-pink-500 rounded-lg py-2 hover:bg-pink-50 transition">
          <FaInstagram className="text-pink-500 text-xl" />
          <span className="font-medium text-gray-700">Login with Instagram</span>
        </button>
      </div>
    </div>
  );
}

export default FindUsOn