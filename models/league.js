const mongoose = require("mongoose");

//league schema

const leagueSchema = mongoose.Schema({
    name:String,
    location:{
        long:Number,
        lat:Number
    },
    price:Number
});

const League = module.exports = mongoose.model("League",leagueSchema);

//get leagues
module.exports.getLeagues = function(callback,limit){
    League.find(callback).limit(limit);
}

module.exports.getLeaguesInBudget = function(callback,log,lat,budget){
    //convert miles to meters
    //sumbmit query
    //return result as an array
    
 /* example code   
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