import React, { useState } from 'react'
import star from '../assets/star/star2.png'
import { GoPlus } from "react-icons/go";
import { FiMinus } from "react-icons/fi";
import { IoMdHeartEmpty } from "react-icons/io";
// import laptop from '../assets/Product/laptopimg/laptopfront.webp'
// import laptopback from '../assets/Product/laptopimg/laptopback.webp'
// import laptopsefront from '../assets/Product/laptopimg/laptopsidefront.webp'
// import laptopse from '../assets/Product/laptopimg/laptopside.webp'
import user from '../assets/review/user.png'
import { useParams } from 'react-router-dom';
import {BuyProductdata} from '../Server/Buyproductinfo'
import { useDispatch, useSelector } from 'react-redux';
import { addcartitem } from '../Statemanagement/Cartslice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ScrollToTop from "react-scroll-to-top";
import Imagemagnifier from './Imagemagnifier';
import Footer from './Footer';
import Header from './Header';
const Buyproduct = () => {

         const [slideimg,setslideimg]=useState();
         function setslideimgfun(id){
                 setslideimg(id)
         }

       let dispatch=useDispatch();
       
       const productid=useParams('');
          const data=useSelector((data)=>data.Cart.cartquantity)
          
       
    //    console.log("ID=",productid.id);
       const fitlerbuyproductinfo=BuyProductdata.filter((item)=> ':'+item.id == productid.id)
       
 const Additem=(item)=>{
    dispatch(addcartitem(item))

 }

    return (

          <>
          
<Header/>
        <div className='md:pt-[13%]  pt-[46%] pl-[6%]  '>

          { 
           

           fitlerbuyproductinfo.map((item)=>


            <div className='md:flex  w-[90%] gap-[7rem]' key={item.id}>
                {/* SIDE IMAGE SCROLLER FOR BUYING PRODUCT */}
                <div className='flex'>

                <div className='md:mr-8'>
          
                    <div className='sideproductimg' onClick={()=>setslideimgfun(item.slide1)}>

                        <img src={item?.slide1} alt="side product" />

                    </div>

                    <div className='sideproductimg' onClick={()=>setslideimgfun(item.slide2)}>

                        <img src={item?.slide2} alt="side product" />

                    </div>



                    <div className='sideproductimg' onClick={()=>setslideimgfun(item.slide3)}>

                        <img src={item?.slide3} alt="side product" />

                    </div>




                    <div className='sideproductimg' onClick={()=>setslideimgfun(item.slide4)}>

                        <img src={item?.slide4} alt="side product" />

                    </div>



                </div>
                {/*SHOWING PRODUCT BUYING IMAGE FOR USER  */}

                <div>
                    <div className='md:w-[380px] w-[250px] ml-5 py-5 '>
                        <img src={ slideimg || item.slide1} alt="product" className='md:hidden '/>
                        <Imagemagnifier sliderimg={slideimg ||  item.slide1}/>
                        
                    </div>

                </div>
                {/* INFORMATION ABOUT THE PRODUCT AND RATING ,AMOUNT EXT */}
                </div>


                <div>
                    <p className='md:text-[1.8rem] text-[1.2rem] font-semibold md:w-[550px] mb-4 '>

                   {item?.disc}
                    </p>

                     <div className='flex items-center justify-between '>
                     <h2 className='text-[1.3rem] font-semibold text-red-500'> <span className='line-through mr-4 text-black'>&#8377;
                      {item?.prevprice}</span> &#8377;
                       {item?.price}</h2>
                     <div className='flex items-center gap-4 pr-6'>
                     <img src={star} alt="star" className='md:w-[150px] w-[80px]' />
                     <p className='md:text-[1.2rem] text-[1.2rem]'>(250)</p>

                     </div>

                     </div>
                  <div className=''>



                     <h2 className='text-[1.3rem] mt-2 '>Brand : <span className='font-semibold'> {item?.Brand}</span> </h2>
                     <h2 className='text-[1.3rem] mt-2'>Category : <span className='font-semibold'>{item?.category}</span> </h2>
                     <h2 className='text-[1.3rem] mt-2 font-semibold text-red-400'><span className='line-through mr-6 text-black'>&#8377;
                     {item?.prevprice} </span> &#8377;
                     {item.price}</h2>
                         <button className='bg-black text-white w-[300px] md:w-[500px] h-[40px] rounded-[25px] mt-6' onClick={()=>Additem(item)}>BUY NOW</button>

                         </div>


                </div>


            </div>
            // :    <h2>PRODUCT ID IS INCORRECT OR NOT FOUND</h2>  
)


}
            <div>
                <div className='md:w-[90%] border-b-2 reviewcont  w-[330px]'>
                    <ul className='flex  review'>
                        <li className=''>Customer Reviews</li>
                        <li className=''>FAQ</li>
                        <li className='' >Licence</li>
                       
                    </ul>
                </div>

             
                <div className='userreviewcont flex mt-2  mb-3'>
                          <div className='w-[50px] h-[50px] mt-2 ml-[1.9rem] mr-[1.5rem] md:mr-[3rem]'>
                            <img src={user} alt="user"  />
                          </div>

                          <div className='user md:ml-[1.8rem]'>
                             <h2 >sheik abdullah</h2>
                             <p className='date'>July 16, 2021</p>
                             <img src={star} alt="star" className='w-[130px] h-[30px]' />
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas unde, mollitia minus consequuntur eum, iste eaque Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas unde, mollitia minus consequuntur eum, iste eaque</p>
                          </div>

                   </div>







                   <div className='userreviewcont flex mt-2  mb-3'>
                          <div className='w-[50px] h-[50px] mt-2 ml-[1.9rem] mr-[1.5rem] md:mr-[3rem]'>
                            <img src={user} alt="user"  />
                          </div>

                          <div className='user md:ml-[1.8rem]'>
                             <h2 >sheik abdullah</h2>
                             <p className='date'>July 16, 2021</p>
                             <img src={star} alt="star" className='w-[130px] h-[30px]' />
                             <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas unde, mollitia minus consequuntur eum, iste eaque Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas unde, mollitia minus consequuntur eum, iste eaque</p>
                          </div>

                   </div>

            </div>
            <ToastContainer position="bottom-right" />

        </div>
        <Footer/>

        </>

    )
}

export default Buyproduct