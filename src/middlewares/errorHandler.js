const errorHandler=(err,req,res,next)=>{
    console.log("error handling middleware")
    // if(err) res.status(500).send("something went wrong")
    next()
    console.log("afte error next")

}

module.exports={
    errorHandler
}