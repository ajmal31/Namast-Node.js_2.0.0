const dotenv=require("dotenv")
dotenv.config()

const URI=process.env.DB_URI

module.exports={
    URI
}