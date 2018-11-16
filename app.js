// app entry point
const express = require("express");
const myApp = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const League = require("./models/league");

myApp.use(bodyParser.json());

// Connect to mongoose
mongoose.connect("mongodb://localhost/leaguedb2",{useNewUrlParser:true} );
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

myApp.post("/api/leagues",(req,res)=>{
    let league = req.body;
    League.addLeague(league,(err,league)=>{
        if(err){
            throw err
        }
        res.json(league)
    });
});


myApp.put("/api/leagues/:_id",(req,res)=>{
    let id = req.params._id;
    let league = req.body;
    League.updateLeague(id,league,{},(err,league)=>{
        if(err){
            throw err
        }
        res.json(league)
    });
});
myApp.listen(3000);
console.log("running on port 3000");
