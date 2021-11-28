const express=require("express");
const app=express();
const port=3333;
const sampleRoutes=require("./sampleDetails");

app.use( sampleRoutes);

const isAdmin= false;

app.use("/sample",(req,res,next)=>{
    if(isAdmin==true){
        next();
    }else{
        res.json("you are not an admin");
    }
})
app.get("*",(req,res)=>{
    res.status(404).send("404 not found")
})

app.listen(port,()=>{

    console.log(`server started and running on port ${port}`);
})