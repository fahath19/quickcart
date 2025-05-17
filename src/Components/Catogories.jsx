import React from 'react'
import laptop from '../assets/catgimg/pngwing.com (11).png'
import { catogoriesdata } from '../Server/Catogories'
const Catogories = () => {
  return (
    <div className=''>
        <div className='md:flex text-center  md:w-[388px] mt-4   md:justify-end'>

        <h2 className='md:pl-auto  md:pl-4 text-[1.5rem] md:text-[2.1rem] font-semibold  text-[#064296]'>Popular categories</h2>

        </div>
       {/* PRODUCT CATOGRIES  */}
        <div className=' flex  justify-center  md:justify-center pl-2  md:pl-[3rem] flex-wrap md:w-[93%] w-[auto] bg-[] md:ml-12 mt-8 mb-6 cursor-pointer '>

{
catogoriesdata.map(
  (item)=>

<div key={item.id} className='catcont md:w-[197px] md:h-[180px] w-[100px] h-[140px]  mr-5  bg-[rgba(242,242,242,255)] md:rounded-[20px] rounded-[10px] mb-4 '>
                <div className='catimg md:w-[140px] md:h-[100px] h-[60px] w-[90px]  mx-auto md:mt-7 mt-4  p-2 py-1 bg-blac'>

                <img src={item?.srcimg} alt="laptop" className='w-[100%] h-[100%] object-contain'/>
                </div>
                <h2 className='text-center md:text-[1rem] text-[14px] font-bold px-3 pt-2'>{item.name}</h2>
              </div>
  
)

}

        
          
      



              
           


          
        </div>
    </div>
  )
}

export default Catogories
