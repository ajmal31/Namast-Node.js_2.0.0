const mongoose=require("mongoose")
const {URI}=require("./contants")

const connectDb=async()=>{
    
    return await mongoose.connect(URI)
}

module.exports={connectDb}
