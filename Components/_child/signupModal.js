import React,{useState} from "react";

import { FaTimes ,FaPhoneAlt} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import img from "../../public/assets/img/static-image/login.webp"
const SignupModal = () => {
    
const inputText =
"block w-56 px-4 py-3  border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-500 focus:outline-none focus:bg-white focus:ring-2";
  return (
    <div className="flex items-center justify-center ">
        <div className="absolute top-0 left-0 z-20 w-full h-screen bg-gray-800 opacity-50"></div>
        <div className="absolute z-40 flex flex-col items-center justify-center w-auto p-6 bg-white opacity-100 top-1/4 rounded-xl">
        <div className="flex justify-between w-full">
            <p className="text-2xl font-semibold text-blue-500">SignUp</p>
            <FaTimes size={25} className="cursor-pointer"/>
        </div>
        <div className="">
            <Image alt="temp" src={img}/>
        </div>
        <div className="flex flex-col items-center gap-4">
            <p className="text-sm font-semibold text-gray-600">Please Enter Your Mobile Number</p>
            <div className="flex items-center justify-center">
            <FaPhoneAlt size={20} className="mr-4 text-gray-600"/>
            <input type="Number" className={inputText} minLength="10" maxLength="10"  placeholder="Mobile No."/>
            </div>
            <button className="px-4 py-2.5 bg-blue-500 text-white rounded-lg">Send OTP</button>
        </div>
        </div>
    </div>
  )
}

export default SignupModal