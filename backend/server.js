console.log("server has started"); //start of project, please god gimme power to complete it AMEN !!!!!!!!!

import express from "express";
const app = express();

app.listen(8000,()=>{

    console.log("Server is running on PORT 8000"); //shows in console
})

app.get("/",(req,res)=>{

res.send("Server is Ready"); //shows on webpage
})