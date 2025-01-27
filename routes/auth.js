const express = require("express")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const router = express.Router()
const User = require("../Models/users")

router.post("/authenticate", async (req, res) => {
    const {email, password} = req.body
    if(!email){
      return res.status(400).json({message: "Email is required"})
    }
    if(!password){
      return res.status(400).json({message: "password is required"})
    }

    const user = await User.findOne({email})
    if(!user){
      return res.status(401).json({message: "Email or Password is incorrect"})
    }

    const validPassword = await bcrypt.compare(password, user.password)
    if(!validPassword){
      return res.status(401).json({message: "Email or Password is incorrect"})
    }

    const token = jwt.sign({userId: user._id}, process.env.JWT_SECRET)

    res.json({token})

})

module.exports = router 