const express = require("express")
const router= express.Router()
const movies = require("../model/movies")

router.get("/api/addMovie" , (req, res)=>{
    res.render("addMovies" , {
        title: "Add Movies"
    })
})

router.post("/api/addMovie" , (req, res)=>{
    const {title , category, country, year, director_id , imdb_score , views, img} = req.body
    const db = new movies({
        title: title,
        category: category,
        country: country,
        year: year,
        director_id: director_id,
        imdb_score: imdb_score,
        views: views,
        img: `/img/${img}`
    })

    db.save(err=>{
        console.log(err);
    })
    res.redirect("/")
})


module.exports = router