import React, { useEffect } from 'react'
import { useRef } from 'react'
import Adminpage from './Adminpage';
import Header from './Header';

const Addminlogin = () => {
      const refelement=useRef("");
      function getaddminpassword(){
          if(refelement.current.value=="admin" || refelement.current.value=="ADMIN"){
             
            window.location.pathname='/adminpage'
          }
          else{
            console.log("NO PASSWORD IS INCORRECT...","dfd",refelement.current.value);
          refelement.current.value=''
            
          }
          event.preventDefault();
      }
    

  return (
    <>
    <Header/>

    <div className='   md:pt-[16%] sm:pt-[90%] pt-[50%]'>
        <div className='md:w-[450px] md:h-[400px] flex flex-col  items-start md:mx-auto rounded-[10x] mx-5'>
                    <h2 className='text-[#5e5f61]  text-center font-semibold md:text-[2rem] 
                    text-[1.6rem] '>Welcome to QuickCart  </h2>
                    <h3 className='text-[1.5rem] md:text-[1.8rem] font-semibold  font-["Times New Roman", Times, serif;] text-[#5e5f61] '>Sign into your Addmin account</h3>
                    <form onSubmit={getaddminpassword}  >

                    <input type="password" className='w-[350px] border-2 p-2 rounded-[10px] mt-4 ' placeholder='Enter your admin password' ref={refelement}/>
                    <button className='mt-4 bg-blue-400 w-[150px]  py-1 rounded-[10px] text-white text-[1.4rem] ' onClick={getaddminpassword}>Log In</button>
                    </form>
                    

        </div>
    </div>
    </>

  )
}

export default Addminlogin
