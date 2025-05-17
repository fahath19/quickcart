const express=require("express");
const app=express();
const connectdb=require("../config/mongodb");

connectdb().then(()=>{

    app.listen(300,()=>{
        console.log("database is connected");
    console.log("server is started successfully");
})
     

        
})
.catch((err)=>{
    console.log("database not connected");
    
})