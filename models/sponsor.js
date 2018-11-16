const mongoose = require("mongoose");

//sponsor schema

const sponsorSchema = mongoose.Schema({
    name:String,
    location:{
        longitude:Number,
        lattitude:Number
    },
    budget:Number
});

const Sponsor = module.exports = mongoose.model("Sponsor",sponsorSchema);