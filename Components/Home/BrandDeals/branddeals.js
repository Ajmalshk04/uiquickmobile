import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{Autoplay} from "swiper"
import "swiper/css";
import img1 from "../../../public/assets/brands-we-deal/samsung.webp";


const BrandDeals = () => {
  SwiperCore.use([Autoplay])
  return (
    <div className="lg:container lg:mx-auto lg:mt-8 sm:mt-4">
        <div className="lg:mx-10 sm:mx-2">
        <div className='w-full font-bold text-blue-500 lg:text-2xl sm:text-xl lg:text-left sm:pl-4 lg:pl-0 '><p>Brand Deals</p></div>
        <section className="relative flex flex-row w-full h-auto my-2">
      <Swiper
      speed={3000}
        autoplay={{
          delay:3000
        }}
        breakpoints={{
          0:{
            slidesPerView:4,
            spaceBetween:0,
  
          },
          1200:{
            slidesPerView:8,
            spaceBetween:0,
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
        
      </Swiper>
    </section>
        </div>
    </div>
  );
};

const card=()=>{
    return(
        <div className="">
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
export default BrandDeals;
