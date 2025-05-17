import React from 'react'
import dekbanner from '../assets/banner/Desktopbanner.png'
import mobilebanner from '../assets/banner/Mobilebanner.jpg'
import samplebanner1 from '../assets/banner/headerbanner2.png'
import samplebanner2 from '../assets/banner/headerbanner3.png'

import Slider from './Slider'
const Banner = () => {
       const sliderimg=[
        {
                id:0,
                srcimg:dekbanner
        },
        {
          
          id:1,
          srcimg:samplebanner1
        },
        {
          
          id:2,
          srcimg:samplebanner2
        }
       ]

  return (
    <div className="   md:pt-[10%] pt-[45%] ">
      <Slider sliderimg={sliderimg}/>
    </div>
  )
}

export default Banner
