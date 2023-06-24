import Image from 'next/image'
import React, { useState } from 'react'

import {deviceEvaluationDetails} from "../Components/tempdata" 
import img from "../public/assets/upload/apple-iphone-13-pro-max-1.jpg"
// import { v4  } from 'uuid';

const DeviceEval = () => {

    const [form,setForm]=useState({ })

    const firstQnA = deviceEvaluationDetails[0];
    const firstTitle = firstQnA.title;
    
    const onChange=(e)=>{

        const {value ,name}=e.target;
        
        
        setForm((state)=>({
          ...state,
          [name]:value
        }))
    }
    const showData=()=>{
        console.log(`Form:`,form ); 
      }
  return (
    <div>
        <div className='flex bg-white shadow-2xl mx-28 my-14 p-10 rounded-2xl'>
            <div className='w-2/5 flex flex-col items-center justify-center'>
                <Image src={img}/>
                <p className='font-semibold text-lg'>Samsung Galaxy</p>
                <p className='font-semibold text-sm'>Variant</p>

                <div>
                    <h1 className='font-bold text-xl text-blue-500'>DEVICE EVALUTION DETAILS</h1>
                    <p className='font-semibold text-lg text-gray-600'>Device Details</p>
                    {[JSON.stringify(form)]}
                </div>
            </div>
            <div className='border-l-[1px] border-gray-300 px-10'>
                <h1 className='font-bold text-2xl text-blue-500 px-4'>{firstTitle}</h1>
                <ul className='text-lg text-gray-600 p-4'>
                {firstQnA && firstQnA.questionandanswer.map((e) => (
                    <li className='pb-4' key={e.id}>
                    <p>{e.question}</p>
                    <div className='flex gap-6 pt-4'>
                            {e.answer && e.answer.map((a)=>(
                                <div key={a.id}>
                                <input className='hidden peer' type="radio" onChange={onChange}  name={e.question} value={a.value}  id={a.id} required/>
                                <label htmlFor={a.id} onChange={onChange} className='inline-flex cursor-pointer items-center justify-between px-6 border rounded-xl peer-checked:bg-blue-600 peer-checked:text-white'>
                                    <div className='block'>
                                    <div className="text-lg font-semibold">{a.value}</div>
                                    </div>
                                </label>
                                </div>
                            ))}
                        
                    </div> 
                </li>
                ))} 
                </ul>
                <div className='pl-40'><button className='bg-blue-500 hover:bg-blue-700 px-4 py-2.5 text-white font-medium rounded-xl'
                onClick={showData}
                >Continue</button></div>
            </div>
        </div>
    </div>
  )
}

export default DeviceEval
