import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { brandImg } from './imgdata'

const OurBrands = () => {
  return (
      <div>
        <h1 className='font-bold lg:text-2xl sm:text-xl text-blue-500 lg:mt-14 sm:mt-2 lg:mb-4 mx-28'>Our Brands</h1>
    <div id='brands' className='lg:mx-16 sm:mx-2 flex flex-wrap lg:gap-10 sm:gap-0  items-center justify-center' >
        {brandImg.map(i=>(
          <div className='lg:w-40 sm:w-28 lg:h-40 sm:h-28 lg:rounded-xl sm:rounded-none sm:border-[1px] lg:border-none sm:border-gray-100 lg:shadow-xl sm:shadow-none p-4  '>
          <Link href={"/sell-old-mobile-phones/select-brand"}>
              <a><Image className="hover:scale-110 hover:transition-all ease-in-out duration-500" src={i.img}/></a>
          </Link>
          </div>
        ))}
    </div>
      </div>
  )
}

export default OurBrands