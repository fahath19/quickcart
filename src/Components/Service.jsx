import React from 'react'
import freeship from '../assets/customerimg/truck.png'
import warranty from '../assets/customerimg/pngwing.com (26).png'
import Exchange from '../assets/customerimg/exchange.png'

const Service = () => {
  return (
    <div>
        <div className='flex  md:w-[335px] hidden mt-6   md:justify-end'>

<h2 className='md:pl-auto  pl- text-[1.6rem] md:text-[2rem] font-semibold text-[#064296]'>Customer Service </h2>

</div>


<div className='bg-[#f4f4f4] w-[80%] mt-[5%] mb-[200px] md:h-[400px] mx-auto rounded-[5px] '>

    <h2 className='text-center pt-[5%] text-[2rem] font-bold'>We built our business on customer service</h2>

    <div className='flex p-[3rem] flex-wrap md:flex-nowrap'>

   
   <div className='customercont  bg-blue  text-center'>

    <div className='customerimg'>
        <img src={freeship} alt="FREESHIPING" />
    </div>

    <h2 >Free Shipping</h2>
    <p>It's not actually free we just price it into the products. Someone's paying for it, and it's not us.</p>
   </div>

   
   <div className='customercont text-center'>

    <div className='customerimg'>
        <img src={warranty} alt="FREESHIPING" />
    </div>

    <h2>5-year warranty</h2>
    <p>If it breaks in the first 5 years we'll replace it. After that you're on your own though.</p>
   </div>


   
   <div className='customercont text-center'>

<div className='customerimg'>
        <img src={Exchange} alt="FREESHIPING" />
    </div>
    <h2>Exchanges</h2>
    <p>If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.</p>
   </div>


</div>
</div>

      
    </div>
  )
}

export default Service
