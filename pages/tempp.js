import React from 'react'
import {IoChevronDown} from "react-icons/io5";

const tempp = () => {
  return (
    <div>
      <div className="flex justify-center items-center w-screen min-h-screen px-2">

<div className="flex flex-col w-full divide-y-[1px]">
  <button className="group focus:outline-none">
    <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-gray-200">
      <span className="truncate">Heading One</span>
      <IoChevronDown />
    </div>
    <div className="max-h-0 overflow-hidden duration-500 group-focus:max-h-72">
      <a className="flex items-center h-8 px-4 text-sm hover:bg-gray-200" href="#">Item A</a>
      <a className="flex items-center h-8 px-4 text-sm hover:bg-gray-200" href="#">Item B</a>
      <a className="flex items-center h-8 px-4 text-sm hover:bg-gray-200" href="#">Item C</a>
    </div>
  </button>
  <button className="group  focus:outline-none">
    <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-gray-200">
      <span className="truncate">Heading Two</span>
      <IoChevronDown />
    </div>
    <div className="max-h-0 overflow-hidden duration-500 group-focus:max-h-auto">
      <a className="flex items-center h-8 px-4 text-sm hover:bg-gray-200" href="#">Item A</a>
      <a className="flex items-center h-8 px-4 text-sm hover:bg-gray-200" href="#">Item B</a>
      <a className="flex items-center h-8 px-4 text-sm hover:bg-gray-200" href="#">Item C</a>
    </div>
  </button>
  <button className="group focus:outline-none">
    <div className="flex items-center justify-between h-12 px-3 font-semibold hover:bg-gray-200">
      <span className="truncate">Heading Three</span>
      <IoChevronDown />
    </div>
    <div className="max-h-0 overflow-hidden duration-500 group-focus:max-h-auto">
      <a className="flex items-center h-8 px-4 text-sm hover:bg-gray-200" href="#">Item A</a>
      <a className="flex items-center h-8 px-4 text-sm hover:bg-gray-200" href="#">Item B</a>
      <a className="flex items-center h-8 px-4 text-sm hover:bg-gray-200" href="#">Item C</a>
    </div>
  </button>
</div>
</div>
    </div>
  )
}

export default tempp