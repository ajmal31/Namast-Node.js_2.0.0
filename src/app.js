const express = require("express");
const { AdminAuth } = require("./middlewares/adminAuth");
const { userAuth } = require("./middlewares/userAuth");
const { errorHandler } = require("./middlewares/errorHandler");

const app = express();

app.use('/admin',AdminAuth)
app.use("/user",userAuth)

// Whenever use use 4 parmeters of route handler/middlware it work request comes phase because request doest no have any error 
// but if not have 4 parameters it will work becasuse it'error handling it's doing somthing

app.get("/user/data", (req, res, next) => {
  console.log("first");
  throw new Error("shdfkjds")
  res.send("User Route handler")
});

app.use(errorHandler)

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});
