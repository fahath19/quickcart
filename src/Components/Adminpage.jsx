import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { IoIosNotifications } from "react-icons/io";
import { FaRegCalendarAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { IoBagAddOutline } from "react-icons/io5";

import { FaArrowUpLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { MdFeaturedPlayList } from "react-icons/md";


const Adminpage = () => {
  return (
    <div className='bg-[#dfdede] pb-4 relative ' >
       {/* <h2 className='text-center font-bold text-[2rem]'>Addmin Page</h2> */}
       <div className=' flex items-center justify-between py-4  pr-10  bg-white'>

       <h2 className='pl-10 text-[1.5rem] md:text-[1.8rem] font-mono font-medium text-[#002355]'>
        
       <Link to='/'> QuickCart</Link>   </h2>
         <div  className=' flex   items-center'>
         <IoIosSearch className='text-[1.8rem] md:block hidden text-[#9a9b9c]'/>
                 
         <IoIosNotifications className='text-[1.8rem] ml-[2rem]  '/>
         <h2 className='border-2 py-[2px]  text-[1.5rem] ml-[2rem] px-4 '>Admin</h2>
         </div>      

       </div>
      
           <div className='md:pl-[16rem] mt-4'>
           <h2 className='text-[2rem] font-semibold mx-4'>Dashboard</h2>
            <div className='flex justify-between mt-2 mx-4'>
                 <h2> <Link to='/'>Home </Link> </h2>

                 <div className='pr-[90px] flex items-center'>
                  <FaRegCalendarAlt/>
                  <h2 className='ml-2'>Oct 12,2004</h2>
                   <h2>-</h2>
                   <h2>Nov 12,2024</h2>

                 </div>

            </div>
               
{/* ADMIN PAGE PRODUCT SELLING VARIOUS BOXES */}
          <div className='mt-4 flex flex-wrap md:mx-0 mx-2'>
            

          <div className= 'md:mt-auto mt-4 bg-white md:w-[250px] w-[180px] md:p-6 p-3 rounded-[10px]  md:ml-4 ml-2'>
                 <div className='flex items-center justify-between mb-2 '>
                   <h2 className='md:text-[1.2rem] text-[1rem] md:font-normal font-semibold'>Active Orders</h2>
                   <BsThreeDotsVertical className=''/>
                 </div>
                 <div className='flex '>

                 <div className='flex items-center mr-4'>
<IoBagAddOutline className='bg-blue-900 mr-1 text-white p-1 md:text-[1.6rem] text-[1.4rem] rounded-sm'/>

<h2  className='md:ml-2 md:text-auto text-[0.9rem] font-bold text-[#848884]'>₹74678</h2>
                 </div>
                 <div className='flex items-center'>
<FaArrowUpLong className='md:text-[1.2rem] text-[0.9rem]  '/>

<h2 className='md:ml-2 md:text-auto text-[0.9rem] font-bold text-[#848884]'>+85.5%</h2>
                 </div>
                 </div>

             </div>



             <div className= 'md:mt-auto mt-4 bg-white md:w-[250px] w-[180px] md:p-6 p-3 rounded-[10px]  md:ml-4 ml-2'>
                 <div className='flex items-center justify-between mb-2 '>
                   <h2 className='md:text-[1.2rem] text-[1rem] md:font-normal font-semibold'>Active Orders</h2>
                   <BsThreeDotsVertical className=''/>
                 </div>
                 <div className='flex '>

                 <div className='flex items-center mr-4'>
<IoBagAddOutline className='bg-blue-900 mr-1 text-white p-1 md:text-[1.6rem] text-[1.4rem] rounded-sm'/>

<h2  className='md:ml-2 md:text-auto text-[0.9rem] font-bold text-[#848884]'>₹74678</h2>
                 </div>
                 <div className='flex items-center'>
<FaArrowUpLong className='md:text-[1.2rem] text-[0.9rem]  '/>

<h2 className='md:ml-2 md:text-auto text-[0.9rem] font-bold text-[#848884]'>+85.5%</h2>
                 </div>
                 </div>

             </div>




             <div className= 'md:mt-auto mt-4 bg-white md:w-[250px] w-[180px] md:p-6 p-3 rounded-[10px]  md:ml-4 ml-2'>
                 <div className='flex items-center justify-between mb-2 '>
                   <h2 className='md:text-[1.2rem] text-[1rem] md:font-normal font-semibold'>Active Orders</h2>
                   <BsThreeDotsVertical className=''/>
                 </div>
                 <div className='flex '>

                 <div className='flex items-center mr-4'>
<IoBagAddOutline className='bg-blue-900 mr-1 text-white p-1 md:text-[1.6rem] text-[1.4rem] rounded-sm'/>

<h2  className='md:ml-2 md:text-auto text-[0.9rem] font-bold text-[#848884]'>₹74678</h2>
                 </div>
                 <div className='flex items-center'>
<FaArrowUpLong className='md:text-[1.2rem] text-[0.9rem]  '/>

<h2 className='md:ml-2 md:text-auto text-[0.9rem] font-bold text-[#848884]'>+85.5%</h2>
                 </div>
                 </div>

             </div>


             


             <div className= 'md:mt-auto mt-4 bg-white md:w-[250px] w-[180px] md:p-6 p-3 rounded-[10px]  md:ml-4 ml-2'>
                 <div className='flex items-center justify-between mb-2 '>
                   <h2 className='md:text-[1.2rem] text-[1rem] md:font-normal font-semibold'>Active Orders</h2>
                   <BsThreeDotsVertical className=''/>
                 </div>
                 <div className='flex '>

                 <div className='flex items-center mr-4'>
<IoBagAddOutline className='bg-blue-900 mr-1 text-white p-1 md:text-[1.6rem] text-[1.4rem] rounded-sm'/>

<h2  className='md:ml-2 md:text-auto text-[0.9rem] font-bold text-[#848884]'>₹74678</h2>
                 </div>
                 <div className='flex items-center'>
<FaArrowUpLong className='md:text-[1.2rem] text-[0.9rem]  '/>

<h2 className='md:ml-2 md:text-auto text-[0.9rem] font-bold text-[#848884]'>+85.5%</h2>
                 </div>
                 </div>

             </div>



         


          </div>
          </div>

{/* DASHBOARD FOR SIDE BAR */}

          <div className='md:block hidden bg-white border-2 w-[230px] h-[123vh] absolute top-[7.8%]'>

            <h2 className='flex items-center m-4 text-white rounded-[5px] bg-blue-900 p-2 cursor-pointer hover:bg-blue-800' ><MdOutlineDashboard className='mr-2 '/>DASHBOARD</h2>
            <h2 className='flex items-center m-4 bg-blue-900 p-2 text-white rounded-[5px]  cursor-pointer hover:bg-blue-800'><MdOutlineProductionQuantityLimits className='mr-2'/>ALL PRODUCTS</h2>
            <h2 className='flex items-center m-4 bg-blue-900 p-2 text-white rounded-[5px]  cursor-pointer hover:bg-blue-800' ><MdFeaturedPlayList className='mr-2'/>ORDER LIST</h2>

          </div>

          {/* FOR PRODUCT GRAPHS AND SHOWING ANALITICS */}
          <div className='md:pl-[16rem] mt-4 flex items-center flex-wrap'>
            <div className='bg-white md:w-[650px] rounded-[10px]  ml-4 md:h-[350px] h-[400px]'>

              <div className='flex justify-between p-4  items-center flex-wrap border-b-2  mx-2'>

               <h2 className='mx-auto md:mx-0 font-semibold pl-1 text-[1.2rem]'>Sale Graph</h2>

               <div className='flex  calendar'>
                 <h2 >WEEKLY</h2>
                 <h2>MONTHLY</h2>
                 <h2>YEARLY</h2>

               </div>
              </div>

            </div>
            <div>

            </div>

          {/* FOR BEST SELLLER AND SHOWING SHOWING */}


            <div>
              <div className='bg-white md:w-[380px] ml-4  rounded-[10px] p-6 mt-3  '>

                <div className='flex items-center border-b justify-between pb-4'>
                  <h2 className='font-bold'>Best Sellers</h2>
                  <BsThreeDotsVertical/>

                </div>

                <div className='flex item-center mt-4'>

                  <div className='w-[70px] rounded-[10px] h-[70x] bg-gray-300'>
                     
                  </div>
                      <div className='ml-4'>

                  <h2 className='text-black font-semibold text-[0.9rem]'>Lorem Ipsum</h2>
                  <p className='font-bold text-gray-500 '>₹126.600</p>
                  </div>

                  <div className='ml-[5rem]'>
                    <h2  className='text-black font-semibold text-[0.9rem]'>₹126.50</h2>
                    <p  className='font-bold text-gray-500'>555 Sales</p>
                  </div>

                </div>




                <div className='flex item-center mt-4'>

<div className='w-[70px] rounded-[10px] h-[70x] bg-gray-300'>
   
</div>
    <div className='ml-4'>

<h2 className='text-black font-semibold text-[0.9rem]'>Lorem Ipsum</h2>
<p className='font-bold text-gray-500 '>₹126.600</p>
</div>

<div className='ml-[5rem]'>
  <h2  className='text-black font-semibold text-[0.9rem]'>₹126.50</h2>
  <p  className='font-bold text-gray-500'>555 Sales</p>
</div>

</div>



<div className='flex item-center mt-4'>

<div className='w-[70px] rounded-[10px] h-[70x] bg-gray-300'>
   
</div>
    <div className='ml-4'>

<h2 className='text-black font-semibold text-[0.9rem]'>Lorem Ipsum</h2>
<p className='font-bold text-gray-500 '>₹126.600</p>
</div>

<div className='ml-[5rem]'>
  <h2  className='text-black font-semibold text-[0.9rem]'>₹126.50</h2>
  <p  className='font-bold text-gray-500'>555 Sales</p>
</div>


</div>


<div>
<button className='w-[90px] border-2 p-2 mt-3 bg-blue-900 text-white rounded-[10px] hover:bg-blue-800'>REPORT</button>

</div>


              </div>
            </div>


          </div>





          {/* FOR  REASON ORDERS */}
          <div className='md:pl-[16rem] mt-3  md:mx-0'>

          <div className='bg-white md:w-[83%]   rounded-[10px] p-6 ml-4 mx-3 '>

            <div className='flex justify-between border-b-2 pb-2'>
                    <h2 className=' font-semibold text-[1.2rem]'>Recent Orders</h2>
                    <BsThreeDotsVertical/>
            </div>
            <div className='flex justify-between mt-3 border-b pb-3 recentordtitle'>
              <h2>Product</h2>
              <h2>Order ID</h2>
              <h2>Date</h2>
              <h2>Customer Name</h2>
              <h2>Status</h2>
              <h2>Amount</h2>

            </div>



            <div className='flex justify-between mt-3 border-b pb-3 recentordinfo '>
              <h2 cla>Apple Watch</h2>
              <h2 >#20343</h2>
              <h2 >Nov 6th ,2020</h2>
              <h2 className='text-center' > Tamil Selvan</h2>
              <h2 >Canceled</h2>
              <h2 >₹26000</h2>

            </div>



            <div className='flex justify-between mt-3 border-b pb-3 recentordinfo '>
              <h2 cla>Apple Watch</h2>
              <h2 >#20343</h2>
              <h2 >Nov 6th ,2020</h2>
              <h2 className='text-center' > Tamil Selvan</h2>
              <h2 >Canceled</h2>
              <h2 >₹26000</h2>

            </div>





            <div className='flex justify-between mt-3 border-b pb-3 recentordinfo'>
              <h2 cla>Apple Watch</h2>
              <h2 >#20343</h2>
              <h2 >Nov 6th ,2020</h2>
              <h2 className='text-center' > Tamil Selvan</h2>
              <h2 >Canceled</h2>
              <h2 >₹26000</h2>

            </div>
</div>
</div>

    </div>
  )
}

export default Adminpage
