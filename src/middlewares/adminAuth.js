const AdminAuth = (re, res, next) => {
    
  console.log("Adming auth middlware");
  const token = "abc";
  if (token === "abc") next();
  else res.status(401).send("Un Authorized");
};

module.exports = {
  AdminAuth,
};
