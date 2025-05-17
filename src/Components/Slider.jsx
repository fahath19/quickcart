import React, { useEffect, useState } from 'react'
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

const Slider = ({sliderimg}) => {
    const [activeslider ,setactiveslider]=useState(0);
   const prevslider=()=>{
         const firstindex=activeslider===0;
         const activesliderd=firstindex?sliderimg.length-1:activeslider-1;
setactiveslider(activesliderd);
   }
   const nextslider=()=>{
    const lastindex=activeslider===sliderimg.length-1;
    const activesliderd=lastindex? 0 :activeslider+1;
    setactiveslider(activesliderd);
    

   }

   useEffect(()=>{
   const interval =setInterval(()=>{
          nextslider();
    },4000)
    return ()=>clearInterval(interval)
   },[activeslider])


  return (
    <div className='flex justify-center'>
      {
        sliderimg.map((items,index)=>
            <div className={`${activeslider===index ?"slider active":"slider unactive"} w-[90%]`} key={items.id}>
                <div className='sliderimg w-[100%]  md:h-[350px]'>
                    <img src={items.srcimg} alt=" banner" className='w-[100%] h-[100%] object-fill rounded-[0.8rem]'/>
                


                </div>
                <button className='left' onClick={prevslider}><FaChevronLeft/></button>
                 <button className='right' onClick={nextslider}><FaChevronRight/></button>
            </div>
        
        
        
        )
      }
    </div>
  )
}

export default Slider
