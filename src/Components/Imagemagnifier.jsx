import ReactImageMagnify from 'react-image-magnify';
import React from 'react'
import watchImg from '../assets/Product/speaker/speaker-removebg-preview.png'
const Imagemagnifier = ({sliderimg}) => {
  return (
    <div>
      <div className='w-[400px] h-[400px]  md:block mt-2 hidden'>

<ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: sliderimg
    },
    largeImage: {
        src: sliderimg,
        width: 529,
        height: 1050,
        
    },
    isHintEnabled:true,
}} />
      </div>

    </div>
  )
}

export default Imagemagnifier
