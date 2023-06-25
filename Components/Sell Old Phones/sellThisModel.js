import Image from 'next/image'
import React from 'react'
import img1 from "../../public/assets/upload/apple-iphone-11-1.jpg";

import BrandDeals from "../Home/BrandDeals/branddeals"
import Topsellingbrands from "../Home/TopSellingModels/topsellingmodels" 
import Breadcrumb from "../_child/Breadcrumb";


const SellThisModel = () => {
  const inputText =
  "block w-96 px-4 py-3  border border-slate-300 rounded-l-lg text-sm shadow-sm placeholder-slate-500 focus:outline-none focus:bg-white focus:ring-2";
return (
  <div className='lg:container lg:mx-auto '>
      <div className='lg:mx-16 sm:mx-4'>
      <div className="flex justify-between mt-10 lg:inline-block sm:hidden">
      <div>
      <h1 className="pl-4 font-bold text-blue-500 lg:text-3xl sm:text-2xl">
      Sell Old Mobile Phone
    </h1>
    <div>
      <Breadcrumb />
    </div>
      </div>
    </div>
      <div className='flex flex-wrap items-center shadow-xl lg:m-14 sm:m-4 lg:p-10 sm:p-4 lg:justify-evenly sm:justify-center rounded-xl'>
          <div className=''><Image alt="temp" src={img1}/></div>
          <div className='lg:border-l-[1px] sm:border-l-none border-gray-300 h-44'></div>
          <div className='text-center'>
              <p className='mb-6 font-semibold lg:text-2xl sm:text-xl '>
              Sell Old This Model (Model Name)
              </p>
              <p className='mb-6 font-semibold text-blue-500 lg:text-3xl sm:text-2xl'>Get Upto : <span>₹ 35000/-</span></p>
              <button className='bg-blue-500 px-4 py-2.5 text-white font-medium rounded-xl' >Continue</button>
          </div>
      </div>
      <BrandDeals />
    <Topsellingbrands />
      </div>
  </div>
)
}

export default SellThisModel