import Image from 'next/image'
import CountUp from 'react-countup';
import aboutus from "../../../public/assets/whyus.webp"
import aboutusmob from "../../../public/assets/quick_mobile_hide.webp"
 
const AboutUs = () => {
  return (
    <section className='mt-6'>
      <div className='w-full mb-4 font-bold text-blue-500 lg:text-2xl sm:text-xl sm:pl-6 lg:pl-16 lg:text-left sm:text-center'>
        <p >Why Quick Mobile ?</p>
      </div>
      <div className='lg:inline-block sm:hidden'>
        <Image alt="temp" src={aboutus}/>
      </div>
      <div className='lg:hidden sm:inline-block'>
        <Image alt="temp" src={aboutusmob}/>
      </div>
      <div className='flex items-center justify-center w-full bg-gray-600 lg:h-48 sm:h-28'> 
        <div className='px-10 font-semibold leading-8 text-white lg:text-3xl sm:text-sm lg:text-left sm:text-center'>OVER 
        <span className='inline-flex mr-4 tracking-wider text-orange-400 lg:ml-4 sm:ml-2 lg:mb-4 lg:w-64 sm:w-24 lg:text-6xl sm:text-xl'>
          <CountUp enableScrollSpy={true} useEasing={true} duration={3} start={210000} end={216158} suffix={"+"} />
          </span> 
        CUSTOMER ACROSS INDIA,<br/>
QUICK MOBILE MAKES IT HAPPENED</div>
      </div>
    </section>
  )
}

export default AboutUs