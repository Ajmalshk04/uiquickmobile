import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore,{Autoplay} from "swiper"
import "swiper/css";
import img1 from "../../../public/assets/banner/Buy-quick-mobile-banner.jpg";
import img2 from "../../../public/assets/banner/Repair-phone-banner.jpg";
import img3 from "../../../public/assets/banner/sell-old-phone-banner.jpg";
import imgsm1 from "../../../public/assets/become-partner.webp";
import imgsm2 from "../../../public/assets/SellPhone.webp";
import imgsm3 from "../../../public/assets/BuyPhone.webp";

const Banner = () => {
  SwiperCore.use([Autoplay])
  return (
    <>
    <section className="flex flex-row w-full h-auto lg:inline-block sm:hidden">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay:2000,
          
        }}
        speed={3000}
      > 
        <SwiperSlide>
          <div>
          <Link href={"/"}>
            <a>
              <Image src={img1}  />
            </a>
          </Link>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <Link href={"/"}>
            <a>
              <Image src={img2} />
            </a>
          </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div>
          <Link href={"/"}>
            <a>
              <Image src={img3} />
            </a>
          </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    <section className="flex flex-row w-full h-auto lg:hidden sm:inline-block">
    <Swiper
        spaceBetween={0}
        slidesPerView={1.1}
        autoplay={{
          delay:3000
        }}
      > 
        <SwiperSlide>
          <div className="rounded-xl">
          <Link href={"/"}>
            <a>
              <Image src={imgsm1} className="bg-cover bg-center rounded-xl p-4" />
            </a>
          </Link>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded-xl">
          <Link href={"/"}>
            <a>
              <Image src={imgsm2} />
            </a>
          </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="rounded-xl">
          <Link href={"/"}>
            <a>
              <Image src={imgsm3} />
            </a>
          </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
    </>
  );
};

export default Banner;
