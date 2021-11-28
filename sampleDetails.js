const express=require("express");

const router=express.Router();

router.get("/sample/products" , (req,res)=>{
    res.send(JSON.stringify({data:[{prodName:"Tresemme",prodType:"Shampoo"},
    {prodName:"Colgate",prodType:"Toothpaste"},
    {prodName:"OralB",prodType:"Toothbrush"}]}));
})

router.get("/sample/Users" , (req,res)=>{
    res.send(JSON.stringify({data:[{userName:"Piyush"},
    {userName:"Mickey"},
    {userName:"Edyoda"}
]}));
})


module.exports=router;
