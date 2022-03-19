const express = require("express")
const router = express.Router()
const User = require("../model/Users")
const bcryptjs = require("bcryptjs")

router.get("/register" , (req, res)=>{
    res.render("user" , {
        title: "Registration",
        h1: "Registration",
    })
})

router.post("/register" , (req, res)=>{
    const {username , password} = req.body
    bcryptjs.hash(password , 10 , (err, hash)=>{
        if(err) throw err
        const db = new User({
            username: username,
            password: hash
        })
        db.save().then((data) => {
            res.render("usersPage" , {
                title: "Users Page",
                dataFirst: data
            })
            // res.redirect("/")
        })
    })
})

router.get("/authenticate" , (req, res)=>{
    res.render("user" , {
        title: "Authenticate",
        h1: "Sign in"   
    })
})

router.post("/authenticate" , (req, res)=>{
    const {username, password} = req.body
    User.findOne({username: username}, (err, data)=>{
        if(err) {
            alert("username topilmadi")
        } else {
            bcryptjs.compare(password , data.password)
            .then((data) => {
                if(!data) {
                    alert("parolda xatolik bor")
                }else {
                    res.render("usersPage" , {
                        title: `${username}'s profile`,
                        dataSecond: data
                    })
                }
            })
        }
    })
})





module.exports=router