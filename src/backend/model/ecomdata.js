const {Schema,model}=require("mongoose");
const Productdata=new Schema({

         productimg:{
                 type:String
         },
         productname:{
               type:String
         },
         beforeprice:{
                 type:Number
         }
         ,
         afterprice:{
                 type:Number
         }
         ,
         rating:{
                 type:Number
         }
         ,
         prdetailts:{
                 type:String
         }
});

module.exports=new model("Productdata",Productdata);