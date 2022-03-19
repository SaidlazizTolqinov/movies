const express = require('express')
const app = express()
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const path = require("path")
const port = process.env.PORT || '3000'
const rCinema = require("./routers/movie")
const rAddCinema = require("./routers/addMovie")
// const rDirector = require("./routers/director")
const rUser = require("./routers/user")
const rIndex = require("./routers/index")
const rMidWare = require("./helper/error")


mongoose.connect("mongodb://localhost:27017/movies_web")
const db = mongoose.connection
db.on('open' , ()=>console.log("mongodb running"))
db.on('error' , ()=>console.log(err))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set("view engine" , "pug")
app.use(express.static(path.join(__dirname , "public")))


app.use(rIndex)
app.use(rCinema)
app.use(rAddCinema)
// app.use(rDirector)
app.use(rUser)
app.use(rMidWare)


app.listen(port, () => console.log("server running"))