const mongoose=require("mongoose");

const connectdb=async ()=>{
       const mongodbstring="mongodb+srv://abdulbahad:abdulfahad@cluster.jmzoa.mongodb.net/ecomdata";
       await mongoose.connect(mongodbstring)
}
module.exports=connectdb;