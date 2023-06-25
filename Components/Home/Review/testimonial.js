import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, EffectCoverflow } from "swiper";
// import "swiper/scss";

import { IoStar, IoStarHalf } from "react-icons/io5";

import profilepic from "../../../public/assets/Icon-material-account-circle.webp";

SwiperCore.use([Autoplay, EffectCoverflow]);
const Testimonial = () => {
  return (
    <div className="lg:container lg:mx-auto lg:mt-8 sm:mt-4">
      <div className="lg:mx-16 sm:mx-2">
        <div className="w-full font-bold text-blue-500 lg:text-2xl sm:text-xl lg:text-left sm:text-center">
          <p>Happy Customers</p>
        </div>
        <section className="relative flex flex-row w-full h-64">
          <Swiper
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: false,
            }}
            speed={3000}
            spaceBetween={50}
            autoplay={{
              delay: 3000,
            }}
            breakpoints={{
              0: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              600: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1200: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
          >
            <SwiperSlide>{card()}</SwiperSlide>
            <SwiperSlide>{card()}</SwiperSlide>
            <SwiperSlide>{card()}</SwiperSlide>
            <SwiperSlide>{card()}</SwiperSlide>
            <SwiperSlide>{card()}</SwiperSlide>
            <SwiperSlide>{card()}</SwiperSlide>
            <SwiperSlide>{card()}</SwiperSlide>
            <SwiperSlide>{card()}</SwiperSlide>
            <SwiperSlide>{card()}</SwiperSlide>
            <SwiperSlide>{card()}</SwiperSlide>
            <SwiperSlide>{card()}</SwiperSlide>
            <SwiperSlide>{card()}</SwiperSlide>
            <SwiperSlide>{card()}</SwiperSlide>
            <SwiperSlide>{card()}</SwiperSlide>
            <SwiperSlide>{card()}</SwiperSlide>
          </Swiper>
        </section>
      </div>
    </div>
  );
};

const card = () => {
  return (
    <div className="mt-4 bg-white drop-shadow-lg rounded-[25px] p-6">
      <div className="w-full h-58">
        <Link href={"/"}>
          <a className="">
            <div>
              <div className="flex items-center">
                <div>
                  <Image src={profilepic} alt="temp" />
                </div>
                <div className="pl-6 font-semibold">
                  <p>Person Name</p>
                  <p className="flex text-orange-400">
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStar />
                    <IoStarHalf />
                  </p>
                </div>
              </div>
              <div className="pl-20 text-sm">
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industrys
                  standard
                </p>
              </div>
            </div>
          </a>
        </Link>
      </div>
    </div>
  );
};
export default Testimonial;
