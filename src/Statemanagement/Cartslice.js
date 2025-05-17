import { createSlice } from "@reduxjs/toolkit";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const initialState={
     additems:[],
     carttotal:0,
     total:0

     

}
const Cartslice=createSlice({
     name:"Cart",
     initialState,
     reducers:{
            addcartitem(state,action){
               let findindex=state.additems.findIndex((data)=>data.id===action.payload.id)
                 if(findindex>=0 ){
                      state.additems[findindex].cartquantity++;
                 }
                 else{
                    let tempvariable={...action.payload,cartquantity:1}
                    state.additems.push(tempvariable);

                 }
                 state.carttotal=state.additems.length;
                 toast.success("Item is added !")
                 state.additems.map((item)=> state.totalamt += parseInt(item.price)  )

            }
,
            increment(state,action){
                   let findindex=state.additems.findIndex((item)=>item.id==action.payload.id);
                   if(state.additems[findindex].cartquantity>=0 && state.additems[findindex].cartquantity<=15 ){
                     state.additems[findindex].cartquantity++;
                     state.additems.map((item)=> state.totalamt += parseInt(item.price) * item.cartquantity  )

                   }
                    
            },
            decrement(state,action){
               let findindex=state.additems.findIndex((item)=>item.id==action.payload.id);
               if(state.additems[findindex].cartquantity >=2  ){
                 state.additems[findindex].cartquantity--;

               }
               else if(state.additems[findindex].cartquantity ==1 ){
                    let filteritem=state.additems.filter((item)=>item.id!=action.payload.id);
                     state.additems=filteritem;
                    console.log("HELLO WORLD");
                    state.carttotal--;
                 toast.error("Item is deleted !")
                   
               }
        }
        ,
        totalfuc:(state)=>{
          let total=0
          state.additems.forEach(item=>
               total +=item.cartquantity *item?.price     

          )
         state.total=total;
    }

        
     }
})
export const {addcartitem,increment,decrement,totalfuc}=Cartslice.actions;
export default Cartslice.reducer;