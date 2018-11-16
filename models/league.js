const mongoose = require("mongoose");

//league schema

const leagueSchema = mongoose.Schema({
    name:String,
    location:{
        longitude:Number,
        lattitude:Number
    },
    price:Number
});

const League = module.exports = mongoose.model("League",leagueSchema);

//get leagues
module.exports.getLeagues = function(callback,limit){
    League.find(callback).limit(limit);
}

// add league
module.exports.addLeague = function(league,callback){
    League.create(league,callback);
}


// edit/update league
module.exports.updateLeague = function(id,league,options,callback){
    let query = {_id:id};
    let update = {
        name: league.name,
        location: {longitude: league.longitude,
                    lattitude: league.lattitude
                },
        price:league.price
    }
    League.findOneAndUpdate(query,update,options,callback);
}


// delete league


// distance and budget search
module.exports.getLeaguesInBudget = function(callback,longitude,lattitude,budget){
    //convert miles to meters
    //sumbmit query
    //return result 
    
 /* example code for geospat
 db.places.find(
        {
          location:
            { $near :
               {
                 $geometry: { type: "Point",  coordinates: [ -73.9667, 40.78 ] },
                 $minDistance: 1000,
                 $maxDistance: 5000
               }
            }
        }
     )
}

*/
}