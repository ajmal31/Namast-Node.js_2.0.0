const express = require("express");
const { connectDb } = require("./config/db");
const { UserModel } = require("./model/user");

const app = express();

//JSON cnvert into JS object then update the req object
app.use(express.json());


app.post("/signup", async (req, res) => {
  const data = req.body;
  const user = new UserModel(data);

  try {
    const response = await user.save();
    return res.send(response);
  } catch (err) {
    res.status(400).send("Error occured while saving user");
  }
});

//Connect DB
connectDb()
  .then(() => {
    console.log("mongodb connection succesfull");
    app.listen(3000, () => {
      console.log("Server is listening on port 3000");
    });
  })
  .catch((err) => {
    console.log("mongodb not connected");
  });
