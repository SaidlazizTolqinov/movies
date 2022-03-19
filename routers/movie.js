const express = require('express')
const router = express.Router()
const movies = require("../model/movies")

router.get("/api/movies" , (req, res)=>{
    movies.find({} , (err , data)=>{
        if(err) throw err
        // if(data=="") {
        //     res.send("Ma'lumot yo'q")
        // } else {
        //     res.render("Movies")
        // }
        res.render("MoviesPage")
    })
})


module.exports = router