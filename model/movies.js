const mongoose = require("mongoose")
const schema = mongoose.Schema

const cinema = new schema({
 title: {
     type: String,
     default : "noname"
 },
 category: {
     type: String, 
     required: true
 },
 country : {
     type: String,
     default : "Nocountry"
 },
 year: {
     type: Number
 },
//  director_id : schema.Types.ObjectId,
director_id: {
    type: Number,
    default: 123123
},

 imdb_score: Number,
 img: String,
 views: {
     type: Number,
     default: 0
 }
})

module.exports = mongoose.model("movie" , cinema)
