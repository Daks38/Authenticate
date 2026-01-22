 const jwt = require("jsonwebtoken")
const User = require('../models/userRegister')
const secertkey = "a"
const authToken = async (req, res, next)=>{
 const authHeader = req.headers['authorization']
 const token = authHeader && authHeader.split(' ')[1]
 if (!token) {
   res.status(401).json({error: "Token manquant"})
 }
 try {
   const decode = jwt.verify(token, secertkey)
  //  const user = await User.findById(decode.id)
   req.user = decode  
   console.log(decode);

   next()
   
 } catch (err) {
   res.status(401).json({error: "Token invalide"})
   
 }
}
 module.exports = authToken