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
        <div className="absolute top-0 left-0 w-full h-screen bg-gray-800 opacity-50 z-20">   
        </div>
        <div className="absolute top-0 w-full flex flex-col items-center bg-white rounded-b-xl opacity-100 z-40">  
            <div className="w-full flex justify-between px-14 pt-4  border-b-[1px] border-gray-200">
                <div><Image src={logo}/></div>
                <div className="text-gray-700 cursor-pointer"
                // onClick={()=>{setLocationModal(true)}}
                ><FaTimes size={30}/></div>
            </div>
            <div className="pt-6">
                <h1 className="text-xl font-semibold text-gray-600">Select Your City</h1>
            </div>
            <div className="flex flex-row flex-wrap items-center justify-center gap-4 gap-y-0 py-6 px-10 text-sm">
            <div className="flex flex-col items-center justify-center w-28 p-2">
                <Image src={mumbai}/>
                <h1>Mumbai</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-28 p-2">
                <Image src={delhi}/>
                <h1>Delhi</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-28 p-2">
                <Image src={pune}/>
                <h1>Pune</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-28 p-2">
                <Image src={ahmedabad}/>
                <h1>Ahmedabad</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-28 p-2">
                <Image src={hyderabad}/>
                <h1>Hyderabad</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-28 p-2">
                <Image src={kolkata}/>
                <h1>Kolkata</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-28 p-2">
                <Image src={lucknow}/>
                <h1>Lucknow</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-28 p-2">
                <Image src={patna}/>
                <h1>Patna</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-28 p-2">
                <Image src={banglore}/>
                <h1>Banglore</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-28 p-2">
                <Image src={indore}/>
                <h1>Indore</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-28 p-2">
                <Image src={chennai}/>
                <h1>Chennai</h1>
            </div>
            <div className="flex flex-col items-center justify-center w-28 p-2">
                <Image src={jaipur}/>
                <h1>Jaipur</h1>
            </div>
            </div>
            <div>
            <div className="flex py-6">
                <input type="text bg-gray-300" className={inputText} placeholder="Search city by name" />
                    <button className="px-4 py-3 border-2 rounded-r-lg bg-blue-500"><FiSearch  size={20} className="text-white"/></button> 
              </div>
            </div>
            <div>
                <p className="text-blue-500 font-medium py-6"><Link href={"/"}><a>View All Cities</a></Link></p>
            </div>
        </div>
    </div>
    
  );
};

export default LocationModel;




// <div>
//       {/* second modal */}
//       {showModal ? (
//         <div className="mt-10 flex justify-center items-center flex-col w-1/2 rounded-lg shadow-xl h-auto p-2">
//           <div className="flex gap-4">
//             <div>
//                 <Image src={mumbai}/>
//                 <h1>Mumbai</h1>
//             </div>
//             <div>
//                 <Image src={delhi}/>
//                 <h1>Delhi</h1>
//             </div>
//             <div>
//                 <Image src={pune}/>
//                 <h1>Pune</h1>
//             </div>
//             <div>
//                 <Image src={ahmedabad}/>
//                 <h1>Ahmedabad</h1>
//             </div>
//             <div>
//                 <Image src={hyderabad}/>
//                 <h1>Hyderabad</h1>
//             </div>
//             <div>
//                 <Image src={kolkata}/>
//                 <h1>Kolkata</h1>
//             </div>
//             <div>
//                 <Image src={lucknow}/>
//                 <h1>Lucknow</h1>
//             </div>
//             <div>
//                 <Image src={patna}/>
//                 <h1>Patna</h1>
//             </div>
//             <div>
//                 <Image src={banglore}/>
//                 <h1>Banglore</h1>
//             </div>
//             <div>
//                 <Image src={indore}/>
//                 <h1>Indore</h1>
//             </div>
//             <div>
//                 <Image src={chennai}/>
//                 <h1>Chennai</h1>
//             </div>
//             <div>
//                 <Image src={jaipur}/>
//                 <h1>Jaipur</h1>
//             </div>
//             {/* <button
//               className="my-5 w-auto px-8 h-10 bg-blue-600 text-white rounded-md shadow hover:shadow-lg font-semibold"
//               onClick={() => setShowModal(false)}
//             >
//               Claim Now
//             </button>
//             <button
//               className=" w-auto px-12 my-5 border border-red-100 h-10 hover:bg-red-700 hover:text-white   rounded-md text-red-600  hover:shadow-lg font-semibold"
//               onClick={() => setShowModal(false)}
//             >
//               Close
//             </button> */}
//           </div>
//         </div>
//       ) : null}
//     </div>
