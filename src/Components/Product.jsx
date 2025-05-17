import React, { useEffect, useState } from 'react'
import watch from '../assets/Product/watch/file.png'
import { CiStar } from "react-icons/ci";
import { Productdata } from '../Server/Product';
import { Link, useLocation } from 'react-router-dom';
import ScrollToTop from 'react-scroll-to-top';
const Product = () => {
  const [Clickbtnindex,setclickbtnindex]=useState()

  return (
    <div className='mb-6'>
        <div className='md:flex  text-center md:w-[365px] mt-4  bg-blue text bg-blu md:justify-end'>

<h2 className='md:pl-auto md:pl-4 text-[1.6rem] md:text-[2.1rem] font-semibold  text-[#064296]  text-center'> Trending Product</h2>

</div>
      
     <div className='flex ml- justify-center pl-2 flex-wrap bg-blue md:ml-[6%] mt-4 w-[auto] '>

        
        {


          Productdata.map((items)=>
        
           
            <div key={items.id} className=' productcont md:w-[250px] w-[176px] mb-4 border-2 pl-1 border-[] rounded-[20px] mr-5 hover:border-black '>

<Link to=    {`/buyproduct/:${items.id}` } smo> 
            <div className='productimg md:w-[230px] w-[160px] md:h-[250px]  h-[150px] p-6 pb-2 block bg-blue-30 text-center'>
                <img src={items.srcimg} alt="WATCH" className='w-[100%] h-[100%] object-contain ' />
            </div>
            <p className='md:text-[14px] text-[11px] font-semibold px-1 py-2 text-[rgb(129,122,122)]'>{items.name}</p>
            <p className='font-bold mb-1 bg-blue- px-1 md:text-[1rem] text-[1rem] '>{items.disc}</p>
            <div className='flex px-2'>
            <CiStar/>
            <CiStar/>
            <CiStar/>
            <CiStar/>
            <CiStar/>


            </div>
             <h2 className='px-2 mt-1 font-bold md:text-[1.2rem] text-[1.1rem] text-blue-900 '> <span className='line-through mr-2 font-semibold text-black'>₹{items.prevprice}</span>₹{items.price}</h2>

             <button className='text-[1.2rem] font-semibold bg-blue border- rounded-[30px] w-[150px] md:w-[200px] md:h-[40px] h-[40px] mt-2 mb-2  ml-2 md:ml-5  bg-[rgba(242,242,242,255)] hover:bg-blue-800 hover:text-white' onClick={()=>clickbtn(items.id)}>{}{`${(Clickbtnindex==items.id) ? "added" :"Add To Cart"}` }</button>


             </Link>

        </div>
        )

        }

       






        

<ScrollToTop/>


     </div>

    </div>
  )
}

export default Product
