import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{Autoplay} from "swiper"
import "swiper/css";
import img1 from "../../../public/assets/Amazing offers/Repair_phone_cards.jpg";


const Offerbanner = () => {
  SwiperCore.use([Autoplay])
  return (
    <div className="lg:container lg:mx-auto lg:mt-6 sm:mt-2">
        <div className="lg:mx-16">
        <div className='w-full font-bold text-blue-500 lg:text-2xl sm:text-xl lg:text-left sm:text-center'><p>Amazing Offers</p></div>
        <section className="relative flex w-full sm:h-full">
      <Swiper
      speed={3000}
      slidesPerView={3}
        autoplay={{
          delay:3000
        }}
        breakpoints={{
          0:{
            slidesPerView:1,
            spaceBetween:0,
  
          },
          1200:{
            slidesPerView:3,
            spaceBetween:20,
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
         
        
      </Swiper>
    </section>
        </div>
    </div>
  );
};

const card=()=>{
    return(
        <div className="mt-4">
           <div className="w-full h-auto rounded-xl">
          <Link href={"/"}>
            <a className="">
              <Image alt="temp" src={img1}  />
            </a>
          </Link>
          </div> 
        </div>
    )
}
export default Offerbanner;
