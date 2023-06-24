import Image from 'next/image'
import CountUp from 'react-countup';
import aboutus from "../../../public/assets/whyus.webp"
import aboutusmob from "../../../public/assets/quick_mobile_hide.webp"
 
const AboutUs = () => {
  return (
    <section className='mt-6'>
      <div className='font-bold lg:text-2xl sm:text-xl text-blue-500 w-full sm:pl-6 lg:pl-16 mb-4 lg:text-left sm:text-center'>
        <p >Why Quick Mobile ?</p>
      </div>
      <div className='lg:inline-block sm:hidden'>
        <Image src={aboutus}/>
      </div>
      <div className='lg:hidden sm:inline-block'>
        <Image src={aboutusmob}/>
      </div>
      <div className='w-full lg:h-48 sm:h-28 bg-gray-600 flex items-center justify-center'> 
        <div className='font-semibold lg:text-3xl sm:text-sm text-white px-10 lg:text-left sm:text-center leading-8'>OVER 
        <span className='lg:ml-4 sm:ml-2 lg:mb-4 lg:w-64 sm:w-24 tracking-wider inline-flex text-orange-400 lg:text-6xl sm:text-xl mr-4'>
          <CountUp enableScrollSpy={true} useEasing={true} duration={3} start={210000} end={216158} suffix={"+"} />
          </span> 
        CUSTOMER ACROSS INDIA,<br/>
QUICK MOBILE MAKES IT HAPPENED</div>
      </div>
    </section>
  )
}

export default AboutUs