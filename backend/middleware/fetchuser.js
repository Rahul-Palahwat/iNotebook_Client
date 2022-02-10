// for authentication we will give token
const jwt = require("jsonwebtoken");

const JWT_SECRET = "Rahul'sCo$de";

// middleware req,res,next teen function leta h
// yha pr jo next h na woh middleware ke baad jo likha hoga usko run krne ke liye h i.e async in any request
const fetchuser = (req, res, next) => {
  //Get the user from the jwt token and add id to req object
  const token = req.header('auth-token');
  if (!token) {
    res.status(401).send({ error: "Please authenticate using a valid token token" });
  }
  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    res.status(401).send({ error: "Please authenticate using a valid token try" });
  }
};

module.exports = fetchuser;
