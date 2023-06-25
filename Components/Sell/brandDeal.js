import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{Autoplay} from "swiper"
import "swiper/css";
import img1 from "../../public/assets/brands-we-deal/samsung.webp";


const BrandDeal = () => {
  SwiperCore.use([Autoplay])
  return (
    <div className="px-16 mt-8 lg:container lg:mx-auto py-14">
        <section className="relative flex flex-row w-full h-auto">
        <div className='absolute top-0 w-full text-3xl font-bold text-blue-500 '><p>Brands We Deal</p></div>
      <Swiper
        spaceBetween={0}
        slidesPerView={10}
        autoplay={{
          delay:3000
        }}
      >
        <SwiperSlide>
          {card()}
        </SwiperSlide>
        <SwiperSlide>
          {card()}
        </SwiperSlide>
        <SwiperSlide>
          {card()}
        </SwiperSlide>
        <SwiperSlide>
          {card()}
        </SwiperSlide>
        <SwiperSlide>
          {card()}
        </SwiperSlide>
        <SwiperSlide>
          {card()}
        </SwiperSlide>
        <SwiperSlide>
          {card()}
        </SwiperSlide>
        <SwiperSlide>
          {card()}
        </SwiperSlide>
        <SwiperSlide>
          {card()}
        </SwiperSlide>
        <SwiperSlide>
          {card()}
        </SwiperSlide>
        <SwiperSlide>
          {card()}
        </SwiperSlide>
        <SwiperSlide>
          {card()}
        </SwiperSlide>
        <SwiperSlide>
          {card()}
        </SwiperSlide>
      </Swiper>
    </section>
    </div>
  );
};

const card=()=>{
    return(
        <div className="mt-14">
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
export default BrandDeal;
