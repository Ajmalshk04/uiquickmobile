import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{Autoplay} from "swiper"
import "swiper/css";
import img1 from "../../../public/assets/upload/apple-iphone-7-1.png";


const Topsellingbrands = () =>  {
  SwiperCore.use([Autoplay])
  return (
    <div className="lg:container lg:mx-auto">
        <div className="lg:mx-10 sm:mx-2">
        <div className='w-full font-bold text-blue-500 lg:text-2xl sm:text-xl lg:text-left sm:pl-4 lg:pl-0'><p>Top Selling Modelss</p></div>
        <section className="flex w-full mt-4 lg:h-48 sm:h-36">
      <Swiper
      speed={3000}
        autoplay={{
          delay:3000
        }}
        breakpoints={{
          0:{
            slidesPerView:2.5,
            spaceBetween:10,
          },
          1200:{
            slidesPerView:7,
            spaceBetween:30,
          }
        }}
      >
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        <SwiperSlide>
          <div>{card()}</div> 
        </SwiperSlide>
        
      </Swiper>
    </section>
        </div>
    </div>
  );
};

const card=()=>{
    return(
        <div className="flex flex-col items-center justify-center w-full h-full bg-white rounded-xl drop-shadow-lg">
            <Link href={"/"}>
            <a className=' lg:p-4 sm:p-3'>
                <div className="lg:w-28 sm:w-20">
                <Image alt="temp" className="object-cover" src={img1}/>
                </div>
                <p className="text-center text-gray-500 lg:text-sm sm:text-xs">Apple Iphone 7</p>
            </a>
            </Link>
        
        </div>
    )
}
export default Topsellingbrands;
