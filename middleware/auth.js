const jwt = require("jsonwebtoken")
const User = require("../Models/users")

module.exports = async function(req, res, next) {
  if(!req.headers.authorization){
    return res.status(401).json({message: 'Unauthorized'})
  }

  const token = req.headers.authorization.split(' ')[1];
  //console.log(req.headers)
  //console.log(token)

  if(!token){
    return res.status(401).json({message: 'Unauthorized'})
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    //console.log(decoded)

    const user = await User.findById(decoded.userId)
    if(!user){
      return res.status(400).json({message:"User does not exist"})
    }

    req.user = user
    next()
  } catch (error) {
    res.status(401).json({message:"Invalid Token"})
  }

}