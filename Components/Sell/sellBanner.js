import Image from "next/image";
import img from "../../public/assets/selling_phone_simple_sell.webp"



const SellBanner = () => {
  return (
    <div className="lg:container lg:mx-auto">
        <div className="lg:m-10 sm:m-4 lg:py-4 sm:py-6 lg:px-16 sm:px-6 bg-slate-200 rounded-xl relative z-0 overflow-hidden bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-blue-100 to-blue-50">
      <div className="flex flex-wrap items-center lg:justify-around sm:justify-center">
      <div className="lg:w-1/2 sm:w-full flex flex-col justify-between lg:mr-36 sm:mr-0 lg:pr-36 sm:pr-0">
      <h1 className="lg:font-bold sm:font-semibold lg:text-2xl sm:text-lg text-blue-500 lg:pb-2 sm:pb-0">SELLING YOUR PHONE IS SIMPLE</h1>
        <p className="text-gray-600 text-lg">
          <span className="font-semibold ">
            Sold <span className="text-blue-500 lg:text-4xl sm:text-2xl">10000</span> Mobile Phones
          </span><br/>
          <span className="font-semibold">Updated Hourly From Our Live Mobile Recycle Comparison Site Data</span><br />
          <span className="font-semibold mt-2">SELLING YOUR PHONE TODAY !</span>
        </p>
      </div>
      <div className="flex lg:w-48 sm:w-28 items-center justify-center sm:pt-6 lg:pt-0">
        <div><Image src={img}/></div>
      </div>
      </div>
      <div className="absolute lg:w-56 lg:h-56 sm:w-40 sm:h-40 rounded-full bg-white/70 -top-10 -left-24 -z-10  shadow-md" />
    <div className="absolute w-72 h-72 sm:w-56 sm:h-56 rounded-full bg-white/70 -bottom-14 -right-14 -z-10  shadow-md" />
    </div>
    </div>
  );
};

export default SellBanner;
