import React, { useEffect } from 'react';
import watch from '../assets/Product/watch/file.png';
import laptop from '../assets/Product/phoneimg/304449_9_vzwtgr.webp';
import { AiOutlineMinus } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, totalfuc } from '../Statemanagement/Cartslice';
import Emptymsg from './Emptymsg';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
const Orderpage = () => {
    const {additems,total} = useSelector((data) => data.Cart);
     const dispatch= useDispatch()
    const increitem=(product)=>{
         dispatch( increment(product))
         
    }
    const decreitem=(product)=>{
        dispatch( decrement(product))
    }
      useEffect(()=>{
       dispatch(totalfuc())
      },[additems])
    return (

<>
<Header/>

        <div className='mb-20 md:pt-[14%] pt-[45%] md:ml-[10%]'>
            <div className='  md:w-[800px]  '>
                <h2 className='font-bold capitalize text-[2.3rem] mb-3'>shopping cart</h2>
            </div>

            {/* CART PRODUCTS  */}
{

    (additems.length==0)? <Emptymsg/> :
            <div className='flex flex-wrap'>
                {/* CART PRODUCT INFORMATION PRICE AND IN STOCK */}
                <div className=''>

                  
                    {
                         

                        additems.map((product) =>


                            <div className='flex  md:w-[800px] mt-6 bg-blue border-t-2 pt-5 bg-blue min-w-[300px] max-w-[400px] md:max-w-[800px] md:min-w-[800px]' key={product.id}>
                                <div className='md:w-[200px] md:h-[180px] border-2 md:p-8 p-2 md:mr-10 w-[80px] h-[80px] mr-5 ml-4 md:ml-0'>

                                    <img src={product.srcimg} alt="WATCH" />
                                </div>
                                <div>
                                    <h2 className='md:text-[1.3rem] text-[18px] font-semibold md:w-[450px] w-[250px] text-justify mb-2' >{product.disc.slice(0,70)+"..."}</h2>
                                    <h2 className='mt-2 md:text-[1.2rem]'>Brand: <span className='font-semibold'>{product.Brand} </span></h2>
                                    <h2 className='mt-2 md:text-[1.2rem]'>Category: <span className='font-semibold'>{product.category} </span></h2>

                                    <div className='flex items-center'>
                                        <h2 className='text-[1.4rem] mt-3 mr-6'>₹{product?.price}</h2>

                                        <div className='flex mt-4 '>
                                            <button className='text-[1.3rem]  border-[3px] rounded-[30px] w-[35px] h-[35px] md:mr-2 '><AiOutlineMinus className='mx-auto' onClick={() => decreitem(product)}/></button>
                                            <input type="text" className='w-[50px] text-center font-semibold text-[1.5rem]' value={product.cartquantity} />
                                            <button className='text-[1.3rem] border-[3px] rounded-[30px] w-[35px] h-[35px] md:ml-2 '><AiOutlinePlus className='mx-auto' onClick={() => increitem(product)} /></button>
                                        </div>

                                    </div>
                                    <h2 className='capitalize md:ml-2 mt-2 font-semibold'>in stock</h2>
                                    <h2 className='md:ml-2 mt-2 font-semibold'>You are saving 2000 upon purchase</h2>

                                </div>

                                {/* <button>X</button> */}
                            </div>
                        )

                    }






                </div>





                {/* SHOWING  ORDER AMOUNT ,pt-[1rem]  mt-5 TAX FREE, SHIPPING PRICE,TOTAL*/}

               

                <div className=' w-[100%] md:w-[auto] '>

                    <div className='md:w-[430px] mt-5   bg-blue md:ml-10  md:pl-5 border-2 text-center rounded-[20px]  mx-auto   bg-white -z-10'>
                        <h2 className='text-[1.6rem]  font-semibold mb-3 md:text-start'>Order Summary</h2>

                        <h2 className='mb-4  pt-3 w-[380px]'>Subtotal <span className='ml-[14rem]'>{total} INR</span></h2>

                        <h2 className='mb-4  border-t-2  w-[380px] pt-3'>Shipping estimate
                            <span className='ml-[10rem]'>80 INR</span></h2>

                        <h2 className='mb-4 pt-3 border-t-2 w-[380px]'>Tax estimate
                            <span className='ml-[13rem]'>200 INR</span></h2>

                        <h2 className=' mb-4 pt-3 border-t-2 w-[380px]'>Total Discount
                            <span className='ml-[12rem]'>400 INR</span></h2>

                        <h2 className='pt-3 border-t-2 w-[380px] font-bold'>Order total <span className='ml-[12rem]'>{total+80+200+400} INR</span></h2>


                        <button className='bg-blue-800 w-[340px] h-[50px]  mt-10 text-white mb-3 rounded-[10px] '>Checkout</button>


                    </div>


                </div>

            </div>
}
<ToastContainer  position="bottom-right"/>
        </div>
        </>

    )
}
export default Orderpage
