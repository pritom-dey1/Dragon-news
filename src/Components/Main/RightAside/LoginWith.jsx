import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const LoginWith = () => {
  return (
    <div className="w-full max-w-sm mx-auto ">
      <h2 className="text-2xl uppercase font-medium">Login With</h2>

      <div className="flex flex-col gap-3 shadow-md bg-white rounded-[5px]  p-5 mt-3">
        {/* Google Login */}
        <button
          className="flex items-center justify-center gap-2 border border-gray-300 rounded-lg py-2 hover:bg-gray-50 transition"
        >
          <FcGoogle className="text-2xl" />
          <span className="font-medium text-gray-700">Login with Google</span>
        </button>

        {/* GitHub Login */}
        <button
          className="flex items-center justify-center gap-2 border border-gray-400 rounded-lg py-2 hover:bg-gray-100 transition"
        >
          <FaGithub className="text-xl" />
          <span className="font-medium text-gray-700">Login with Github</span>
        </button>
      </div>
    </div>
  );
};

export default LoginWith;
