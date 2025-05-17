import React from 'react'
import banner1 from '../assets/banner/bluelap.png'
import banner2 from '../assets/banner/BLUESHOE.png'
import banner3 from '../assets/banner/BlueWatch.png'
import banner4 from '../assets/banner/bluecloth (2).png'

const Futureproduct = () => {
  return (
    <div className='mb-[] '>

        <div>
            <h2 className='text-center text-[2rem] text-[red] font-semibold'> Featured Products</h2>
        </div>
        <div className='md:flex  text-center md:w-[365px] mt-4  bg-blue text bg-blu md:justify-end'>

<h2 className='md:pl-auto md:pl-4 text-[1.6rem] md:text-[2.1rem] font-semibold  textf-[#064296]  text-center'>New Arrivals</h2>

</div>

<div className='bg-blue-0 md:w-[80%]  flex w-auto flex-wrap md:ml-[8rem] mt-[2rem] md:flex-nowrap justify-center' >

    <div className='md:w-[800px] w-[350px] md:h-[512px] md:mr-4 shoebanner'>
        <img src={banner2} alt="SHOEBANNER"  className='w-[100%]   md:rounded-[15px] h-[100%] object-fill'/>
    </div>

    <div className=''>


    <div  className='md:w-[614px]  w-[350px] md:h-[250px] md:mb-3  mx-auto mt-4 md:mt-0 laptopbanner '>
        <img src={banner1} alt="LAPTOPBANNER" className='w-[100%] h-[100%] object-fill md:rounded-[15px]' />
    </div>


<div className='flex mt-4 md:mt-0'>


    <div  className='md:w-[300px] md:h-[250px] watchbanner  w-[165px] mr-4'>
        <img src={banner3} alt="WATCHBANNER" className='w-[100%] h-[100%] object-fill md:rounded-[15px]' />
    </div>



    
    <div  className='md:w-[300px] w-[165px] md:h-[250px] clothbanner'> 
        <img src={banner4} alt="CLOTHBANNER"  className='w-[100%] md:rounded-[15px] h-[100%] object-fill'/>
    </div>

    </div>
    </div>

</div>
    </div>
  )
}

export default Futureproduct
