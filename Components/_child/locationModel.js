import React,{useState} from "react";

import { FaTimes } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { FiSearch } from "react-icons/fi";
import logo from "../../public/assets/logos.webp"
import mumbai from "../../public/assets/city/mumbai.png"
import delhi from "../../public/assets/city/delhi.png"
import kolkata from "../../public/assets/city/kolkata.png"
import hyderabad from "../../public/assets/city/hyderabad.png"
import pune from "../../public/assets/city/pune.png"
import patna from "../../public/assets/city/patna.png"
import jaipur from "../../public/assets/city/jaipur.png"
import banglore from "../../public/assets/city/banglore.png"
import ahmedabad from "../../public/assets/city/ahmedabad.png"
import chennai from "../../public/assets/city/chennai.png"
import indore from "../../public/assets/city/indore.png"
import lucknow from "../../public/assets/city/lucknow.png"


const LocationModel = () => {
  const [locationModal, setLocationModal] = useState(false);

const inputText =
    "block w-96 px-4 py-3  border border-slate-300 rounded-l-lg text-sm shadow-sm placeholder-slate-500 focus:outline-none focus:bg-white focus:ring-2";

  return (
    <div>
        <div className="absolute top-0 left-0 z-20 w-full h-screen bg-gray-800 opacity-50">   
        </div>
        <div className="absolute top-0 z-40 flex flex-col items-center w-full bg-white opacity-100 rounded-b-xl">  
            <div className="w-full flex justify-between px-14 pt-4  border-b-[1px] border-gray-200">
                <div><Image alt="temp" src={logo}/></div>
                <div className="text-gray-700 cursor-pointer"
                // onClick={()=>{setLocationModal(true)}}
                ><FaTimes size={30}/></div>
            </div>
            <div className="pt-6">
                <h1 className="text-xl font-semibold text-gray-600">Select Your City</h1>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-4 px-10 py-6 text-sm gap-y-0">
            <div className="flex flex-col items-center justify-center p-2 w-28">
                <Image alt="temp" src={mumbai}/>
                <h1>Mumbai</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-28">
                <Image alt="temp" src={delhi}/>
                <h1>Delhi</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-28">
                <Image alt="temp" src={pune}/>
                <h1>Pune</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-28">
                <Image alt="temp" src={ahmedabad}/>
                <h1>Ahmedabad</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-28">
                <Image alt="temp" src={hyderabad}/>
                <h1>Hyderabad</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-28">
                <Image alt="temp" src={kolkata}/>
                <h1>Kolkata</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-28">
                <Image alt="temp" src={lucknow}/>
                <h1>Lucknow</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-28">
                <Image alt="temp" src={patna}/>
                <h1>Patna</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-28">
                <Image alt="temp" src={banglore}/>
                <h1>Banglore</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-28">
                <Image alt="temp" src={indore}/>
                <h1>Indore</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-28">
                <Image alt="temp" src={chennai}/>
                <h1>Chennai</h1>
            </div>
            <div className="flex flex-col items-center justify-center p-2 w-28">
                <Image alt="temp" src={jaipur}/>
                <h1>Jaipur</h1>
            </div>
            </div>
            <div>
            <div className="flex py-6">
                <input type="text bg-gray-300" className={inputText} placeholder="Search city by name" />
                    <button className="px-4 py-3 bg-blue-500 border-2 rounded-r-lg"><FiSearch  size={20} className="text-white"/></button> 
              </div>
            </div>
            <div>
                <p className="py-6 font-medium text-blue-500"><Link href={"/"}><a>View All Cities</a></Link></p>
            </div>
        </div>
    </div>
    
  );
};

export default LocationModel;




// <div>
//       {/* second modal */}
//       {showModal ? (
//         <div className="flex flex-col items-center justify-center w-1/2 h-auto p-2 mt-10 rounded-lg shadow-xl">
//           <div className="flex gap-4">
//             <div>
//                 <Image alt="temp" src={mumbai}/>
//                 <h1>Mumbai</h1>
//             </div>
//             <div>
//                 <Image alt="temp" src={delhi}/>
//                 <h1>Delhi</h1>
//             </div>
//             <div>
//                 <Image alt="temp" src={pune}/>
//                 <h1>Pune</h1>
//             </div>
//             <div>
//                 <Image alt="temp" src={ahmedabad}/>
//                 <h1>Ahmedabad</h1>
//             </div>
//             <div>
//                 <Image alt="temp" src={hyderabad}/>
//                 <h1>Hyderabad</h1>
//             </div>
//             <div>
//                 <Image alt="temp" src={kolkata}/>
//                 <h1>Kolkata</h1>
//             </div>
//             <div>
//                 <Image alt="temp" src={lucknow}/>
//                 <h1>Lucknow</h1>
//             </div>
//             <div>
//                 <Image alt="temp" src={patna}/>
//                 <h1>Patna</h1>
//             </div>
//             <div>
//                 <Image alt="temp" src={banglore}/>
//                 <h1>Banglore</h1>
//             </div>
//             <div>
//                 <Image alt="temp" src={indore}/>
//                 <h1>Indore</h1>
//             </div>
//             <div>
//                 <Image alt="temp" src={chennai}/>
//                 <h1>Chennai</h1>
//             </div>
//             <div>
//                 <Image alt="temp" src={jaipur}/>
//                 <h1>Jaipur</h1>
//             </div>
//             {/* <button
//               className="w-auto h-10 px-8 my-5 font-semibold text-white bg-blue-600 rounded-md shadow hover:shadow-lg"
//               onClick={() => setShowModal(false)}
//             >
//               Claim Now
//             </button>
//             <button
//               className="w-auto h-10 px-12 my-5 font-semibold text-red-600 border border-red-100 rounded-md  hover:bg-red-700 hover:text-white hover:shadow-lg"
//               onClick={() => setShowModal(false)}
//             >
//               Close
//             </button> */}
//           </div>
//         </div>
//       ) : null}
//     </div>
