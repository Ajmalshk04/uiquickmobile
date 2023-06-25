import Image from 'next/image'
import Link from 'next/link'

import img1 from "../../../public/assets/sellMethod/selectphone_hide_ourservices.jpg"
import step1 from "../../../public/assets/sellMethod/step1_hide_ourservices.png"
import img2 from "../../../public/assets/sellMethod/EvaluatePhone_hide_ourservices.jpg"
import step2 from "../../../public/assets/sellMethod/step2_hide_ourservices.png"
import img3 from "../../../public/assets/sellMethod/fast_free_pickup_hide_ourservices.jpg"
import step3 from "../../../public/assets/sellMethod/step3_hide_ourservices.png"
import img4 from "../../../public/assets/sellMethod/instantcash_hide_ourservices.jpg"
import step4 from "../../../public/assets/sellMethod/step4_hide_ourservices.png"

const SellMethod = () => {
  return (
    <section className='lg:container lg:mx-auto lg:mt-16 sm:mt-6'>
        <div className='lg:mx-10'>
        <div className='w-full font-bold text-blue-500 lg:text-2xl sm:text-xl lg:text-left sm:text-center'><p>Selling Phone Quick And Easy</p></div>
        <div className='relative flex flex-wrap items-center justify-center w-full h-auto bg-white rounded-lg lg:px-10 sm:px-2 lg:py-10 sm:py-6 lg:gap-14 sm:gap-2'>
        <div className='bg-white lg:rounded-[25px]  lg:drop-shadow-md' data-aos="zoom-in"
     data-aos-duration="1000" data-aos-delay="100">
            <div className='flex items-center lg:flex-col sm:flex-row lg:w-72 lg:h-72 sm:h-auto lg:px-6 sm:px-2 lg:justify-center lg:text-center sm:text-left lg:gap-3 sm:gap-2'>
                <div className='bg-cover lg:w-16 sm:w-24'>
                <Image alt="temp" src={img1}/>
                </div>
                <div className='bg-cover lg:w-8 sm:w-16'>
                <Image alt="temp" src={step1}/>
                </div>
                <div className='flex flex-col justify-center'>
                <p className='text-gray-600  lg:font-bold sm:font-semibold'>Select Phone</p>
                <p className='text-gray-900  sm:text-sm'>Select Device Select Your Brand And Model No Of Phone To Sell.</p>
                </div>     
            </div>
        </div>
        <div className='bg-white lg:rounded-[25px]  lg:drop-shadow-md' data-aos="zoom-in"
     data-aos-duration="1500" data-aos-delay="200">
            <div className='flex items-center lg:flex-col sm:flex-row lg:w-72 lg:h-72 sm:h-auto lg:px-6 sm:px-2 lg:justify-center lg:text-center sm:text-left lg:gap-3 sm:gap-2'>
                <div className='bg-cover lg:w-16 sm:w-24'>
                <Image alt="temp" src={img2}/>
                </div>
                <div className='bg-cover lg:w-8 sm:w-16'>
                <Image alt="temp" src={step2}/>
                </div>
                <div className='flex flex-col justify-center'>
                <p className='text-gray-600  lg:font-bold sm:font-semibold'>Evaluate Phone</p>
                <p className='text-gray-900  sm:text-sm'>Select Mobile Overall Condition, Accessories And Warranty To Get Exact Price For Your Used Phone.</p>
                </div>     
            </div>
        </div>
        <div className='bg-white lg:rounded-[25px]  lg:drop-shadow-md' data-aos="zoom-in"
     data-aos-duration="2000" data-aos-delay="300">
            <div className='flex items-center lg:flex-col sm:flex-row lg:w-72 lg:h-72 sm:h-auto lg:px-6 sm:px-2 lg:justify-center lg:text-center sm:text-left lg:gap-3 sm:gap-2'>
                <div className='bg-cover lg:w-16 sm:w-24'>
                <Image alt="temp" src={img3}/>
                </div>
                <div className='bg-cover lg:w-8 sm:w-16'>
                <Image alt="temp" src={step3}/>
                </div>
                <div className='flex flex-col justify-center'>
                <p className='text-gray-600  lg:font-bold sm:font-semibold'>Fast And Free Pickup</p>
                <p className='text-gray-900  sm:text-sm'>Our Pickup Executive Will Dopickup From Your Convenient Place Within 24 Hours</p>
                </div>     
            </div>
        </div>
        <div className='bg-white lg:rounded-[25px]  lg:drop-shadow-md' data-aos="zoom-in"
     data-aos-duration="2500" data-aos-delay="400">
            <div className='flex items-center lg:flex-col sm:flex-row lg:w-72 lg:h-72 sm:h-auto lg:px-6 sm:px-2 lg:justify-center lg:text-center sm:text-left lg:gap-3 sm:gap-2'>
                <div className='bg-cover lg:w-16 sm:w-24'>
                <Image alt="temp" src={img4}/>
                </div>
                <div className='bg-cover lg:w-8 sm:w-16'>
                <Image alt="temp" src={step4}/>
                </div>
                <div className='flex flex-col justify-center'>
                <p className='text-gray-600  lg:font-bold sm:font-semibold'>Instant Cash</p>
                <p className='text-gray-900  sm:text-sm'>Instant Cash Or Online Payment Will Made Immediately As Soon Pickup Had Been Done By Pickup Executive</p>
                </div>     
            </div>
        </div>
       
        </div>
        </div>
    </section>
  )
}

export default SellMethod