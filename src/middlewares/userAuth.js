const userAuth = (req,res,next) => {

  console.log("user Auth Middlware");
  const token = "abc";
  if (token === "abc") {
    next();
    console.log("after next")
  }
  else res.status(401).send("Un Authorized");
};

module.exports = {
  userAuth,
};
