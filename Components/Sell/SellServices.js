import Image from 'next/image'
import React from 'react'


import img1 from "../../public/assets/sellphone_imgs/quick_and_easy_quotes_sell.webp"
import img2 from "../../public/assets/sellphone_imgs/assured_pickup_24hrs_sell.webp"
import img3 from "../../public/assets/sellphone_imgs/instant_cash_sell.webp"
import imgarrow from "../../public/assets/sellphone_imgs/Icon-awesome-arrow-right.webp"
import mobimg from "../../public/assets/get_highest_value_sell_hide.webp"

const SellServices = () => {
  return (
    <div>
        <div className='lg:hidden sm:inline-block text-center flex w-full items-center justify-center mt-6 text-xl font-semibold'>
            <p className='text-blue-500'>Get Highest Value On Your</p>
            <p className='text-orange-500'>Smartphone</p>
        </div>
        <div>
        <div className='bg-[#E8F9FF] mt-6'>
        <div className='pt-6'>
            <h1 className='font-bold lg:text-2xl sm:text-lg text-blue-500 text-center px-4'>WHY SELL YOUR PHONE TO QUICK MOBILE</h1>
        </div>
        <div className='sm:hidden lg:block'>
        <div className='flex items-center justify-around px-16 py-16 '>
        <div data-aos="zoom-in"
     data-aos-duration="1000" data-aos-delay="200">
            <div><Image src={img1} /></div>
        </div>
        <div  data-aos="zoom-in"
     data-aos-duration="1500" data-aos-delay="400">
            <div><Image src={imgarrow}/></div>
        </div>
        <div data-aos="zoom-in"
     data-aos-duration="2000" data-aos-delay="600">
            <div><Image src={img2} /></div>
        </div>
        <div data-aos="zoom-in"
     data-aos-duration="2500" data-aos-delay="1200">
        <div><Image src={imgarrow}/></div>
        </div>
        <div data-aos="zoom-in"
     data-aos-duration="3000" data-aos-delay="1400">
            <div><Image src={img3} /></div>
        </div>
        </div>
        </div>
        <div className='lg:hidden sm:block bg-[#E8F9FF] sm:mt-4'>
            <div>
                <Image src={mobimg}/>
            </div>
        </div>
    </div>
        </div>
    </div>
  )
}

export default SellServices