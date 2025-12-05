import express from "express";
const app=express();
app.get("/users",(req,res)=>{
    res.send("hello this is users page");
})
app.get("/admins",(req,res)=>{
    res.send("hello this is admin page");
})
app.listen(222,()=>{
    console.log("server running at port 222");
});
