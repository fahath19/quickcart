import React from 'react'
import { BsCart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import Subheader from './Subheader';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const Header = () => {
  const data=useSelector((data)=>data.Cart.carttotal)


  return (
    <div className='fixed w-[100%]  z-20'>

    <div className=' flex md:justify-evenly justify-between p-4 w-[100%]  bg-[rgba(242,242,242,255)] '>
        <h2 className='text-[1.5rem] md:text-[1.8rem] font-mono font-medium text-[#002355]'>QuickCart</h2>

        <div className='md:relative absolute md:visible invisible md:top-auto'>

        <div className='bg-blue-  relative mr-20 '>
        <input type="text" placeholder='Search Your Products' className='md:w-[650px] md:h-[36px] border-[#
#eceef0] border-2 rounded-[50px] px-6'/>
       <AiOutlineSearch className='absolute top-2 right-4 text-[1.5rem] '/>
        </div>
        </div>


        <div className='flex'>
          <div className='relative mt-2'>
          <Link to="/orderpage">
          <BsCart className='text-[1.8rem] mr-9 cursor-pointer hover:text-red-500 '/>
          
          </Link>
          <div className='border-2 border-black w-[20px] h-[20px] absolute -top-2 right-6 bg-black  rounded-[30px]'>
             <h2 className='text-center text-white  -translate-y-1'>{data}</h2>
          </div>
          </div>

          <Link to="/adminloginpage">
          <AiOutlineUser className='text-[1.8rem] mt-2 cursor-pointer hover:text-red-500'/>
          
          </Link>

         
        </div>

        
    </div>
    <div className='bg-blue-700'>
    <marquee 
        behavior="scroll" 
        direction="left"  
        ref={(marquee) => { if (marquee) { window.marqueeElement = marquee; }}}
        className="w-[80%] block mx-auto"
    > 
        <div className='scrolltex flex w-[60%] overflow-hidden'>
            <Link 
                to='buyproduct/:3' 
                onMouseOver={() => window.marqueeElement.stop()} 
                onMouseOut={() => window.marqueeElement.start()}
            >
                <h2 className='rounded-300 text-white mr-3 text-center mt-2 pl-2'>
                    50% Off For Laptop
                </h2>
            </Link>

            <Link 
               to='buyproduct/:1' 
                onMouseOver={() => window.marqueeElement.stop()} 
                onMouseOut={() => window.marqueeElement.start()}
            >
                <h2 className='rounded-300 text-white mr-3 text-center mt-2 border-l-2 pl-2'>
                    10% Off For Camera
                </h2>
            </Link> 

            <Link 
             to='buyproduct/:6' 
                onMouseOver={() => window.marqueeElement.stop()} 
                onMouseOut={() => window.marqueeElement.start()}
            >
                <h2 className='rounded-300 text-white mr-3 text-center mt-2 border-l-2 pl-2'>
                    20% Off For Shoes
                </h2>
            </Link>

            <Link 
             to='buyproduct/:4' 
                onMouseOver={() => window.marqueeElement.stop()} 
                onMouseOut={() => window.marqueeElement.start()}
            >
                <h2 className='rounded-300 text-white mr-3 text-center mt-2 border-l-2 pl-2'>
                    30% Off For Phone
                </h2>
            </Link>
        </div>
    </marquee>
</div>

    <ul className="desktopsubheader   hidden md:text-white md:flex   transition-all delay-75	 duration-100	  md:justify-center md:relative absolute  bg-[black] md:h-[60px] md:p-0 ">
    <li><Link to="/">HOME</Link></li>
     <li><Link to="/">PRODUCT</Link></li>
     <li><Link to="/orderpage">CART</Link></li>
  

   </ul>

   <div>
   </div>
    <Subheader />

    </div>

  )
}

export default Header
