import React, { useState,useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from 'next/router';
import {
    IoClose,
  IoSearch,
  IoLocationOutline,
  IoHomeOutline,
  IoCashOutline,
  IoCartOutline,
  IoSettingsOutline,
  IoInformationCircleOutline,
  IoStorefrontOutline,
  IoCallOutline,
  IoPeopleOutline,
  IoChevronDown,
  
} from "react-icons/io5";
import { CgMenuRightAlt } from "react-icons/cg";



//logo
import logo from "../../public/assets/master png logo.png";

//modal elements
// import { FaTimes } from "react-icons/fa";
import mumbai from "../../public/assets/city/mumbai.png";
import delhi from "../../public/assets/city/delhi.png";
import kolkata from "../../public/assets/city/kolkata.png";
import hyderabad from "../../public/assets/city/hyderabad.png";
import pune from "../../public/assets/city/pune.png";
import patna from "../../public/assets/city/patna.png";
import jaipur from "../../public/assets/city/jaipur.png";
import banglore from "../../public/assets/city/banglore.png";
import ahmedabad from "../../public/assets/city/ahmedabad.png";
import chennai from "../../public/assets/city/chennai.png";
import indore from "../../public/assets/city/indore.png";
import lucknow from "../../public/assets/city/lucknow.png";

const Header = () => {
  const router = useRouter();
  // AOS.init();
  const [locationModal, setLocationModal] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);




  const inputText =
    "block lg:w-96 sm:30 px-4 py-2.5 bg-gray-100  text-sm shadow-sm placeholder-slate-500 focus:outline-none";
  return (
    <header className="sticky top-0 z-10 bg-white shadow-lg sm:w-full lg:px-28 md:px-6 lg:py-6 sm:px-4 sm:py-2">
      <div className="flex items-center justify-between ">
        <div className="flex items-center justify-center bg-center bg-cover logo lg:w-40 sm:w-24 lg:mt-1 sm:mt-2 ">
          <Link href={"/"}>
            <a>
              <Image alt="temp" src={logo} />
            </a>
          </Link>
        </div>
        <div className="flex flex-col pl-16 search sm:hidden lg:inline-block ">
          <div className="flex items-center justify-center lg:mb-4 sm:mb-0">
            <input
              type="text"
              className={inputText}
              placeholder="Search..."
            />
            <button className="px-4 py-2.5 text-gray-500 hover:text-blue-500 transition-all ease-in-out bg-gray-100">
              <IoSearch size={20}/>
            </button>
          </div>
          <div className="navLink space-x-8 pt-4 border-t-[1px] border-gray-200 font-semibold text-base  text-gray-500  lg:inline-block md:hidden sm:hidden ">
            <Link href={"/"}>
              <a className={`hover:text-blue-500 hover:underline  hover:underline-offset-8 hover:decoration-2 hover:decoration-orange-400 ${router.pathname == "/" ? "text-blue-500 underline underline-offset-8 decoration-2 decoration-orange-400" : "text-gray-500"}`} href="#">
                Home
              </a>
            </Link>
            <Link href={"/sell-old-mobile-phones"}>
              <a className={`hover:text-blue-500 hover:underline  hover:underline-offset-8 hover:decoration-2 hover:decoration-orange-400 ${router.pathname == "/sell-old-mobile-phones" ? "text-blue-500 underline underline-offset-8 decoration-2 decoration-orange-400" : "text-gray-500"}`} href="#">
                Sell
              </a>
            </Link>
            <Link href={"/"}>
              <a className={`hover:text-blue-500 hover:underline  hover:underline-offset-8 hover:decoration-2 hover:decoration-orange-400 ${router.pathname == "/buy" ? "text-blue-500 underline underline-offset-8 decoration-2 decoration-orange-400" : "text-gray-500"}`} href="#">
                Buy
              </a>
            </Link>
            <Link href={"/"}>
              <a className={`hover:text-blue-500 hover:underline  hover:underline-offset-8 hover:decoration-2 hover:decoration-orange-400 ${router.pathname == "/repair" ? "text-blue-500 underline underline-offset-8 decoration-2 decoration-orange-400" : "text-gray-500"}`} href="#">
                Repair
              </a>
            </Link>
            <Link href={"/"}>
              <a className={`hover:text-blue-500 hover:underline  hover:underline-offset-8 hover:decoration-2 hover:decoration-orange-400 ${router.pathname == "/about" ? "text-blue-500 underline underline-offset-8 decoration-2 decoration-orange-400" : "text-gray-500"}`} href="#">
                About
              </a>
            </Link>
            <Link href={"/"}>
              <a className={`hover:text-blue-500 hover:underline  hover:underline-offset-8 hover:decoration-2 hover:decoration-orange-400 ${router.pathname == "/franchise" ? "text-blue-500 underline underline-offset-8 decoration-2 decoration-orange-400" : "text-gray-500"}`} href="#">
                Franchise
              </a>
            </Link>
            <Link href={"/"}>
              <a className={`hover:text-blue-500 hover:underline  hover:underline-offset-8 hover:decoration-2 hover:decoration-orange-400 ${router.pathname == "/store" ? "text-blue-500 underline underline-offset-8 decoration-2 decoration-orange-400" : "text-gray-500"}`} href="#">
                Store
              </a>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center ">
          <div className="lg:mr-4 lg:inline-block sm:hidden">
            <button
              className="flex items-center p-2 text-sm font-semibold text-gray-600 lg:pl-0 sm:pl-28"
              onClick={() => {
                setLocationModal(true);
              }}
            >
              <span className="pr-1">
                <IoLocationOutline size={20}  />
              </span>
              Mumbai
              <span className="pl-1">
                <IoChevronDown size={16} />
              </span>
            </button>
          </div>
          <div>
            <button className="px-6 py-2 text-base font-semibold text-white bg-blue-500 rounded-md focus:outline-none sm:hidden lg:inline-flex hover:bg-blue-600 drop-shadow-lg hover:shadow-xl">
              Sign Up
            </button>
          </div>
        </div>

        <div className="text-blue-500 sm:inline-block lg:hidden">
          {!toggleMenu ? (
            <CgMenuRightAlt
              size={30}
              onClick={() => {
                setToggleMenu(true);
              }}
            />
          ) : (
            <IoClose
              size={30}
              onClick={() => {
                setToggleMenu(false);
              }}
            />
          )}
        </div>
      </div>
      {toggleMenu ? (
        <div className="mt-4 sm-menu" data-aos={"fade-up"}>
          <div className="navLink w-full h-screen flex flex-col p-6 space-y-8 border-t-[2px] border-gray-200 text-base font-semibold text-gray-500  lg:hidden md:hidden ">
          <div className="flex items-center justify-between">
          <div className="lg:mr-4">
            <button
              className="flex items-center p-2 text-base font-semibold text-blue-500 border border-blue-500 rounded-lg"
              onClick={() => {
                setLocationModal(true);
              }}
            >
              <span className="pr-1">
                <IoLocationOutline size={20}  />
              </span>
              Mumbai
              <span className="pl-1">
                <IoChevronDown size={20} />
              </span>
            </button>
          </div>
          <div>
            <button className="px-6 py-2 text-base font-semibold text-white bg-blue-500 rounded-md focus:outline-none hover:bg-blue-600 drop-shadow-lg hover:shadow-xl">
              Sign Up
            </button>
          </div>
        </div>
            <Link href={"/"}>
              <a className={`flex hover:text-blue-500 hover:underline  hover:underline-offset-8 hover:decoration-2 hover:decoration-orange-400 ${router.pathname == "/" ? "text-blue-500 underline underline-offset-8 decoration-2 decoration-orange-400" : "text-gray-500"}`} href="#">
                <IoHomeOutline size={25} className="mr-2" />
                Home
              </a>
            </Link>
            <Link href={"/sell-old-mobile-phones"}>
              <a className={`flex hover:text-blue-500 hover:underline  hover:underline-offset-8 hover:decoration-2 hover:decoration-orange-400 ${router.pathname == "/sell-old-mobile-phones" ? "text-blue-500 underline underline-offset-8 decoration-2 decoration-orange-400" : "text-gray-500"}`} href="#">
                <IoCashOutline size={25} className="mr-2" />
                Sell
              </a>
            </Link>
            <Link href={"/"}>
              <a className={`flex hover:text-blue-500 hover:underline  hover:underline-offset-8 hover:decoration-2 hover:decoration-orange-400 ${router.pathname == "/buy" ? "text-blue-500 underline underline-offset-8 decoration-2 decoration-orange-400" : "text-gray-500"}`} href="#">
                <IoCartOutline size={25} className="mr-2" />
                Buy
              </a>
            </Link>
            <Link href={"/"}>
              <a className={`flex hover:text-blue-500 hover:underline  hover:underline-offset-8 hover:decoration-2 hover:decoration-orange-400 ${router.pathname == "/repair" ? "text-blue-500 underline underline-offset-8 decoration-2 decoration-orange-400" : "text-gray-500"}`} href="#">
                <IoSettingsOutline size={25} className="mr-2" />
                Repair
              </a>
            </Link>
            <Link href={"/"}>
              <a className={`flex hover:text-blue-500 hover:underline  hover:underline-offset-8 hover:decoration-2 hover:decoration-orange-400 ${router.pathname == "/about" ? "text-blue-500 underline underline-offset-8 decoration-2 decoration-orange-400" : "text-gray-500"}`} href="#">
                <IoInformationCircleOutline size={25} className="mr-2" />
                About
              </a>
            </Link>
            <Link href={"/"}>
              <a className={`flex hover:text-blue-500 hover:underline  hover:underline-offset-8 hover:decoration-2 hover:decoration-orange-400 ${router.pathname == "/franchise" ? "text-blue-500 underline underline-offset-8 decoration-2 decoration-orange-400" : "text-gray-500"}`} href="#">
                <IoPeopleOutline size={25} className="mr-2" />
                Franchise
              </a>
            </Link>
            <Link href={"/"}>
              <a className={`flex hover:text-blue-500 hover:underline  hover:underline-offset-8 hover:decoration-2 hover:decoration-orange-400 ${router.pathname == "/store" ? "text-blue-500 underline underline-offset-8 decoration-2 decoration-orange-400" : "text-gray-500"}`} href="#">
                <IoStorefrontOutline size={25} className="mr-2" />
                Store
              </a>
            </Link>
            <Link href={"/"}>
              <a className={`flex hover:text-blue-500 hover:underline  hover:underline-offset-8 hover:decoration-2 hover:decoration-orange-400 ${router.pathname == "/contact-us" ? "text-blue-500 underline underline-offset-8 decoration-2 decoration-orange-400" : "text-gray-500"}`} href="#">
                <IoCallOutline size={25} className="mr-2" />
                Contact Us
              </a>
            </Link>
            
          </div>  
        </div>
      ) : null}
      {locationModal ? (
        <div >
          <div className="absolute top-0 left-0 z-20 w-full h-screen bg-gray-800 opacity-50 sm:hidden lg:inline-block"></div>
          <div className="absolute top-0 left-0 z-40 flex flex-col items-center w-full bg-white opacity-100 rounded-b-xl" data-aos={"fade-down"} >
            <div className="w-full flex justify-between lg:px-14 sm:px-4 sm:py-4 border-b-[1px] border-gray-200" >
              <div className="w-24">
                <Image alt="temp" src={logo} />
              </div>
              <div
                className="flex items-center justify-center text-blue-500 cursor-pointer"
                onClick={() => {
                  setLocationModal(false);
                }}
              >
                <IoClose size={30} />
              </div>
            </div>
            <div className="pt-6">
              <h1 className="text-xl font-semibold text-gray-600">
                Select Your City
              </h1>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center py-6 text-base font-semibold text-gray-600 lg:gap-4 sm:gap-2 gap-y-0 lg:px-10 sm:px-2">
              <div className="flex flex-col items-center justify-center p-2 cursor-pointer lg:w-20 sm:w-20 ">
                <div className="rounded-t-full bg-blue-100/50 "><Image alt="temp" src={mumbai} /></div>
                <h1>Mumbai</h1>
              </div>
              <div className="flex flex-col items-center justify-center p-2 cursor-pointer lg:w-20 sm:w-20">
                <Image alt="temp" src={delhi} />
                <h1>Delhi</h1>
              </div>
              <div className="flex flex-col items-center justify-center p-2 cursor-pointer lg:w-20 sm:w-20">
                <Image alt="temp" src={pune} />
                <h1>Pune</h1>
              </div>
              <div className="flex flex-col items-center justify-center p-2 cursor-pointer lg:w-20 sm:w-20">
                <Image alt="temp" src={ahmedabad} />
                <h1>Ahmedabad</h1>
              </div>
              <div className="flex flex-col items-center justify-center p-2 cursor-pointer lg:w-20 sm:w-20">
                <Image alt="temp" src={hyderabad} />
                <h1>Hyderabad</h1>
              </div>
              <div className="flex flex-col items-center justify-center p-2 cursor-pointer lg:w-20 sm:w-20">
                <Image alt="temp" src={kolkata} />
                <h1>Kolkata</h1>
              </div>
              <div className="flex flex-col items-center justify-center p-2 cursor-pointer lg:w-20 sm:w-20">
                <Image alt="temp" src={lucknow} />
                <h1>Lucknow</h1>
              </div>
              <div className="flex flex-col items-center justify-center p-2 cursor-pointer lg:w-20 sm:w-20">
                <Image alt="temp" src={patna} />
                <h1>Patna</h1>
              </div>
              <div className="flex flex-col items-center justify-center p-2 cursor-pointer lg:w-20 sm:w-20">
                <Image alt="temp" src={banglore} />
                <h1>Banglore</h1>
              </div>
              <div className="flex flex-col items-center justify-center p-2 cursor-pointer lg:w-20 sm:w-20">
                <Image alt="temp" src={indore} />
                <h1>Indore</h1>
              </div>
              <div className="flex flex-col items-center justify-center p-2 cursor-pointer lg:w-20 sm:w-20">
                <Image alt="temp" src={chennai} />
                <h1>Chennai</h1>
              </div>
              <div className="flex flex-col items-center justify-center p-2 cursor-pointer lg:w-20 sm:w-20">
                <Image alt="temp" src={jaipur} />
                <h1>Jaipur</h1>
              </div>
            </div>
            <div>
              <div className="flex py-6">
                <input
                  type="text bg-gray-300"
                  className={inputText}
                  placeholder="Search city by name"
                />
                <button className="px-4 py-3 bg-blue-500 border-2 rounded-r-lg">
                  <ioSearch size={20} className="text-white" />
                </button>
              </div>
            </div>
            <div>
              <p className="py-6 font-medium text-blue-500">
                <Link href={"/"}>
                  <a>View All Cities</a>
                </Link>
              </p>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
