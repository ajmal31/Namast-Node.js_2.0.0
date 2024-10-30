const express = require("express");

const app = express();

app.get(
  "/user",
  (req, res, next) => {
    console.log("first");
    next();
  },
  (req, res,next) => {
    console.log("second");
    // res.send("second");
    next()
  },
  (req, res,next) => {
    console.log("third");
    // res.send("second");
    next()
  },
  (req, res,next) => {
    console.log("fourth");
    // res.send("second");
    next()
  },(req,res)=>{
    res.send("6th")
  }
);

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
