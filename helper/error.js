
const middleWare = (req, res, next)=>{
    const midWare = false
    if(midWare)
        next()
    else
        res.render("error", {
            title: "Page not founded"
        })
}

module.exports=middleWare