const express = require("express");
const { AdminAuth } = require("./middlewares/adminAuth");
const { userAuth } = require("./middlewares/userAuth");

const app = express();

app.use('/adming',AdminAuth)
app.use("/user",userAuth)

app.get("/user", (req, res) => {
  console.log("second");
  res.send("second");
});

app.get("/user", (req, res, next) => {
  console.log("first");
  next();
});


app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
