import Link from "next/link"
import { ImFacebook,ImInstagram,ImTwitter ,ImLinkedin} from 'react-icons/im';
import {IoChevronDown} from "react-icons/io5";
const Footer = () => {
  return (
    <footer className="relative left-0 bottom-0 w-full mt-6 border-t-[1px] border-gray-200">
        <div className="flex lg:flex-row flex-wrap sm:flex-col lg:justify-evenly lg:px-12 sm:px-6 lg:py-10 sm:py-6">
            <div className="flex flex-col text-gray-600 sm:text-center lg:text-left lg:p-10 md:p-8 sm:p-4 lg:gap-5 sm:gap-3">
              <div className="flex flex-col font-semibold text-base items-center justify-center"><p>Follow Us</p></div>
            <div className="flex gap-6 items-center justify-center">
            <Link href={'/'}><a href='#'><ImFacebook  size={25}/></a></Link>
            <Link href={'/'}><a href='#'><ImInstagram  size={25} /></a></Link>
            <Link href={'/'}><a href='#'><ImTwitter   size={25}/></a></Link>
            <Link href={'/'}><a href='#'><ImLinkedin   size={25}/></a></Link>
            </div>
            <div><button className="focus:outline-none bg-blue-500 text-white text-base py-2.5 lg:px-10 sm:px-14 rounded-md hover:shadow-xl font-semibold shadow-sm">Ask any Question</button></div>
            </div>
        <div className=" text-gray-600 sm:text-center lg:text-left lg:p-10 md:p-8 sm:p-4">
          <p className=" font-semibold text-base sm:text-center lg:text-left lg:pb-4 sm:pb-0">Services</p>
          <div className="flex flex-col text-sm lg:gap-3 sm:gap-1 ">
          <Link href={"/"}><a className="hover:text-blue-500">Sell Phone</a></Link>
          <Link href={"/"}><a className="hover:text-blue-500">Buy Phone</a></Link>
          <Link href={"/"}><a className="hover:text-blue-500">Repair Phone</a></Link>
          </div>
        </div>
        <div className=" text-gray-700 sm:text-center lg:text-left lg:p-10 md:p-8 sm:p-4">
          <p className=" font-semibold text-base sm:text-center lg:text-left lg:pb-4 sm:pb-0">Other links</p>
          <div className="flex flex-col text-sm lg:gap-3 sm:gap-1">
          <Link href={"/"}><a className="hover:text-blue-500">Sell Phone</a></Link>
          <Link href={"/"}><a className="hover:text-blue-500">Buy Phone</a></Link>
          <Link href={"/"}><a className="hover:text-blue-500">Repair Phone</a></Link>
          </div>
        </div>
        <div className=" text-gray-700 sm:text-center lg:text-left lg:p-10 md:p-8 sm:p-4">
          <p className=" font-semibold text-base sm:text-center lg:text-left lg:pb-4 sm:pb-0">Links</p>
          <div className="flex flex-col text-sm lg:gap-3 sm:gap-1">
          <Link href={"/"}><a className="hover:text-blue-500">Sell Phone</a></Link>
          <Link href={"/"}><a className="hover:text-blue-500">Buy Phone</a></Link>
          <Link href={"/"}><a className="hover:text-blue-500">Repair Phone</a></Link>
          </div>
        </div>
        <div className=" text-gray-700 sm:text-center lg:text-left lg:p-10 md:p-8 sm:p-4">
          <p className=" font-semibold text-base sm:text-center lg:text-left lg:pb-4 sm:pb-0">Help & Support</p>
          <div className="flex flex-col text-sm lg:gap-3 sm:gap-1">
          <Link href={"/"}><a className="hover:text-blue-500">Sell Phone</a></Link>
          <Link href={"/"}><a className="hover:text-blue-500">Buy Phone</a></Link>
          <Link href={"/"}><a className="hover:text-blue-500">Repair Phone</a></Link>
          </div>
        </div>
        
        </div>
        <div className="text-gray-700 text-xs flex items-center justify-center border-t-[1px] border-gray-200 "><p className="my-3">Quick Mobile LLP &copy; 2020 All Right Reserved</p></div>
    </footer>
  )
}

export default Footer