import Image from "next/image"
import React,{useState} from "react"

import {deviceEvaluationDetails} from "../Components/tempdata" 
import img from "../public/assets/upload/apple-iphone-13-pro-max-1.jpg"


//temp
import {
    IoLogoInstagram, 
  } from "react-icons/io5";



const Issues = () => {
    const [form,setForm]=useState({ })

    const firstQnA = deviceEvaluationDetails[4];
    const firstTitle = firstQnA.title;

    const onChange=(e)=>{
        // const value=e.target.value;
        const {value ,name,id}=e.target;
        setForm((state)=>({
          ...state,
          [name ]:value,
        }))
    }
    const showData=()=>{
        console.log(`Form:`,form ); 
      }
  return (
    <div>
        <div className='flex p-10 bg-white shadow-2xl mx-28 my-14 rounded-2xl'>
            <div className='flex flex-col items-center justify-center w-4/5'>
                <Image alt="temp" src={img}/>
                <p className='text-lg font-semibold'>Samsung Galaxy</p>
                <p className='text-sm font-semibold'>Variant</p>

                <div>
                    <h1 className='text-xl font-bold text-blue-500'>DEVICE EVALUTION DETAILS</h1>
                    <p className='text-lg font-semibold text-gray-600'>Device Details</p>
                </div>
            </div>
            <div className='border-l-[1px] border-gray-300 px-10'>
                <h1 className='px-4 text-2xl font-bold text-blue-500'>{firstTitle}</h1>
                <ol className='p-4 text-lg text-gray-600'>
                {firstQnA && firstQnA.questionandanswer.map((e) => (
                    <li className='pb-4' key={e.id}>
                    <p>{e.question}</p>
                    <div className='flex flex-wrap gap-6 pt-4'>
                        {e.answer.map((a,index)=>(
                            <div key={index}>
                                <input className='hidden peer ' type="radio" onChange={onChange}  name={a} value={a}  id="yes" />
                            <label htmlFor="yes" onChange={onChange} className='inline-flex items-center justify-between px-4 border cursor-pointer rounded-xl peer-checked:bg-blue-600 peer-checked:text-white'>
                                <div className='block'>
                                <div className="flex items-center justify-center p-4 text-lg font-semibold"><IoLogoInstagram size={25} className="mr-4"/>{a}</div>
                                </div>
                            </label>
                            </div>
                        ))}
                        
                    </div>
                </li>
                ))} 
                </ol>
                <div className='pl-40'><button className='bg-blue-500 hover:bg-blue-700 px-4 py-2.5 text-white font-medium rounded-xl'
                onClick={showData}
                >Continue</button></div>
            </div>
        </div>
    </div>
  )
}

export default Issues