import Image from "next/image";
import Link from "next/link";

import img1 from "../../public/assets/upload/apple-iphone-11-1.jpg";
import { FiSearch } from "react-icons/fi";
import BrandDeals from "../Home/BrandDeals/branddeals"
import Topsellingbrands from "../Home/TopSellingModels/Topsellingmodels" 
import Breadcrumb from "../_child/Breadcrumb";

// import { productList } from './SelectProducts'

const SelectProduct = () => {

  const inputText =
    "w-96 px-4 py-0  border border-slate-300 rounded-l-lg text-sm shadow-sm placeholder-slate-500 focus:outline-none focus:bg-white focus:ring-2";
  return (
    <div className="mx-auto mt-10 lg:container ">
      <div className="flex justify-between lg:flex-row sm:flex-col lg:px-10 sm:p-4">
        <div className="flex flex-col lg:inline-block sm:hidden">
        <h1 className="pl-4 text-3xl font-bold text-blue-500">
        Sell Old Mobile Phone
      </h1>
      <div>
        <Breadcrumb />
      </div>
        </div>
        <div className="flex h-12 lg:w-1/4 sm:w-full">
                <input type="text bg-gray-300" className={inputText} placeholder="Search..." />
                    <button className="px-4 py-3 bg-blue-500 border-2 rounded-r-lg"><FiSearch  size={20} className="text-white"/></button> 
        </div>
      </div>
      <div>
        <div className="lg:mt-14 sm:mt-4 lg:mx-10 sm:mx-0">
          <h1 className="pl-4 font-bold text-blue-500 lg:text-3xl sm:text-xl">
            Select Series
          </h1>
          <div className="flex flex-wrap items-center justify-center lg:p-8 sm:p-2 lg:gap-x-6 sm:gap-x-4 lg:gap-y-4 sm:gap-y-2">
            {selectSeries()}
            {selectSeries()}
            {selectSeries()}
            {selectSeries()}
            {selectSeries()}
            {selectSeries()}
            {selectSeries()}
            {selectSeries()}
            {selectSeries()}
          </div>
        </div>
      </div>
      <div className="mt-10 lg:mx-10 sm:mx-0">
        <h1 className="pl-4 font-bold text-blue-500 lg:text-3xl sm:text-xl ">
          Select Product
        </h1>
        <div id="brands" className="flex flex-wrap items-center justify-center mt-4 lg:gap-x-6 sm:gap-x-0 lg:gap-y-4 sm:gap-y-0 lg:px-0 sm:px-2">
          {card()}
          {card()}
          {card()}
          {card()}
          {card()}
          {card()}
          {card()}
          {card()}
          {card()}
          
        </div>
      </div>
      <BrandDeals />
      <Topsellingbrands />
    </div>
  );
};

const card = () => {
  return (
    <div className=" border-2 rounded-xl lg:p-4 sm:p-1 lg:w-48 sm:w-28 lg:border-2 bg-white border-gray-200 hover:text-blue-500 hover:border-blue-500 text-gray-900 hover:font-semibold hover:scale-110 transition-all ease-in-out lg:rounded-xl sm:rounded-none sm:border-[1px] ">
      <Link href={"/"}>
        <a className="flex flex-col items-center justify-center">
          <div className="object-contain ">
            <Image alt="temp" src={img1}/>
          </div>
          <div className="flex flex-wrap text-center sm:text-sm lg:text-base"><p>Iphone 11 pro max</p></div>
        </a>
      </Link>
    </div>
  );
};

const selectSeries = () => {
  return(<div className="">
  <div className="border-2 border-gray-400  text-gray-500 font-medium lg:text-lg sm:text-base   hover:border-blue-500 hover:text-blue-500 hover:scale-110 transition-all ease-in-out lg:px-20 sm:px-6 py-2.5 rounded-lg ">
    <Link href={"/sell-old-mobile-phones/select-brand/select-brand-model"}>
      <a>
        <p className="">Select Series</p>
      </a>
    </Link>
  </div>
</div>)
};
export default SelectProduct;

