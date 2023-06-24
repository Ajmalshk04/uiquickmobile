import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{Autoplay} from "swiper"
import "swiper/css";
import img1 from "../../public/assets/brands-we-deal/samsung.webp";


const BrandDeal = () => {
  SwiperCore.use([Autoplay])
  return (
    <div className="lg:container lg:mx-auto mt-8 px-16 py-14">
        <section className="flex flex-row relative w-full h-auto">
        <div className='absolute top-0 font-bold text-3xl text-blue-500 w-full '><p>Brands We Deal</p></div>
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
              <Image src={img1}  />
            </a>
          </Link>
          </div> 
        </div>
    )
}
export default BrandDeal;
