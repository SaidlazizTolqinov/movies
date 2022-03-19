const express = require('express')
const router = express.Router()
const movies = require("../model/movies")

router.get("/api/movies" , (req, res)=>{
    movies.find({} , (err , data)=>{
        res.render("MoviesPage" , {
            title: "Movies Page",
            data: data
        })
    })
})




module.exports = router