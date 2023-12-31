import Image from 'next/image'
import Link from 'next/link'

import img1 from "../public/assets/services/sell_used_phone_ourservices.jpg"
import img2 from "../public/assets/services/repair_phone_ourservices.jpg"
import img3 from "../public/assets/services/buy_used_phone_ourservices.jpg"


const Services = () => {
    
  return (
    <section className='lg:container lg:mx-auto'>
        <div className='lg:mx-10 sm:mx-2'>
        <div className='mt-4 font-bold text-blue-500 lg:text-2xl sm:text-xl lg:text-left sm:text-center'><p>Our Services</p></div>
        <div className='flex flex-wrap lg:gap-6 sm:gap-4 w-full h-auto lg:px-20 sm:px-2 lg:py-10 sm:py-2 rounded-[25px] items-center justify-center mt-4 relative z-0 overflow-hidden bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-sky-200 to-blue-100'>
        <div className=' bg-white  lg:rounded-[15px] sm:rounded-xl drop-shadow-lg hover:scale-110 transition  ease-out sm:w-24 sm:h-auto lg:w-48 lg:h-48 '>
            <Link href={"/"}>
                <a>
                    <div className='flex flex-col items-center justify-center lg:p-6 sm:p-2'>
                    <div className='object-cover lg:w-24 sm:w-10'>
                        <Image src={img1} alt='img'/>
                    </div>
                    <div className='text-center text-gray-900 lg:font-semibold sm:text-xs lg:text-base lg:mt-2 sm:mt-1'><p>Sell Used Phones</p>
                    </div>
                    </div>
                </a>
            </Link>
        </div>
        <div className=' bg-white  lg:rounded-[15px] sm:rounded-xl drop-shadow-lg hover:scale-110 transition  ease-out sm:w-24 sm:h-auto lg:w-48 lg:h-48 '>
            <Link href={"/"}>
                <a>
                    <div className='flex flex-col items-center justify-center lg:p-6 sm:p-2'>
                    <div className='object-cover lg:w-24 sm:w-10'>
                        <Image src={img3} alt='img3'/>
                    </div>
                    <div className='text-center text-gray-900 lg:font-semibold sm:text-xs lg:text-base lg:mt-2 sm:mt-1'><p>Sell Used Phones</p>
                    </div>
                    </div>
                </a>
            </Link>
        </div>
        <div className=' bg-white  lg:rounded-[15px] sm:rounded-xl drop-shadow-lg hover:scale-110 transition  ease-out sm:w-24 sm:h-auto lg:w-48 lg:h-48 '>
            <Link href={"/"}>
                <a>
                    <div className='flex flex-col items-center justify-center lg:p-6 sm:p-2'>
                    <div className='object-cover lg:w-24 sm:w-10'>
                        <Image src={img1} alt='img'/>
                    </div>
                    <div className='text-center text-gray-900 lg:font-semibold sm:text-xs lg:text-base lg:mt-2 sm:mt-1'><p>Sell Used Phones</p>
                    </div>
                    </div>
                </a>
            </Link>
        </div>
        <div className=' bg-white  lg:rounded-[15px] sm:rounded-xl drop-shadow-lg hover:scale-110 transition  ease-out sm:w-24 sm:h-auto lg:w-48 lg:h-48 '>
            <Link href={"/"}>
                <a>
                    <div className='flex flex-col items-center justify-center lg:p-6 sm:p-2'>
                    <div className='object-cover lg:w-24 sm:w-10'>
                        <Image src={img1} alt='img'/>
                    </div>
                    <div className='text-center text-gray-900 lg:font-semibold sm:text-xs lg:text-base lg:mt-2 sm:mt-1'><p>Sell Used Phones</p>
                    </div>
                    </div>
                </a>
            </Link>
        </div>
        <div className=' bg-white  lg:rounded-[15px] sm:rounded-xl drop-shadow-lg hover:scale-110 transition  ease-out sm:w-24 sm:h-auto lg:w-48 lg:h-48 '>
            <Link href={"/"}>
                <a>
                    <div className='flex flex-col items-center justify-center lg:p-6 sm:p-2'>
                    <div className='object-cover lg:w-24 sm:w-10'>
                        <Image src={img1} alt='img'/>
                    </div>
                    <div className='text-center text-gray-900 lg:font-semibold sm:text-xs lg:text-base lg:mt-2 sm:mt-1'><p>Sell Used Phones</p>
                    </div>
                    </div>
                </a>
            </Link>
        </div>
        <div className=' bg-white  lg:rounded-[15px] sm:rounded-xl drop-shadow-lg hover:scale-110 transition  ease-out sm:w-24 sm:h-auto lg:w-48 lg:h-48 '>
            <Link href={"/"}>
                <a>
                    <div className='flex flex-col items-center justify-center lg:p-6 sm:p-2'>
                    <div className='object-cover lg:w-24 sm:w-10'>
                        <Image src={img3} alt='img'/>
                    </div>
                    <div className='text-center text-gray-900 lg:font-semibold sm:text-xs lg:text-base lg:mt-2 sm:mt-1'><p>Sell Used Phones</p>
                    </div>
                    </div>
                </a>
            </Link>
        </div>       
        
        
        <div className="absolute rounded-full shadow-md lg:w-56 lg:h-56 sm:w-40 sm:h-40 bg-white/50 -top-10 -left-24 -z-10" />
    <div className="absolute rounded-full shadow-md w-72 h-72 sm:w-56 sm:h-56 bg-white/50 -bottom-14 -right-14 -z-10" />
        </div>
        </div>
    </section>
  )
}

export default Services


// bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-500 to-orange-300

{/* <div className="absolute rounded-full shadow-md lg:w-80 lg:h-80 sm:w-40 sm:h-40 bg-white/50 -top-10 -left-24 -z-10" />
    <div className="absolute rounded-full shadow-md w-72 h-72 sm:w-56 sm:h-56 bg-white/50 -bottom-14 -right-14 -z-10" /> */}