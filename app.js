// app entry point
const express = require("express");
const myApp = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const League = require("./models/league");

//Connect to mongoose
mongoose.connect("mongodb://localhost/leaguesideservice",{useNewUrlParser:true} );
const db = mongoose.connection;

myApp.get("/",(req,res)=>{
    res.send("please use correct api end points as indicated in documentation");

});

myApp.get("/api/leagues",(req,res)=>{
    League.getLeagues((err,leagues)=>{
        if(err){
            throw err
        }
        res.json(leagues)
    });
});
myApp.listen(3000);
console.log("running on port 3000");
