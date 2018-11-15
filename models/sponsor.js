const mongoose = require("mongoose");

//sponsor schema

const sponsorSchema = mongoose.Schema({
    name:string,
    location:{
        long:number,
        lat:number
    },
    budget:number
});

const Sponsor = module.exports = mongoose.model("Sponsor",sponsorSchema);