import React from 'react'

const Footer = () => {

const date=new Date()

  return (
    <div className='footer bg-black '>
          <div className='  h-auto flex justify-center p-4 flex-wrap'>

           <div className=''>
              <ul className='footcont'>
                <li className='heading'>Online Store</li>
                <li>Men Clothing</li>
                <li>Women Clothing</li>
                <li>Mobile Accessories</li>
                <li>Shoe</li>
              </ul>
           </div>
           <div>
              <ul   className='footcont'>
                <li className='heading'>Helpful Link</li>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Shoe</li>
              </ul>
           </div>
           <div >
              <ul  className='footcont'>
                <li className='heading'>Partners</li>
                <li>acer</li>
                <li>Samsung</li>
                <li>Nike</li>
                <li>apple</li>
              </ul>
           </div>
           </div>
           <p className='text-white text-center  mt-4'>Copyright © {date.getFullYear()} Horizonium Solutions Pvt Ltd & Developed By Bahad </p>

    </div>
  )
}

export default Footer
