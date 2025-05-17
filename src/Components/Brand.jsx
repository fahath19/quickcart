import React from 'react'
import samsung from '../assets/Brands/samsung.png'
import nike from '../assets/Brands/nike.png'
import Mi from '../assets/Brands/MiBrand.png'
import Jbl from '../assets/Brands/jbl.png'
import apple from '../assets/Brands/Applebrand.png'
import acer from '../assets/Brands/acer.png'

const Brand = () => {
  return (
    <div>
         <div className='md:flex  text-center md:w-[365px] mt-4  bg-blue text bg-blu md:justify-end'>

<h2 className='md:pl-auto md:pl-4 text-[1.6rem] md:text-[2.1rem] font-semibold  text-[#064296]  text-center'> Our Partner</h2>

</div>

<div className='flex bg-blue-0 justify-center flex-wrap  md:border-2 w-[80%] mx-auto mb-[20px] mt-5 '>
    <div className='brandimg'>
    <img src={Mi} alt="MI BRAND" className='' />
    </div>

    <div className='brandimg'>
    <img src={acer} alt=" BRAND" className='' />
    </div>

    <div className=' brandimg'>
    <img src={Jbl} alt="MI BRAND" className='' />
    </div>


    <div className='brandimg'>
    <img src={samsung} alt="MI BRAND" className='' />
    </div>

    <div className='brandimg '>
    <img src={apple} alt="MI BRAND" className='' />
    </div>
    <div className='brandimg '>
    <img src={Mi} alt="MI BRAND" className='' />
    </div>

</div>

    </div>
  )
}

export default Brand
