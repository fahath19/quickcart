import React from 'react'
import { HiChevronDown } from "react-icons/hi2";
import { AiOutlineSearch } from "react-icons/ai";
import { useState } from 'react';
import { Link } from 'react-router-dom';
const Subheader = () => {
  const [clickbtn,setclickbtn]=useState()
  const btnclick=()=>{
    setclickbtn(!clickbtn)
    
    
  }
  return (
    <div className='bg-black p-2 py-3 md:hidden visible w-auto relative'>
         <button onClick={btnclick} className=' md:hidden visible border-[2px] rounded-[8px] border-white text-white w-[130px] h-[45px] text-[1.2rem] font-semibold flex items-center justify-center '>Select <span className='pl-2 text-[1.5rem] pt-[5px] '><HiChevronDown className=''/>
          </span> </button>
        <ul className={`subheader md:text-white md:flex  -z-20 transition-all delay-75	 duration-100	  md:justify-center md:relative absolute md:hidden md:visible  bg-[#002355] h-[300px] md:h-auto md:p-0 mt-1 md:mt- -translate-x-2 rounded-br-[10px]  ${(clickbtn)?"top-[60px]":"-top-[500%] -z-20"}`}>

     <li><Link to="/">HOME</Link></li>
     <li><Link to="/">PRODUCT</Link></li>
     <li><Link to="/">ABOUT</Link></li>
    

        </ul>
        <div className=' md:relative absolute md:hidden top-5 left-[50%] w-[180px] bg-blue-0 md:top-auto'>

<div className='   mr-20 '>
<input type="text" placeholder='Search Products' className='userinput w-[190px] h-[30px] border-[#
#eceef0] border-[1px] rounded-[50px]  px-6 bg-transparent relative text-white'/>
<AiOutlineSearch className='searchicon absolute top-[5px] right-[3px] text-[1.2rem] text-white'/>
</div>
</div>
        
    </div>
  )
}

export default Subheader
