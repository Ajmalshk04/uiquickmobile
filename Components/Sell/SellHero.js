import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiSearch } from "react-icons/fi";

import { IoCaretForwardOutline } from "react-icons/io5";

import ReactTypingEffect from 'react-typing-effect';

import img1 from "../../public/assets/brands-we-deal/apple.webp"
import img2 from "../../public/assets/brands-we-deal/samsung.webp"
import img3 from "../../public/assets/brands-we-deal/oneplus.webp"
import img4 from "../../public/assets/brands-we-deal/mi.webp"
import img5 from "../../public/assets/brands-we-deal/nokia.webp"

import imgbanner from "../../public/assets/sold_sell_side.webp"




const SellHero = () => {

  const inputText =
  "block lg:w-3/4 sm:w-64 px-4 py-3 bg-gray-100 border-2 border-blue-500 rounded-l-lg text-sm shadow-sm placeholder-slate-500 focus:outline-none focus:bg-white focus:ring-2";

  return (
    <div className="lg:container lg:mx-auto">
      <div className="lg:px-20 sm:px-4 lg:py-6 sm:py-2 mt-6 flex lg:flex-row sm:flex-col items-center">
        <div className="flex sm:order-2 lg:order-1">
        <div className="lg:w-[700px] sm:w-full sm:px-8 lg:px-0">
          <div className="">
            <div className="lg:text-3xl sm:text-xl font-semibold">
          SELL YOUR USED <br/>PHONE AND GET <br />
          
          <div>
          <ReactTypingEffect
          speed={100}
          eraseDelay={500}
          eraseSpeed={100}
          typingDelay={500}
        text={["HIGHEST VALUE,", "HASSLE FREE AND","ONE DAY PICKUP."]}
        cursorRenderer={cursor => <h1>{cursor}</h1>}
        displayTextRenderer={(text, i) => {
          return (
            <h1>
              {text.split('').map((char, i) => {
                const key = `${i}`;
                return (
                  <span
                    key={key}
                    
                    className="text-orange-500"
                  >{char}</span>
                );
              })}
            </h1>
          );
        }}        
      />
          </div>
            </div>
          </div>
          <div className=" flex lg:mb-4 sm:mb-0 mt-6">
          <input
            type="text bg-gray-300"
            className={inputText}
            placeholder="SEARCH MOBILE BRAND"
          />
          <button className="px-4 py-3 border-2 border-blue-500 rounded-r-lg bg-blue-500">
            <FiSearch size={20} className="text-white" />
          </button>
        </div>
        <div className="flex flex-wrap w-full items-center justify-center mt-4  ">
          <div className="flex gap-2">
          <Link href={"/"}><a className="lg:w-20 sm:w-14 lg:h-20 sm:h-14"><Image src={img1} /></a></Link>
          <Link href={"/"}><a className="lg:w-20 sm:w-14 lg:h-20 sm:h-14"><Image src={img2}/></a></Link>
          <Link href={"/"}><a className="lg:w-20 sm:w-14 lg:h-20 sm:h-14"><Image src={img3}/></a></Link>
          <Link href={"/"}><a className="lg:w-20 sm:w-14 lg:h-20 sm:h-14"><Image src={img4}/></a></Link>
          <Link href={"/"}><a className="lg:w-20 sm:w-14 lg:h-20 sm:h-14"><Image src={img5}/></a></Link>
          </div>
          <Link href={"#brands"}><a className="flex items-center justify-center font-semibold text-blue-500 underline  underline-offset-4 decoration-4 decoration-blue-500 mr-auto lg:pl-10 sm:pl-24 scroll-smooth lg:mt-0 sm:mt-10 "><span className="lg:hidden sm:inline-block">View&nbsp;</span>All Brands <IoCaretForwardOutline size={20}/></a></Link>
        </div>
        </div>
        </div>
        <div className="flex sm:order-1 lg:order-2">
        <div className="lg:w-full lg:h-96 sm:w-52 sm:ml-6 lg:mb-0 sm:mb-6 lg:pl-10"> <Image src={imgbanner}  /></div>
        </div>
      </div>

    </div>
  );
};

export default SellHero;
