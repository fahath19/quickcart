import React from 'react'
import Banner from "./Banner"
import Catogories from "./Catogories"
import Futureproduct from "./Futureproduct"
import Product from "./Product"
import Subheader from "./Subheader"
import Brand from './Brand'
import Service from "./Service"
import Footer from './Footer'
import Header from './Header'
const Body = () => {
  return (
    <div>
<Header/>

         <Banner/>
         {/* <Subheader/> */}
    <Catogories/>
    <Product/>
    <Futureproduct/>
     <Brand/>
     <Service/>
     <Footer/>

    </div>
  )
}

export default Body
