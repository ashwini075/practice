const express =require("express");
const app =express();
const dbadduser = require("./db.add.user");
const dbreaduser= require("./db.read");
//http://localhost:4000/adduser

app.get("/adduser",async (req, res) =>{

    try{
        const input=req.query;
        await dbadduser.adduser();

        res.json({message:"sucess"});
    }catch(err){
        res.json({message:"failure"});
    };

});

app.get("/readuser",async (req, res) =>{

    try{
        //const input=req.query;
        await dbreaduser.readAllUser();
        
        res.json({message:"sucess"});
    }catch(err){
        res.json({message:"failure"});
    };

});

app.listen(4000);
