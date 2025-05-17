import Banner from "./Components/Banner"
import Catogories from "./Components/Catogories"
import Futureproduct from "./Components/Futureproduct"
import Header from "./Components/Header"
import Product from "./Components/Product"
import Subheader from "./Components/Subheader"
import Brand from './Components/Brand'
import Service from "./Components/Service"
import Footer from "./Components/Footer"
import Buyproduct from "./Components/Buyproduct"
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Error from "./Components/Error"
import './index.css'
import Body from "./Components/Body"
import Orderpage from "./Components/Orderpage"
import { Provider, useSelector } from "react-redux"
import Appstore from "./Statemanagement/appstore"
import Contact from "./Components/Contact"
import ScrollToTop from "./Components/ScrollToTop"
import Imagemagnifier from "./Components/Imagemagnifier"
import Adminpage from "./Components/Adminpage"
import Addminlogin from "./Components/Addminlogin"
const Layout=()=>{
  return (
    

    <Provider store={Appstore}>

<div>
<ScrollToTop/>

     <Outlet/>
     {/* <Imagemagnifier/> */}
</div>
     </Provider>

  )
}

const router=createBrowserRouter([
     {
             path:"/",
             element:<Layout/>,
             errorElement:<Error/>,

             children:[
              {
                path:"/buyproduct/:id",
                element:<Buyproduct/>  ,
                errorElement:<Error/>
              },
              {
                   path:'/',
                   element:<Body/>,
                errorElement:<Error/>

              },
              {
                path:"/about",
                element:<Buyproduct/>
              },
              {

                path:"/orderpage",
                element:<Orderpage/>
              },
              
              {path:"/contact",
                element:<Contact/>
              },
              {
                      path:"/adminloginpage",
                      element:<Addminlogin/>

              },
              {
                path:"/adminpage",
                element:<Adminpage/>

        }
             ]

     }


])

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
     <RouterProvider router={router}/>
  </React.StrictMode>,
)
