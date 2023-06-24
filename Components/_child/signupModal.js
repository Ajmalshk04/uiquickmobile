import React,{useState} from "react";

import { FaTimes ,FaPhoneAlt} from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import img from "../../public/assets/img/static-image/login.webp"
const SignupModal = () => {
    
const inputText =
"block w-56 px-4 py-3  border border-slate-300 rounded-lg text-sm shadow-sm placeholder-slate-500 focus:outline-none focus:bg-white focus:ring-2";
  return (
    <div className=" flex items-center justify-center">
        <div className="absolute top-0 left-0 w-full h-screen bg-gray-800 opacity-50 z-20"></div>
        <div className="absolute top-1/4 w-auto flex flex-col items-center justify-center bg-white rounded-xl opacity-100 z-40 p-6">
        <div className="flex w-full justify-between">
            <p className="text-2xl font-semibold text-blue-500">SignUp</p>
            <FaTimes size={25} className="cursor-pointer"/>
        </div>
        <div className="">
            <Image src={img}/>
        </div>
        <div className="flex flex-col items-center gap-4">
            <p className="font-semibold text-sm text-gray-600">Please Enter Your Mobile Number</p>
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