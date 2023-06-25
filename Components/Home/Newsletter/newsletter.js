import Image from 'next/image'
import imgMail from "../../../public/assets/join-newsletter.webp"


const Newsletter = () => {
    const inputText =
    "mt-4 block w-72 px-4 py-3 bg-white border border-slate-300 rounded-xl text-sm shadow-sm placeholder-slate-500 focus:outline-none focus:border-sky-500 focus:ring-2";

    return (
      <div className='lg:container lg:mx-auto lg:flex-row rounded-[25px]
      '>
      <div className='lg:mx-14 sm:mx-0 flex sm:flex-col lg:flex-row items-center justify-around bg-slate-100 rounded-[25px] p-6 relative z-0 overflow-hidden bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100 to-blue-50 '>
      <div className='flex flex-col sm:order-2 lg:order-1'>
      <p className='font-semibold text-blue-500 lg:text-2xl sm:text-sm'><span className='font-bold text-orange-400'>Join Our Newsletter,</span><br/> So That We Can Reach Out <br/> 
      To You With Our Best News And Offers</p>
      <input className={inputText} type="email" placeholder='Enter Your Email'/>
      <button className='mt-4 focus:outline-none text-white text-sm py-2.5 px-5 rounded-xl bg-blue-600 hover:bg-blue-500 hover:shadow-lg w-32'>Subscribe</button>
      </div>
      <div className='flex lg:my-0 sm:my-6 sm:order-1 lg:order-2'>
      <Image  alt="temp" className='' src={imgMail}/>
      </div>
      <div className="absolute rounded-full shadow-md lg:w-56 lg:h-56 sm:w-40 sm:h-40 bg-white/30 -top-10 -left-24 -z-10" />
    <div className="absolute rounded-full shadow-md w-72 h-72 sm:w-56 sm:h-56 bg-white/30 -bottom-14 -right-14 -z-10" />
      </div>
  </div>
  )
}

export default Newsletter