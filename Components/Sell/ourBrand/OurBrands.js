import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { brandImg } from './imgdata'

const OurBrands = () => {
  return (
      <div>
        <h1 className='font-bold text-blue-500 lg:text-2xl sm:text-xl lg:mt-14 sm:mt-2 lg:mb-4 mx-28'>Our Brands</h1>
    <div id='brands' className='flex flex-wrap items-center justify-center lg:mx-16 sm:mx-2 lg:gap-10 sm:gap-0' >
        {brandImg.map((i,index)=>(
          <div key={index} className='lg:w-40 sm:w-28 lg:h-40 sm:h-28 lg:rounded-xl sm:rounded-none sm:border-[1px] lg:border-none sm:border-gray-100 lg:shadow-xl sm:shadow-none p-4  '>
          <Link href={"/sell-old-mobile-phones/select-brand"}>
              <a><Image alt="temp" className="duration-500 ease-in-out hover:scale-110 hover:transition-all" src={i.img}/></a>
          </Link>
          </div>
        ))}
    </div>
      </div>
  )
}

export default OurBrands